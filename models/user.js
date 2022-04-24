const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    access_level: { type: Number, default: 1, enum: [1, 2, 3] },
    is_active: { type: Boolean, default: true },
    is_email_verified: { type: Boolean, default: false }
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userSchema);