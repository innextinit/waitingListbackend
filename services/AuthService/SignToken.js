const { sign } = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

exports.SignToken = (payload) => {
  const token = sign(payload, JWT_SECRET, { expiresIn: "1h" });

  return token;
};
