const mongoose = require("mongoose")
const { modelName } = require("./User")

const pageSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    pageNr: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    docId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("page", pageSchema)