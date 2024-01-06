const dbSettings = {
  "development": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE_DEVELOPMENT,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  },
  "test": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE_TEST,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  },
  "production": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE_PRODUCTION,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  }
}

module.exports = dbSettings
