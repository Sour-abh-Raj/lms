const { connect } = require("mongoose")

const connectDb = async () => {
  return connect(process.env.DB_URI, { dbName: process.env.DB_NAME })
  // return connect("mongodb://lms_user:lms_password@localhost:27017/lms")
}

module.exports = { connectDb }
