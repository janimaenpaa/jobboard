require("dotenv").config()
const { ApolloServer, UserInputError, gql } = require("apollo-server")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const Recruiter = require("./models/Recruiter")
const Post = require("./models/Post")

mongoose.set("useFindAndModify", false)

console.log(`connecting to ${process.env.MONGODB_URI}`)

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to MongoDB")
  })
  .catch((error) => {
    console.log("error connection to MongoDB:", error.message)
  })

const typeDefs = gql`
  enum allowedState {
    WAITING
    ACCEPTED
    HIDDEN
    PINNED
  }

  type Post {
    id: ID!
    title: String!
    company: String!
    recruiter: String!
    description: String!
    location: String!
    published: String!
    deadline: String
    link: String!
    state: allowedState!
  }

  type Recruiter {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    company: String!
    posts: [Post!]!
  }

  type Token {
    token: String!
  }

  type Query {
    postCount: Int!
    recruiterCount: Int!
    allPosts: [Post!]!
    allRecruiters: [Recruiter!]!
    findPost(id: String): Post!
    recruiter(id: ID!): Recruiter!
    login(email: String!, password: String!): Token!
    me: Recruiter
  }

  type Mutation {
    addPost(
      title: String!
      company: String!
      recruiter: String!
      description: String!
      location: String!
      deadline: String
      link: String!
    ): Post!
    createRecruiter(
      email: String!
      firstName: String!
      lastName: String!
      company: String!
      password: String!
    ): Recruiter!
  }
`

const resolvers = {
  Query: {
    postCount: () => Post.collection.countDocuments(),
    recruiterCount: () => Recruiter.collection.countDocuments(),
    allPosts: () => Post.find({}),
    allRecruiters: () => Recruiter.find({}),
    findPost: async (root, args) => {
      if (!args.id) {
        throw new UserInputError(error.message, { invalidArgs: args })
      }

      try {
        const post = await Post.findById(args.id)
        return post
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })
      }
    },
  },
  Mutation: {
    addPost: async (root, args) => {
      const date = {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
      }

      const post = new Post({
        ...args,
        state: "WAITING",
        published: `${date.year}/${date.month}/${date.day}`,
      })

      try {
        await post.save()
      } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args })
      }

      return post
    },
    createRecruiter: async (root, args) => {
      const saltRounds = 10
      const passwordHash = await bcrypt.hash(args.password, saltRounds)

      const recruiter = new Recruiter({
        ...args,
        password: passwordHash,
      })

      return recruiter.save().catch((error) => {
        throw new UserInputError(error.message, { invalidArgs: args })
      })
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
