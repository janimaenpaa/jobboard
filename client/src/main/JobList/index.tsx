import React, { useState } from "react"
import { JobPost } from "../types"
import Job from "./Job"
import { Header, SearchBar } from "./styles"
import Container from "../components/Container"

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

  const nonFilteredJobs = sortedJobs().map((job) => (
    <Job key={job.id} job={job} />
  ))
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
    return filteredJobs.map((job) => <Job key={job.id} job={job} />)
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
