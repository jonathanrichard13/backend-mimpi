const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const freelancerSchema = new Schema(
  {
    username: { type: String, required: true },
    keterampilan: { type: String, required: true },
    level: { type: String, required: true },
    headline: { type: String, required: true },
    deskripsi: {type: String, required: true},
    namaStandard: {type: String, required: true},
    deskripsiStandard: {type: String, required: true},
    revisiStandard: {type: String, required: true},
    hargaStandard: {type: Number, required: true},
    namaPremium: {type: String, required: true},
    deskripsiPremium: {type: String, required: true},
    revisiPremium: {type: String, required: true},
    hargaPremium: {type: Number, required: true},
    
  },
  {
    timestamps: true,
  }
);

const Freelance = mongoose.model("Freelancer", freelancerSchema);

module.exports = Freelance;
