import React from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { JobPost } from "../../../types"
import { FIND_POST } from "../../../queries"
import { toFormattedDate } from "../../../utils"
import { StyledLink } from "../../../styles"
import Card from "../../../components/Card"
import Container from "../../../components/Container"
import Header from "../../../components/Header"

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

  return (
    <Container>
      <Header>{post.title}</Header>
      <Card>
        <StyledLink to="/recruiter">{"<="}</StyledLink>
        <Header header="h3">Post information</Header>
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
