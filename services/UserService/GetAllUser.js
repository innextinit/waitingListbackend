const UserModel = require("../../models/user")

exports.GetAllUser = async (filter, options) => {
  const {
    page,
    limit,
  } = options
  
  const users = await UserModel.find(filter)
    .limit(limit)
    .skip((page - 1) * limit)
    .exec();
  const total_documents = await UserModel.countDocuments(filter);

  return {
    page,
    limit,
    total_documents,
    users
  }
}