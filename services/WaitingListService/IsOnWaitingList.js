const WaitingListModel = require("../../models/list");

exports.IsOnWaitingList = async (email) => {
  const userExists = await WaitingListModel.exists({
    email
  })
  return userExists
}