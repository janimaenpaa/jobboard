import React from "react"
import { useQuery } from "@apollo/client"
import { ME } from "../../queries"
import { JobPost } from "../../types"
import PostTable from "./PostTable"
import Card from "../../../components/Card"
import Container from "../../../components/Container"
import Header from "../../../components/Header"

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
        <Header header="h3">Posts waiting to be approved</Header>
        <PostTable {...waitingPosts} />
      </Card>
      {pinnedPosts.length > 0 && (
        <Card>
          <Header header="h3">Pinned posts</Header>
          <PostTable {...pinnedPosts} />
        </Card>
      )}
      <Card>
        <Header header="h3">Approved posts</Header>
        <PostTable {...approvedPosts} />
      </Card>
    </Container>
  )
}

export default PostManager
