const { validationResult } = require("express-validator");
const { errorResponse } = require("./responseHandler");

module.exports = async (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) return next();
  const extractedErrors = [];
  errors.array().forEach((err) => {
    extractedErrors.push(`${err.param} invalid`);
  });

  return errorResponse(res, 400, { error: errors.array()[0] });
};
