const bcrypt = require("bcrypt");
const prisma = require("./prisma");
const { createTokens } = require("../middleware/JWT");
const registerUser = (req, res) => {
  try {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
      prisma.users
        .create({
          data: {
            username: username,
            password: hash,
          },
        })
        .then((results) => res.status(201).send("User created successfully"));
    });
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error.message}`);
  }
};
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.users.findUnique({
    where: { username: username },
  });

  if (!user) res.status(400).send("User doesn't exist!");
  const dbPassword = user.password;
  bcrypt.compare(password, dbPassword).then((match) => {
    if (!match) {
      res.status(400).send("Wrong username and password combination");
    } else {
      const accessToken = createTokens(user);
      res.cookie("access-token", accessToken, {
        maxAge: 2592000000,
        httpOnly: true,
      });
      res.status(201).send("Logged In");
    }
  });
};

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
          location: req.body.location,
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
        data: { location: req.body.location },
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
  registerUser,
  loginUser,
};
