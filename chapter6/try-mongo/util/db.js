const { MongoClient, ServerApiVersion } = require("mongodb");
const { env } = require("node:process");

const CONFIG = {
  user: env.R_MONGO_USERNAME,
  passwd: env.R_MONGO_PASSWD,
  cluster: env.R_MONGO_CLUSTER,
};

const uri = `mongodb+srv://${CONFIG.user}:${CONFIG.passwd}@${CONFIG.cluster}.tunptv5.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

module.exports = client;
