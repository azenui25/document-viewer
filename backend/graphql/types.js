const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
  } = require("graphql")
  
  const { User, Doc, Page } = require("../models")
  
  const UserType = new GraphQLObjectType({
    name: "User",
    description: "User type",
    fields: () => ({
      id: { type: GraphQLID },
      username: { type: GraphQLString },
      email: { type: GraphQLString },
      displayName: { type: GraphQLString },
    }),
  })
  
  const DocType = new GraphQLObjectType({
    name: "Doc",
    description: "Doc type",
    fields: () => ({
      _id: { type: GraphQLID },
      title: { type: GraphQLString },
      author: {
        type: UserType,
        resolve(parent, args) {
          return User.findById(parent.authorId)
        },
      },
      pages: {
        type: GraphQLList(PageType),
        resolve(parent, args) {
          return Page.find({ docId: parent.id })
        },
      },
    }),
  })
  
  const PageType = new GraphQLObjectType({
    name: "Page",
    description: "page type",
    fields: () => ({
      id: { type: GraphQLID },
      page: { type: GraphQLString },
      user: {
        type: UserType,
        resolve(parent, args) {
          return User.findById(parent.userId)
        },
      },
      doc: {
        type: DocType,
        resolve(parent, args) {
          return Doc.findById(parent.docId)
        },
      },
    }),
  })
  
  module.exports = { UserType, DocType, PageType }