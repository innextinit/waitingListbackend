const UserModel = require("../../models/user");
const { compare } = require("bcryptjs");
const { SignToken } = require("./SignToken");

exports.LocalLogin = async (email, password) => {
  const user = await UserModel.findOne({
    email
  })

  if (!(await compare(password, user.password))) throw new Error("Invalid Credentials");
  
  const access_token = SignToken({
    _id: user._id,
    email: user.email,
    access_level: user.access_level
  })

  return { access_token, user }
}