const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  fullName: String,
  jobTitle: String,
  shortDescription: String,
  profileImage: String, // URL or base64 string
  mobilePhone: String,
  officePhone: String,
  email: String,
  website: String,
  address: String,
  instagram: String,
  telegram: String,
  linkedin: String,
  twitter: String,
  other: String,
  cardNumber: String,
  sheba: String,
  gallery: [String],
  video: String,
  additionalDescription: String,
  userInfoForm: String,
  customers: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;