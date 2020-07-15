import React, { FC } from "react"
import { gql, useQuery } from "@apollo/client"
import JobList from "./JobList"
import "antd/dist/antd.css"

const ALL_POSTS = gql`
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
`

const Main: FC = () => {
  const { error, loading, data } = useQuery(ALL_POSTS)
  console.log(data)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>JobBoard</h2>
      <JobList jobs={data.allPosts} />
    </div>
  )
}

export default Main
