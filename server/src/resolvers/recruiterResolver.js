const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { UserInputError } = require("apollo-server")

const Recruiter = require("../models/Recruiter")

module.exports = {
  Query: {
    recruiterCount: () => Recruiter.collection.countDocuments(),
    allRecruiters: () => Recruiter.find({}),
    me: (root, args, context) => {
      return context.currentRecruiter
    },
  },
  Mutation: {
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
    login: async (root, args) => {
      const recruiter = await Recruiter.findOne({ email: args.email })

      const passwordMatches = await bcrypt.compare(
        args.password,
        recruiter.password
      )

      if (!recruiter || !passwordMatches) {
        throw new UserInputError("Invalid email or password")
      }

      const recruiterForToken = {
        email: recruiter.email,
        id: recruiter._id,
      }

      return { token: jwt.sign(recruiterForToken, process.env.SECRET) }
    },
  },
}
