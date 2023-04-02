const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getPaintings);
router.post("/", controller.addPainting);
router.get("/:id", controller.getPaintingById);
router.put("/:id", controller.updatePainting);
router.delete("/:id", controller.removePainting);

module.exports = router;
