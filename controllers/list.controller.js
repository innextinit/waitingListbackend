const { body } = require("express-validator");
const {
  GetAllListMember,
  AddToWaitingList,
  IsOnWaitingList,
} = require("../services/WaitingListService");
const { successResponse, errorResponse } = require("../utils/responseHandler");

exports.listValidationRules = (action) => {
  switch (action) {
    case "add":
      return [
       body("email").isEmail(),
     ]
    default:
      break;
  }
}

exports.getAllListMember = async (req, res) => {
  try {
    const { user } = req;
    const { page, limit } = req.query;

    if (user.access_level !== 1) {
      return errorResponse(res, 401, "Unauthorized");
    }

    const filter = {};
    const options = {
      page: Number(page),
      limit: Number(limit),
      sort: { createdAt: -1 },
    };

    const response = await GetAllListMember(filter, options);
    return successResponse(res, 200, response);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
}

exports.addToWaitingList = async (req, res) => {
  try {
    const { email } = req.body;
    const isOnWaitingList = await IsOnWaitingList(email);

    if (isOnWaitingList) {
      return successResponse(res, 409, "Thanks for joining waiting list")
    }
    await AddToWaitingList(email);

    return successResponse(res, 201, "Thanks for joining waiting list")
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
}