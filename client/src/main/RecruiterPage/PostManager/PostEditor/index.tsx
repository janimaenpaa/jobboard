import React from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { JobPost } from "../../../types"
import { FIND_POST } from "../../../queries"
import { toFormattedDate } from "../../../utils"
import { device } from "../../../theme"
import { StyledLink } from "../../../styles"

const Header = styled.h2`
  margin: 0 8px;
  font-weight: 900;
  font-size: 2rem;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-top: 1rem;
  width: 60%;

  @media ${device.tablet} {
    border-radius: 0px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
`

const Title = styled.div``

const PostEditor: React.FC = () => {
  const { id } = useParams()
  const { error, loading, data } = useQuery(FIND_POST, { variables: { id } })

  if (error) {
    return <div>{`${error.name}: ${error.message}`}</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  const post: JobPost = data.findPost
  console.log(post)

  return (
    <Container>
      <Header>{post.title}</Header>
      <Card>
          <StyledLink to="/recruiter">{"<="}</StyledLink>
        <h3>Post information</h3>
        <Title>{post.title}</Title>
        <Title>{post.description}</Title>
        <Title>{toFormattedDate(post.published)}</Title>
        <Title>{post.deadline}</Title>
        <Title>{post.location}</Title>
        <Title>{post.link}</Title>
      </Card>
    </Container>
  )
}

export default PostEditor
