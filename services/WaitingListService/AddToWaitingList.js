const WaitingListModel = require("../../models/list");

exports.AddToWaitingList = async (email) => {
  const user = await WaitingListModel.create({email})
  return user
}