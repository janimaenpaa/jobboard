const { UserInputError } = require("apollo-server")
const Post = require("../models/Post")

module.exports = {
  Query: {
    postCount: () => Post.collection.countDocuments(),
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
      const post = new Post({
        ...args,
        state: "WAITING",
        published: Date.now(),
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
