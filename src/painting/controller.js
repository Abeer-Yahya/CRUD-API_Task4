const prisma = require("./prisma");

const getPaintings = (req, res) => {
  try {
    prisma.paintings.findMany().then((results) => {
      res.status(200).send(results);
    });
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error.message}`);
  }
};

const getPaintingById = (req, res) => {
  try {
    prisma.paintings
      .findUnique({
        where: { id: parseInt(req.params.id) },
      })
      .then((results) => {
        if (results) res.status(200).send(results);
        else res.status(404).send("Painting does not exist");
      });
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error.message}`);
  }
};

const addPainting = (req, res) => {
  try {
    prisma.paintings
      .create({
        data: {
          title: req.body.title,
          year: req.body.year,
          artist: req.body.artist,
          url: req.body.url,
        },
      })
      .then((results) => res.status(201).send(results));
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error.message}`);
  }
};

const removePainting = (req, res) => {
  try {
    if (!parseInt(req.params.id))
      return res.status(404).send("Painting with given ID not found");

    prisma.paintings
      .delete({
        where: { id: parseInt(req.params.id) },
      })
      .then((results) =>
        res
          .status(200)
          .send(`Painting deleted with ID: ${parseInt(req.params.id)}`)
      );
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error.message}`);
  }
};

const updatePainting = (req, res) => {
  try {
    prisma.paintings
      .update({
        where: { id: parseInt(req.params.id) },
        data: { url: req.body.url },
      })
      .then((results) =>
        res.status(201).send(`Painting modified with ID: ${req.params.id}`)
      );
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error.message}`);
  }
};

module.exports = {
  getPaintings,
  getPaintingById,
  addPainting,
  removePainting,
  updatePainting,
};
