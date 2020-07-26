import React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { ME } from "../../queries"
import { JobPost } from "../../types"
import PostColumn from "./PostColumn"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-top: 1rem;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`

const Title = styled.h3`
  margin-top: 0rem;
  font-size: 1rem;
  font-weight: 600;
`

const PostManager: React.FC = () => {
  const { error, loading, data } = useQuery(ME)

  if (loading) {
    return <Card>Loading...</Card>
  }

  const posts: [JobPost] = data.me.posts

  const approvedPosts = posts
    .filter((post) => post.state === "APPROVED")
    .map((post) => <PostColumn key={post.id} {...post} />)

  const waitingPosts = posts
    .filter((post) => post.state === "WAITING")
    .map((post) => <PostColumn key={post.id} {...post} />)

  const pinnedPosts = posts
    .filter((post) => post.state === "PINNED")
    .map((post) => <PostColumn key={post.id} {...post} />)

  return (
    <Container>
      <Card>
        <Title>Posts waiting to be approved</Title>
        {waitingPosts}
      </Card>
      {pinnedPosts.length > 0 && (
        <Card>
          <Title>Pinned posts</Title>
          {pinnedPosts}
        </Card>
      )}
      <Card>
        <Title>Approved posts</Title>
        {approvedPosts}
      </Card>
    </Container>
  )
}

export default PostManager
