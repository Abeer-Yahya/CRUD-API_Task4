const { Router } = require("express");
const { validateToken } = require("../middleware/JWT");
const controller = require("./controller");

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

module.exports = router;
