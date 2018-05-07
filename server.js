const expressGraphql = require('express-graphql');
const express = require('express');
const app = express();
const {db} = require('./db');
const seed = require('./seed');
const PORT = 8080;

app.use('/graphql', expressGraphql( (req, res) => ({
  schema,
  pretty: true,
  graphiql: true,
  context: { req, res, models },
})));

db.sync({ force: true })
  .then(() => seed())
  .then(() => {
    // Start Listening on specified port:
    app.listen(PORT, () => console.log(`Ready and waiting on port ${PORT}`));
  })
  .catch(console.error)
