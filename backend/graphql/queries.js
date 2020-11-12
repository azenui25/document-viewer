const { GraphQLList, GraphQLID } = require("graphql")
const { UserType, DocType, PageType } = require("./types")
const { User, Page, Doc } = require("../models")

const users = {
  type: new GraphQLList(UserType),
  description: "Retrieves list of users",
  resolve(parent, args) {
    return User.find()
  },
}

const user = {
  type: UserType,
  description: "Retrieves one user",
  args: { id: { type: GraphQLID } },

  resolve(parent, args) {
    return User.findById(args.id)
  },
}

const docs = {
  type: new GraphQLList(DocType),
  description: "Retrieves list of Docs",
  resolve() {
    return Doc.find()
  },
}

const doc = {
  type: DocType,
  description: "Retrieves one Doc",
  args: { id: { type: GraphQLID } },
  resolve(_, args) {
    return Doc.findById(args.id)
  },
}
const pages = {
  type: new GraphQLList(PageType),
  description: "Retrieves list of Pages",
  resolve() {
    return Page.find()
  },
}

const page = {
  type: PageType,
  description: "Retrieves one Page",
  args: { id: { type: GraphQLID } },
  resolve(_, args) {
    return Page.findById(args.id)
  },
}

module.exports = { users, user, docs, doc, pages, page }