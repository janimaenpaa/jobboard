require("dotenv").config()
const { ApolloServer, UserInputError, gql } = require("apollo-server")
const { v4 } = require("uuid")
const mongoose = require("mongoose")

let posts = [
  {
    id: "3d594650-3436-11e9-bc57-8b80ba54c431",
    title: "Fullstack Developer",
    company: "Turtle Solutions",
    recruiter: "Matti Meikäläinen",
    description:
      "Etsimme nyt kokenutta Full Stack Node.js -kehittäjää asiakasprojekteihimme. Jos uskot että sinusta on on-site konsultiksi asiakkaidemme haastaviin projekteihin, sinulla on sujuva suomen kielen taito ja useamman vuoden koodauskokemus, haluamme kuulla sinusta nyt.",
    location: "Helsinki",
    published: "15-7-2020",
    deadline: "30-7-2020",
    link: "https://reactjs.org",
    state: "WAITING",
  },
  {
    id: "3d594650-3436-11e9-bc57-8b80ba54c432",
    title: "Frontend Developer",
    company: "Moose Solutions",
    recruiter: "Mikko Meikäläinen",
    description:
      "Etsimme nyt kokenutta Frontend -kehittäjää asiakasprojekteihimme. Jos uskot että sinusta on on-site konsultiksi asiakkaidemme haastaviin projekteihin, sinulla on sujuva suomen kielen taito ja useamman vuoden koodauskokemus, haluamme kuulla sinusta nyt.",
    location: "Helsinki",
    published: "15-7-2020",
    deadline: "30-7-2020",
    link: "https://reactjs.org",
    state: "ACCEPTED",
  },
]

const User = require("./models/User")
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

  type Query {
    postCount: Int!
    userCount: Int!
    allPosts: [Post!]!
    findPost(id: String): Post!
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
    ): Post
  }
`

const resolvers = {
  Query: {
    postCount: () => Post.collection.countDocuments(),
    userCount: () => User.collection.countDocuments(),
    allPosts: () => Post.find({}),
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
