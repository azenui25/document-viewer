const mongoose = require("mongoose")

const docSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    pages: {
      type: Array,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("doc", docSchema)