const { body } = require("express-validator");
const {
  LocalSignUp,
  LocalLogin,
} = require("../services/AuthService");
const { UserExists } = require("../services/UserService")
const { errorResponse, successResponse } = require("../utils/responseHandler");

exports.validateRequestBody = (action) => {
  switch (action) {
    case "signup":
      return [
        body("email").isEmail(),
        body("password").isString(),
      ]
    case "login":
      return [
        body("email").isEmail(),
        body("password").exists(),
      ]
    default:
      break;
  }
}

exports.localSignUp = async (req, res) => {
  try {
    let {
      email,
      password,
    } = req.body

    email = email.toLowerCase();

    if (await UserExists(email)) {
      return errorResponse(res, 409, "User already taken")
    }

    const { access_token, user } = await LocalSignUp(email, password)

    return successResponse(res, 201, {
      access_token, user
    });
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
}

exports.localLogin = async (req, res) => {
  try {
    let {
      email,
      password,
    } = req.body

    email = email.toLowerCase();
    if (!(await UserExists(email))) {
      return errorResponse(res, 404, "Invalid credentials");
    }

    const { access_token, user } = await LocalLogin(email, password)

    return successResponse(res, 200, { access_token, user });
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
}