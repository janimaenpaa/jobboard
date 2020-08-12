require("dotenv").config()
const { ApolloServer } = require("apollo-server")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const User = require("./models/User")

const schemas = require("./schemas")
const resolvers = require("./resolvers")

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

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    if (auth && auth.toLowerCase().startsWith("bearer ")) {
      const decodedToken = jwt.verify(auth.substring(7), process.env.SECRET)
      const currentUser = await User.findById(
        decodedToken.id
      ).populate("posts")
      return { currentUser }
    }
  },
  introspection: true,
  playground: true,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
