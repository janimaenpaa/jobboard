import React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { Link, useParams } from "react-router-dom"
import { JobPost } from "../types"
import { FIND_POST } from "../queries"
import { StyledLink } from "../styles"
import { toFormattedDate } from "../utils"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  max-width: 60%;
  margin: 2rem;
  color: black;
  padding: 20px;

  p {
    margin-top: 0;
  }
`
const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0 0;
`

const Company = styled.h3`
  margin: 1rem 0 0 0;
  font-size: 1.1rem;
  color: gray;
`

const Header = styled.h3`
  margin: 1rem 0 0 0;
  font-size: 1.2rem;
`

const Description = styled.div`
  margin: 0 0 0 0;
`

const Button = styled.button`
  display: block;
  background: #bf1650;
  color: white;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  margin-top: 6px;
  font-size: 14px;
`

const JobView: React.FC = () => {
  const { id } = useParams()
  const { error, loading, data } = useQuery(FIND_POST, { variables: { id } })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  const job: JobPost = data.findPost
  console.log(job)
  return (
    <Container>
      <StyledLink style={{ fontSize: "1rem" }} to="/">
        {"<= Go back"}
      </StyledLink>
      <Company>{job.company}</Company>
      <Title>{job.title}</Title>
      {job.location} | Published: {toFormattedDate(job.published)}{" "}
      {job.deadline ? `| Deadline: ${job.deadline}` : ""}
      <Header>Description</Header>
      <div dangerouslySetInnerHTML={{ __html: job.description }} />

      <Button>Apply</Button>
    </Container>
  )
}

export default JobView
