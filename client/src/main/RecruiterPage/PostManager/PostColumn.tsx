import React from "react"
import styled from "styled-components"
import { JobPost } from "../../types"
import { toFormattedDate } from "../../utils"

interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.div``

const Buttons = styled.div``

const PostColumn: React.FC<JobPost> = ({ title, published, deadline }) => {
  return (
    <div>
      <Container>
        <Title>{title}</Title>
        <div>{toFormattedDate(published)}</div>
        {deadline ? <div>{deadline}</div> : <div>No deadline</div>}
        <Buttons>
          <button>Edit</button> <button>Remove</button>
        </Buttons>
      </Container>
      <hr style={{ marginTop: 3 }} />
    </div>
  )
}

export default PostColumn
