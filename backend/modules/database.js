const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}&useUnifiedTopology=true`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect();

/**
 * Function find document in collection based on a keyword and optional options
 * @param {String} db target database
 * @param {String} collect target collection
 * @param {String} keyword keyword to search with
 * @param {Object} options search options (optional)
 * @source https://docs.mongodb.com/drivers/node/usage-examples/findOne/
 * @source https://shabier.medium.com/web-development-crud-web-application-76f3b7ce127b
 */
exports.findOne = async (db, collect, query) => {
  // We want to connect to the "userdb" database
  const database = client.db(db);

  // We want to connect to the "users" collection in the "userdb" database
  const collection = database.collection(collect);
  // We want to execute this query on the "users" document in the "users" collection
  return await collection.findOne(query);
};

/**
 * Function inserts one document in collection
 * @param {String} db target database
 * @param {String} collect target collection
 * @param {Object} data object with document to insert
 * @source https://docs.mongodb.com/drivers/node/usage-examples/insertOne/
 * @source https://shabier.medium.com/web-development-crud-web-application-76f3b7ce127b
 */
exports.method = async function insertOne(db, collect, data) {
  // We want to connect to the "userdb" database
  const database = client.db(db);
  // We want to connect to the "users" collection in the "userdb" database
  const collection = database.collection(collect);
  // We want to add this document to the "users" collection
  const document = data;

  // We insert the document to the "users" collection
  collection
    .insertOne(document)
    .then(
      console.log(
        `Inserted ${document.username} with the password ${document.password}`
      )
    );
};
