const { Router } = require("express");
const { validateToken } = require("../middleware/JWT");
const controller = require("./controller");
const Log = require("../../models/logs");
const router = Router();

// Register routes
router.post("/register", controller.registerUser);
router.post("/login", controller.loginUser);

// CRUD routes
router.get("/", controller.getPaintings);
router.post("/", validateToken, controller.addPainting);
router.get("/:id", controller.getPaintingById);
router.put("/:id", validateToken, controller.updatePainting);
router.delete("/:id", validateToken, controller.removePainting);

//Logs route
router.get("/mongo/logs", async (req, res, next) => {
  let { page = 1, size = 10 } = req.query;

  const limit = parseInt(size);
  const skip = (page - 1) * size;

  const users = await Log.find().limit(limit).skip(skip);

  res.send({ page, size, data: users });
});

module.exports = router;
