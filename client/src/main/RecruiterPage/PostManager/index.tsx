import React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { ME } from "../../queries"
import { JobPost } from "../../types"
import { device } from "../../theme"
import PostTable from "./PostTable"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-top: 1rem;
  width: 100%;

  @media ${device.tablet} {
    border-radius: 0px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

const Title = styled.h3`
  margin-top: 0rem;
  font-size: 1rem;
  font-weight: 600;
`

const Header = styled.h2`
  margin: 0 8px;
  font-weight: 900;
  font-size: 2rem;
`

const PostManager: React.FC = () => {
  const { error, loading, data } = useQuery(ME)

  if (loading) {
    return <Card>Loading...</Card>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const posts: [JobPost] = data.me.posts

  const approvedPosts = posts.filter((post) => post.state === "APPROVED")

  const waitingPosts: JobPost[] | [] = posts.filter(
    (post) => post.state === "WAITING"
  )

  const pinnedPosts = posts.filter((post) => post.state === "PINNED")

  return (
    <Container>
      <Header>Manage Posts</Header>
      <Card>
        <Title>Posts waiting to be approved</Title>
        <PostTable {...waitingPosts} />
      </Card>
      {pinnedPosts.length > 0 && (
        <Card>
          <Title>Pinned posts</Title>
          <PostTable {...pinnedPosts} />
        </Card>
      )}
      <Card>
        <Title>Approved posts</Title>
        <PostTable {...approvedPosts} />
      </Card>
    </Container>
  )
}

export default PostManager
