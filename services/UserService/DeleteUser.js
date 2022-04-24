const UserModel = require("../../models/user");

exports.DeleteUser = async (email) => {
  const promises = [
    UserModel.findOneAndDelete({ email })
  ];

  const data = await Promise.all(promises);

  return data;
};