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
      techs {
        required
        recommended
      }
      link
      state
    }
  }
`;
