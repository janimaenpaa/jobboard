const { gql } = require("apollo-server")

const userSchema = gql`
  enum Role {
    ADMIN
    USER
  }

  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    company: String!
    role: Role!
    posts: [Post!]!
  }

  type Token {
    token: String!
  }

  extend type Query {
    userCount: Int!
    allUsers: [User!]!
    user(id: ID!): User!
    me: User
  }

  extend type Mutation {
    createUser(
      email: String!
      firstName: String!
      lastName: String!
      company: String!
      password: String!
    ): User!
    login(email: String!, password: String!): Token
  }
`

module.exports = userSchema
