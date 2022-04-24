const {
  GetAllUser,
  DeleteUser,
  UserExists,
} = require("../services/UserService")
const { successResponse, errorResponse } = require("../utils/responseHandler")

exports.userValidationRules = (action) => {
  switch (action) {
    case "delete":
      return []
    default:
      break;
  }
}

exports.getAllUser = async (req, res) => {
  try {
    const { user } = req;
    const {
      limit = 10,
      page = 1,
    } = req.query;

    if (user.access_level < 2) {
      return errorResponse(res, 401, "Unauthorized");
    }
    
    const filter = {};
    const options = {
      page: Number(page),
      limit: Number(limit),
      sort: { createdAt: -1 },
    };
    const response = await GetAllUser(filter, options)
    return successResponse(res, 200, response)
  } catch (error) {
    return errorResponse(res, 500, error.message)
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const { user } = req;
    let { email } = req.query;

    if (user.access_level < 2) {
      return errorResponse(res, 401, "Unauthorized");
    }

    email = email.split(",")
    const promises = []

    for (let i = 0; i < email.length; i++) {
      promises.push(
        UserExists(email[i])
          .then((exists) => {
            if (exists) {
              return DeleteUser(email[i]);
            }
            return "Not found";
          })
          .catch((error) => errorResponse(res, 500, error))
      );
    }

    const response = await Promise.all(promises);
    return successResponse(res, 200, response);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
}