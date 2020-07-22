const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  company: {
    type: String,
    required: true,
    minlength: 2,
  },
  recruiter: {
    type: String,
    required: true,
    minlength: 3,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    minlength: 2,
  },
  published: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Post", schema)
