const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, doctorController.createDoctor);
router.get("/", authMiddleware, doctorController.getDoctors);
router.get("/:id", authMiddleware, doctorController.getDoctorById);
router.put("/:id", authMiddleware, doctorController.updateDoctor);
router.delete("/:id", authMiddleware, doctorController.deleteDoctor);
module.exports = router;
