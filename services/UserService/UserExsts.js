const UserModel = require("../../models/user");

exports.UserExists = async (email) => {
  const userExists = await UserModel.exists({
    email
  })
  return userExists
}