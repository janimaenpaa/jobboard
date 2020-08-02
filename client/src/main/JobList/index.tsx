import React, { useState } from "react"
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

const SearchBar = styled.input`
  border: none;
  border-radius: 10px;
  background-color: #dedede;
  padding: 10px;
  margin-top: 1rem;
  outline: none;

  &:focus {
    background-color: #c7c7c7;
  }

  @media ${device.tablet} {
    border-radius: 0px;
`

const JobList: React.FC<{ jobs: JobPost[] }> = ({ jobs }) => {
  const [filter, setFilter] = useState<string>("")

  if (jobs.length === 0) {
    return <Container>No jobs found...</Container>
  }

  const sortedJobs = () =>
    jobs.slice().sort((a, b) => {
      if (a.state < b.state) return -1
      if (a.state > b.state) return 1
      return 0
    })

  const nonFilteredJobs = sortedJobs().map((job) => <Card key={job.id} job={job} />)
  const filteredJobs = sortedJobs().filter(
    (job) =>
      String(job.title).toLowerCase().includes(filter) ||
      String(job.company).toLowerCase().includes(filter) ||
      String(job.location).toLowerCase().includes(filter)
  )

  const displayFilteredJobs = () => {
    if (filteredJobs.length === 0) {
      return <div style={{ margin: "1rem auto" }}>No jobs found...</div>
    }
    return filteredJobs.map((job) => <Card key={job.id} job={job} />)
  }

  return (
    <Container>
      <Header>Listed jobs</Header>
      <SearchBar
        placeholder="Search for a position, company or city..."
        onChange={(event) => setFilter(event.target.value.toLowerCase())}
      />
      {filter.length === 0 ? nonFilteredJobs : displayFilteredJobs()}
    </Container>
  )
}

export default JobList
