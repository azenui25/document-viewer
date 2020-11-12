// Import required stuff from graphql
const { GraphQLSchema, GraphQLObjectType } = require("graphql")

// Import queries
const { users, user, docs, doc, pages, page } = require("./queries")

// Import mutations
const {
  register,
  login,
  addDoc,
  addPage,
  updateDoc,
  deleteDoc,
  updatePage,
  deletePage,
} = require("./mutation")

// Define QueryType
const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: { users, user, docs, doc, pages, page },
})

// Define MutationType
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: {
    register,
    login,
    addDoc,
    addPage,
    updateDoc,
    deleteDoc,
    updatePage,
    deletePage,
  },
})

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
})