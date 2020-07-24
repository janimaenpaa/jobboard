const { gql } = require("apollo-server")
const recruiterSchema = require("./recruiterSchema")
const postSchema = require("./postSchema")

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

module.exports = [linkSchema, recruiterSchema, postSchema]
