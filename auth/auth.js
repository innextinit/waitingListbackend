const { verify } = require("jsonwebtoken");
const { errorResponse } = require("../utils/responseHandler");

const { JWT_SECRET } = process.env;

exports.auth = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) return errorResponse(res, 403, "request not authenticated");

  verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return errorResponse(res, 403, "invalid token");
    req.user = decoded;
    return next();
  });
};