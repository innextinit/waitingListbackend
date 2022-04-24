const UserModel = require("../../models/user");
const { SignToken } = require("./SignToken");
const { hash } = require("bcryptjs");

exports.LocalSignUp = async (email, password) => {
  const hashedPassword = await hash(password, 10);

  const user = await UserModel.create({
    email,
    password: hashedPassword
  })

  const access_token = SignToken({
    _id: user._id,
    email,
    access_level: user.access_level
  })

  return { access_token, user }
}