import { gql } from "@apollo/client";

export const ALL_POSTS = gql`
  query {
    allPosts {
      id
      title
      company
      recruiter
      description
      location
      published
      deadline
      link
      state
    }
  }
`;

export const ADD_POST = gql`
mutation addPost(
  $title: String!
  $company: String!
  $recruiter: String!
  $description: String!
  $location: String!
  $deadline: String
  $link: String!
) {
    addPost(
        title: $title
        company: $company
        recruiter: $recruiter
        description: $description
        location: $location
        deadline: $deadline
        link: $link
    ) {
        id
        title
        company
        recruiter
        description
        location
        deadline
        link
    }
}
`;
