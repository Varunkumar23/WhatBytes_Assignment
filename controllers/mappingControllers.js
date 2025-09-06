const Doctor = require("../models/doctorModel");
const Patient = require("../models/patientModel");
const Mapping = require("../models/mapping");
const authMiddleware = require("../middlewares/authMiddleware");

// Create a new mapping
exports.createMapping = async (req, res) => {
  try {
    const { doctorId, patientId } = req.body;
    const userId = req.user.id;

    const mapping = new Mapping({
      doctor: doctorId,
      patient: patientId,
      user: userId,
    });

    await mapping.save();
    res.status(201).json(mapping);
  } catch (error) {
    console.error("Error creating mapping:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getMappings = async (req, res) => {
  try {
    const userId = req.user.id;
    const mappings = await Mapping.find({ user: userId })
      .populate("doctor")
      .populate("patient");
    res.status(200).json(mappings);
  } catch (error) {
    console.error("Error fetching mappings:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getMappingById = async (req, res) => {
  try {
    const mapping = await Mapping.findById(req.params.id)
      .populate("doctor")
      .populate("patient");
    if (!mapping) {
      return res.status(404).json({ message: "Mapping not found" });
    }
    res.status(200).json(mapping);
  } catch (error) {
    console.error("Error fetching mapping:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateMapping = async (req, res) => {
  try {
    const { doctorId, patientId } = req.body;
    const mapping = await Mapping.findById(req.params.id);
    if (!mapping) {
      return res.status(404).json({ message: "Mapping not found" });
    }
    mapping.doctor = doctorId;
    mapping.patient = patientId;
    await mapping.save();
    res.status(200).json(mapping);
  } catch (error) {
    console.error("Error updating mapping:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteMapping = async (req, res) => {
  try {
    const mapping = await Mapping.findByIdAndDelete(req.params.id);

    if (!mapping) {
      return res.status(404).json({ message: "Mapping not found" });
    }

    res.status(200).json({ message: "Mapping deleted successfully" });
  } catch (error) {
    console.error("Error deleting mapping:", error);
    res.status(500).json({ message: "Server error" });
  }
};
