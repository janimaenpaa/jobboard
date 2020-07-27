const { AuthenticationError, UserInputError } = require("apollo-server")
const Post = require("../models/Post")

module.exports = {
  Query: {
    postCount: () => Post.collection.countDocuments(),
    allPosts: () => Post.find({}).populate("recruiter"),
    findPost: async (root, args) => {
      if (!args.id) {
        throw new UserInputError(error.message, { invalidArgs: args })
      }

      try {
        const post = await Post.findById(args.id).populate("recruiter")
        return post
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })
      }
    },
  },
  Mutation: {
    addPost: async (root, args, context) => {
      const currentRecruiter = context.currentRecruiter

      if (!currentRecruiter) {
        throw new AuthenticationError("Not authenticated")
      }

      const parsedDescription = args.description
        .replace("<br>", "")
        .replace("<script>", "")
        .replace("</script>", "")

      const post = new Post({
        ...args,
        recruiter: currentRecruiter,
        company: currentRecruiter.company,
        description: parsedDescription,
        published: Date.now(),
        state: "WAITING",
      })

      try {
        await post.save()
      } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args })
      }

      currentRecruiter.posts = currentRecruiter.posts.concat(post)
      await currentRecruiter.save()

      return post
    },
    deletePost: async (root, args, context) => {
      const currentRecruiter = context.currentRecruiter

      if (!currentRecruiter) {
        throw new AuthenticationError("Not authenticated")
      }

      const postToBeDeleted = await Post.findById(args.id).populate("recruiter")

      if (postToBeDeleted.recruiter.id !== currentRecruiter.id) {
        throw new AuthenticationError("Not authorized to delete this post")
      }

      try {
        await postToBeDeleted.remove()
      } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args })
      }

      return postToBeDeleted
    },
  },
}
