const Patient = require("../models/patientModel");

exports.createPatient = async (req, res) => {
  try {
    const { name, age, gender, address, phone } = req.body;

    const newPatient = new Patient({
      name,
      age,
      gender,
      address,
      phone,
      user: req.user.id,
    });

    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    console.error("Error creating patient:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find({ user: req.user.id });
    res.status(200).json(patients);
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.status(200).json(patient);
  } catch (error) {
    console.error("Error fetching patient:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const { name, age, gender, address, phone } = req.body;
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      { name, age, gender, address, phone },
      { new: true }
    );

    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.status(200).json(patient);
  } catch (error) {
    console.error("Error updating patient:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    console.error("Error deleting patient:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
