require('dotenv').config();
const expressSession = require('express-session');
const mongoDbStore = require('connect-mongodb-session');

function createSessionStore() {
  const MongoDBStore = mongoDbStore(expressSession);

  const store = new MongoDBStore({
    uri: process.env.DBURL,
    databaseName: process.env.DBNAME,
    collection: process.env.DBSESSIONCOLLECTION,
  });

  return store;
}

function createSessionConfig() {
  return {
    secret: process.env.SESSIONSECRET,
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000,
    },
  };
}

module.exports = createSessionConfig;
