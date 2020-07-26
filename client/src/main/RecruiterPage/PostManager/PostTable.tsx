import React from "react"
import styled from "styled-components"
import { JobPost } from "../../types"
import PostColumn from "./PostColumn"

const Row = styled.tr`
  width: 100%;
`

const Cell = styled.td`
  font-weight: 700;
`

const PostTable: React.FC<JobPost[]> = (jobs) => {
  if (jobs[0] === undefined) {
    return <div>No jobs yet.</div>
  }

  return (
    <table>
      <thead>
        <Row>
          <Cell>Title</Cell>
          <Cell>Published</Cell>
          <Cell>Deadline</Cell>
          <Cell>Buttons</Cell>
        </Row>
      </thead>
      <tbody>
        {Object.values(jobs).map((job) => (
          <PostColumn key={job.id} {...job} />
        ))}
      </tbody>
    </table>
  )
}

export default PostTable
