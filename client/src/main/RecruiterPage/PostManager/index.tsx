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
  margin-top: 2rem;
  width: 60%;
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

  return (
    <Card>
      <h3>Posts waiting to be approved</h3>
      {waitingPosts}
      <h3>Approved posts</h3>
      {approvedPosts}
    </Card>
  )
}

export default PostManager
