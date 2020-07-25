import React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { ME } from "../../queries"
import { JobPost } from "../../types"

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

  return (
    <Card>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </Card>
  )
}

export default PostManager
