//const dotenv = require('dotenv');
//dotenv.config({ path: `./.env` });

const config = {
  mongodb: {
    url: process.env.MONGO_URL,
    databaseName: process.env.DATABASE_NAME,

    options: {
      useNewUrlParser: true // removes a deprecation warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    }
  },

  migrationsDir: process.env.MIGRATIONS_DIR,
  changelogCollectionName: process.env.CONTROL_COLLECTION
};

module.exports = config;
