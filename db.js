const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/graphql-demo', {
    logging: false,
    operatorsAliases: false,
  }
);

const Dog = db.define('dogs', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  breed: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = {
  db,
  Dog
}
