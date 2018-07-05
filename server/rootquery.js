const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
} = graphql // destructure the objects we need from graphql

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // this will be filled in a bit
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
}) // export the root query

