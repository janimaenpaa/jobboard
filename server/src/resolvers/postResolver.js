const { AuthenticationError, UserInputError } = require("apollo-server")
const Post = require("../models/Post")

module.exports = {
  Query: {
    postCount: () => Post.collection.countDocuments(),
    allPosts: () => Post.find({}).populate("user"),
    findPost: async (root, args) => {
      if (!args.id) {
        throw new UserInputError(error.message, { invalidArgs: args })
      }

      try {
        const post = await Post.findById(args.id).populate("user")
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
      const currentUser = context.currentUser

      if (!currentUser) {
        throw new AuthenticationError("Not authenticated")
      }

      const parsedDescription = args.description
        .replace("<br>", "")
        .replace("<script>", "")
        .replace("</script>", "")
        .replace("<p><br></p>", "")

      const post = new Post({
        ...args,
        user: currentUser,
        company: currentUser.company,
        description: parsedDescription,
        published: Date.now(),
        state: "WAITING",
      })

      try {
        await post.save()
      } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args })
      }

      currentUser.posts = currentUser.posts.concat(post)
      await currentUser.save()

      return post
    },
    deletePost: async (root, args, context) => {
      const currentUser = context.currentUser

      if (!currentUser) {
        throw new AuthenticationError("Not authenticated")
      }

      const postToBeDeleted = await Post.findById(args.id).populate("user")

      if (!postToBeDeleted) {
        throw new UserInputError("No post found")
      }

      if (postToBeDeleted.user.id !== currentUser.id) {
        throw new AuthenticationError("Not authorized to delete this post")
      }

      try {
        await postToBeDeleted.remove()
      } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args })
      }

      return postToBeDeleted
    },
    editPost: async (root, args, context) => {
      const currentUser = context.currentUser

      if (!currentUser) {
        throw new AuthenticationError("Not authenticated")
      }

      const postToBeEdited = await Post.findById(args.id).populate("user")

      if (!postToBeEdited) {
        throw new UserInputError("No post found")
      }

      if (postToBeEdited.user.id !== currentUser.id) {
        throw new AuthenticationError("Not authorized to edit this post")
      }

      const updatedPost = await Post.findByIdAndUpdate(
        args.id,
        { ...args },
        {
          new: true,
        }
      )

      return updatedPost
    },
  },
}
