const { connect } = require("mongoose");

const { MONGODB_URI } = process.env;

exports.connectDB = () => {
  connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    .then(() => console.log("database connection successful"))
    .catch(() => {
      console.log("database connection failed, exiting now...");
      process.exit();
    });
};
