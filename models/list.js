const { model, Schema } = require("mongoose");

const waitingListSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
      lowercase: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("list", waitingListSchema)