const { gql } = require("apollo-server")

const postSchema = gql`
  enum allowedState {
    WAITING
    APPROVED
    HIDDEN
    PINNED
  }

  type Post {
    id: ID!
    title: String!
    company: String!
    recruiter: Recruiter!
    description: String!
    location: String!
    published: String!
    deadline: String
    link: String!
    state: allowedState!
  }

  extend type Query {
    postCount: Int!
    allPosts: [Post!]!
    findPost(id: String): Post!
  }

  extend type Mutation {
    addPost(
      title: String!
      description: String!
      location: String!
      deadline: String
      link: String!
    ): Post!
    deletePost(id: ID!): Post!
  }
`

module.exports = postSchema
