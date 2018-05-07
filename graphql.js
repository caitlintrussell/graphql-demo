const { readFileSync } = require('fs');
const { makeExecutableSchema } = require('graphql-tools');
const Query = require('./query')
const Mutation = require('./mutation')

const typeDefs = readFileSync('./schema.graphql', 'utf-8');
const resolvers = { Query, Mutation }

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema;
