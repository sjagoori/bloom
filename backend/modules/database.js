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
  try {
    const database = client.db(db);
    const collection = database.collection(collect);

    return await collection.findOne(query);
  } catch (error) {
    console.log("Couldn't find document");
  }
};



/**
 * Function returns all entries in given database:collection pair
 * @param {String} db database to look in
 * @param {String} collect collection of the database
 * @param {Object} query query (optional)
 * @param {Object} options options (optional)
 * @source https://docs.mongodb.com/drivers/node/usage-examples/find/
 */
exports.findMany = async (db, collect, query, options) => {
  try {
    await client.connect()

    const database = client.db(db)
    const collection = database.collection(collect)

    const result = await collection.find(query ? query : null, options && query ? options : null).toArray()

    return result

  } catch (error) {
    return error
  }
}


/**
 * Function find document in collection based on a keyword and optional options
 * @param {String} db target database
 * @param {String} collect target collection
 * @param {String} keyword keyword to search with
 * @param {Object} options search options (optional)
 * @source https://docs.mongodb.com/drivers/node/usage-examples/findOne/
 * @source https://shabier.medium.com/web-development-crud-web-application-76f3b7ce127b
 */
exports.find = async (db, collect) => {
  try {
    const database = client.db(db);
    const collection = database.collection(collect);

    return await collection.find();
  } catch (error) {
    console.log("Couldn't find document");
  }
};

/**
 * Function inserts one document in collection
 * @param {String} db target database
 * @param {String} collect target collection
 * @param {Object} data object with document to insert
 * @source https://docs.mongodb.com/drivers/node/usage-examples/insertOne/
 * @source https://shabier.medium.com/web-development-crud-web-application-76f3b7ce127b
 */
exports.insertOne = async (db, collect, data) => {
  try {
    const database = client.db(db);
    const collection = database.collection(collect);
    const document = data;

    collection.insertOne(document);
  } catch (error) {
    console.log("Couldn't insert document");
  }
};

/**
 * Function update a document with given document
 * @param {String} db target database
 * @param {String} collect target collection
 * @param {String} user_id the user's user_id
 * @param {Object} data object to update document with
 * @source https://docs.mongodb.com/drivers/node/usage-examples/updateOne/
 * @source https://shabier.medium.com/web-development-crud-web-application-76f3b7ce127b
 */
exports.updateOne = async (db, collect, user_id, data) => {
  try {
    const database = client.db(db);
    const collection = database.collection(collect);

    const filter = { user_id: user_id };
    const options = { upsert: true };

    const updateDoc = {
      $set: {
        chatData: data
      }
    };

    const result = await collection.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  } catch (error) {
    console.log("Couldn't update document");
  }
};
