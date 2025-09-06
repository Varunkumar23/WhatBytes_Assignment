const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const mappingController = require("../controllers/mappingControllers");

router.post("/", authMiddleware, mappingController.createMapping);
router.get("/", authMiddleware, mappingController.getMappings);
router.get("/:id", authMiddleware, mappingController.getMappingById);
router.put("/:id", authMiddleware, mappingController.updateMapping);
router.delete("/:id", authMiddleware, mappingController.deleteMapping);
module.exports = router;
