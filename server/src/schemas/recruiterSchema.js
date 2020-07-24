const { gql } = require("apollo-server")

const recruiterSchema = gql`
  type Recruiter {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    company: String!
    posts: [Post!]!
  }

  type Token {
    token: String!
  }

  extend type Query {
    recruiterCount: Int!
    allRecruiters: [Recruiter!]!
    recruiter(id: ID!): Recruiter!
    me: Recruiter
  }

  extend type Mutation {
    createRecruiter(
      email: String!
      firstName: String!
      lastName: String!
      company: String!
      password: String!
    ): Recruiter!
    login(email: String!, password: String!): Token
  }
`

module.exports = recruiterSchema
