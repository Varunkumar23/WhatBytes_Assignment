const Doctor = require("../models/doctorModel");

exports.createDoctor = async (req, res) => {
  try {
    const { name, specialization, experience } = req.body;

    const newDoctor = new Doctor({
      name,
      specialization,
      experience,
      user: req.user.id,
    });

    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    console.error("Error creating doctor:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({ user: req.user.id });
    res.status(200).json(doctors);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    res.status(200).json(doctor);
  } catch (error) {
    console.error("Error fetching doctor:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const { name, specialization, experience } = req.body;
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      { name, specialization, experience },
      { new: true }
    );

    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    res.status(200).json(doctor);
  } catch (error) {
    console.error("Error updating doctor:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    console.error("Error deleting doctor:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
