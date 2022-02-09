const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const dbName = 'b30wd';
// const dbUrl = `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.1.9/fun`;
const dbUrl = `mongodb+srv://gunabang:Gceb2015@demo.wje2a.mongodb.net/test`;

module.exports = {
  dbName,
  dbUrl,
  MongoClient,
};
