const { DocType, PageType } = require("./types")
// const jwt = require('jsonwebtoken');
const { User, Doc, Page } = require("../models")
const { GraphQLString } = require("graphql")

const { createJwtToken } = require("../util/auth")

const register = {
  type: GraphQLString,
  description: "Register new user", 
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const { username, email, password, displayName } = args
    const user = new User({ username, email, password, displayName })

    await user.save()
    const token = createJwtToken(user)
    return token
  },
}

const login = {
  type: GraphQLString,
  description: "Login user",
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const user = await User.findOne({ email: args.email }).select("+password")
    console.log(user)
    if (!user || args.password !== user.password) {
      throw new Error("Invalid credentials")
    }

    const token = createJwtToken(user)
    return token
  },
}

const addDoc = {
  type: DocType,
  description: "Create a new document",
  args: {
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    pages: { type: GraphQLString },
  },
  resolve(parent, args, { verifiedUser }) {
    console.log("Verified User: ", verifiedUser)
    if (!verifiedUser) {
      throw new Error("Unauthorized")
    }

    const doc = new Doc({
      _id: verifiedUser._id,
      title: args.title,
      pages: args.pages,
    })

    return doc.save()
  },
}

const updateDoc = {
  type: DocType,
  description: "Update document",
  args: {
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    pages: { type: GraphQLString },
  },
  async resolve(parent, args, { verifiedUser }) {
    if (!verifiedUser) {
      throw new Error("Unauthenticated")
    }
    const docUpdated = await Doc.findOneAndUpdate(
      {
        _id: args.id,
        authorId: verifiedUser._id,
      },
      { title: args.title, pages: args.pages },
      {
        new: true,
        runValidators: true,
      }
    )

    if (!docUpdated) {
      throw new Error("No doc with the given ID found for the author")
    }

    return docUpdated
  },
}

const deleteDoc = {
  type: GraphQLString,
  description: "Delete document",
  args: {
    docId: { type: GraphQLString },
  },
  async resolve(parent, args, { verifiedUser }) {
    console.log(verifiedUser)
    if (!verifiedUser) {
      throw new Error("Unauthenticated")
    }
    const docDeleted = await Doc.findOneAndDelete({
      _id: args.docId,
      authorId: verifiedUser._id,
    })
    if (!docDeleted) {
      throw new Error("No document with the given ID found for the author")
    }

    return "Doc deleted"
  },
}

const addPage = {
  type: PageType,
  description: "Create a new page in the document",
  args: {
    page: { type: GraphQLString },
    DocId: { type: GraphQLString },
  },
  resolve(parent, args, { verifiedUser }) {
    const page = new Page({
      userId: verifiedUser._id,
      docId: args.docId,
      page: args.page,
    })
    return page.save()
  },
}

const updatePage = {
  type: PageType,
  description: "Update page on this document",
  args: {
    id: { type: GraphQLString },
    page: { type: GraphQLString },
  },
  async resolve(parent, args, { verifiedUser }) {
    if (!verifiedUser) {
      throw new Error("Unauthenticated")
    }
    const pageUpdated = await Page.findOneAndUpdate(
      {
        _id: args.id,
        userId: verifiedUser._id,
      },
      { page: args.page },
      {
        new: true,
        runValidators: true,
      }
    )

    if (!pageUpdated) {
      throw new Error("No page with the given ID found for the author")
    }

    return pageUpdated
  },
}

const deletePage = {
  type: GraphQLString,
  description: "Delete page",
  args: {
    pageId: { type: GraphQLString },
  },
  async resolve(parent, args, { verifiedUser }) {
    console.log(verifiedUser)
    if (!verifiedUser) {
      throw new Error("Unauthenticated")
    }
    const pageDeleted = await Page.findOneAndDelete({
      _id: args.pageId,
      userId: verifiedUser._id,
    })
    if (!PageDeleted) {
      throw new Error("No page with the given ID found for the author")
    }

    return "page deleted"
  },
}

module.exports = {
  register,
  login,
  addDoc,
  addPage,
  updateDoc,
  deleteDoc,
  updatePage,
  deletePage,
}