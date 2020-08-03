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
      requiredSkills
      recommendedSkills
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
      requiredSkills
      recommendedSkills
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
      requiredSkills: $requiredSkills
      recommendedSkills: $recommendedSkills
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

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
      title
    }
  }
`

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export const ME = gql`
  query {
    me {
      id
      email
      firstName
      lastName
      company
      posts {
        id
        title
        description
        location
        published
        deadline
        link
        state
      }
    }
  }
`
