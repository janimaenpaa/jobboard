import React from "react"
import styled from "styled-components"

import { JobPost } from "../types"
import Card from "./Card"
import { device } from "../theme"

const Container = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  max-width: 60%;
  margin: 1.5rem auto auto auto;

  @media ${device.laptop} {
    max-width: 80%;
  }
  @media ${device.tablet} {
    max-width: 100%;
`

const Header = styled.h2`
  margin: 0 8px;
  font-weight: 900;
  font-size: 2rem;
`

const JobList: React.FC<{ jobs: JobPost[] }> = ({ jobs }) => (
  <Container>
    <Header>Listed jobs</Header>
    {jobs.map((job) => (
      <Card key={job.id} job={job} />
    ))}
  </Container>
)

export default JobList
