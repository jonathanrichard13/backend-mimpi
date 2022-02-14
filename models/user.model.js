const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

  namaLengkap: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  phone: {
    type: String,
    required: true,
    maxlength: 20
  },
  tanggalLahir: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 30
  },
  password: {
    type: String,
    required: true,
    maxlength: 30
  },
  isOwner: {
    type: Boolean,
    required: true
  },
  owner: {
    type: String,
    default: ""
  },
  companyName: {
    type: String
  },
  vision: {
    type: String
  },
  mission: {
    type: String
  },
  why: {
    type: String
  },
  dream: {
    type: String
  },
  lifePriority: {
    type: String
  },
  hobby: {
    type: String
  }

}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;