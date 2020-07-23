import { gql } from "apollo-server"

export default gql`
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

  extend type Query {
    postCount: Int!
    allPosts: [Post!]!
    findPost(id: String): Post!
  }

  extend type Mutation {
    addPost(
      title: String!
      company: String!
      recruiter: String!
      description: String!
      location: String!
      deadline: String
      link: String!
    ): Post!
  }
`
