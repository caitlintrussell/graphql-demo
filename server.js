const expressGraphql = require('express-graphql');
const express = require('express');
const app = express();
const {db, models} = require('./db');
const schema = require('./graphql');
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
    app.listen(PORT, () => console.log(`Ready and waiting on port ${PORT}`));
  })
  .catch(console.error)
