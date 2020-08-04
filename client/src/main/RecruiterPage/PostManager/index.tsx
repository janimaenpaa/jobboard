import React from "react"
import { useQuery } from "@apollo/client"
import { ME } from "../../queries"
import { JobPost } from "../../types"
import PostTable from "./PostTable"
import { Card, Container, Title, Header } from "./styles"

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
