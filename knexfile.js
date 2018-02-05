module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql:///planet-wager'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
