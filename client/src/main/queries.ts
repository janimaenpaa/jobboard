import { gql } from "@apollo/client"

export const ALL_POSTS = gql`
  query {
    allPosts {
      id
      title
      company
      recruiter {
        id
        email
        firstName
        lastName
        company
      }
      description
      location
      published
      deadline
      link
      state
    }
  }
`

export const FIND_POST = gql`
  query findPost($id: String!) {
    findPost(id: $id) {
      id
      title
      company
      recruiter {
        id
        email
        firstName
        lastName
        company
      }
      description
      location
      published
      deadline
      link
      state
    }
  }
`

export const ADD_POST = gql`
  mutation addPost(
    $title: String!
    $description: String!
    $location: String!
    $deadline: String
    $link: String!
  ) {
    addPost(
      title: $title
      description: $description
      location: $location
      deadline: $deadline
      link: $link
    ) {
      id
      title
      company
      recruiter {
        id
        email
        firstName
        lastName
        company
      }
      description
      location
      deadline
      link
    }
  }
`
