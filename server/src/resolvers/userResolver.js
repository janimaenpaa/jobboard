const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { UserInputError } = require("apollo-server")

const User = require("../models/User")

module.exports = {
  Query: {
    userCount: () => User.collection.countDocuments(),
    allUsers: () => User.find({}).populate("posts"),
    me: (root, args, context) => {
      return context.currentUser
    },
  },
  Mutation: {
    createUser: async (root, args) => {
      const saltRounds = 10
      const passwordHash = await bcrypt.hash(args.password, saltRounds)

      const user = new User({
        ...args,
        password: passwordHash,
      })

      return user.save().catch((error) => {
        throw new UserInputError(error.message, { invalidArgs: args })
      })
    },
    login: async (root, args) => {
      const user = await User.findOne({ email: args.email })

      const passwordMatches = await bcrypt.compare(
        args.password,
        user.password
      )

      if (!user || !passwordMatches) {
        throw new UserInputError("Invalid email or password")
      }

      const userForToken = {
        email: user.email,
        id: user._id,
      }

      return { token: jwt.sign(userForToken, process.env.SECRET) }
    },
  },
}
