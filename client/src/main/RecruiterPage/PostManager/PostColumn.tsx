import React from "react"
import styled from "styled-components"
import { JobPost } from "../../types"
import { toFormattedDate } from "../../utils"
import { truncateSync } from "fs"

interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Row = styled.tr`
  width: 100%;
`

const Title = styled.div``

const Buttons = styled.div``

const PostColumn: React.FC<JobPost> = ({ title, published, deadline }) => {
  return (
    <Row>
      <td>
        <Title>{title}</Title>
      </td>
      <td>{toFormattedDate(published)}</td>
      {deadline ? <td>{deadline}</td> : <td>No deadline</td>}
      <td>
        <Buttons>
          <button>Edit</button> <button>Remove</button>
        </Buttons>
      </td>
    </Row>
  )
}

export default PostColumn
