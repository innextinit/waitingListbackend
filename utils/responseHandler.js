exports.errorResponse = (res, statusCode = 500, error) =>
  res.status(statusCode).json(error);

exports.successResponse = (res, statusCode = 200, data) =>
  res.status(statusCode).json(data);
