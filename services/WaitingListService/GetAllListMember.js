const WaitingListModel = require("../../models/list")

exports.GetAllListMember = async (filter, options) => {
  const {
    page,
    limit,
  } = options
  
  const list = await WaitingListModel.find(filter)
    .limit(limit)
    .skip((page - 1) * limit)
    .exec();
  const total_documents = await WaitingListModel.countDocuments(filter);

  return {
    page,
    limit,
    total_documents,
    list
  }
}