const mongoose = require("mongoose");

const mappingSchema = new mongoose.Schema(
  {
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

  },
  { timestamps: true }
);

const Mapping = mongoose.model("Mapping", mappingSchema);

module.exports = Mapping;
