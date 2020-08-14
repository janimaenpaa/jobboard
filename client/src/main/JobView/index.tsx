import React from "react"
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { JobPost } from "../types"
import { FIND_POST } from "../queries"
import { StyledLink } from "../styles"
import { toFormattedDate } from "../utils"
import {
  Company,
  Description,
  Button as FormButton,
  Info,
  Skills,
} from "./styles"
import Button from "../../components/Button"
import Card from "../../components/Card"
import Container from "../../components/Container"
import Header from "../../components/Header"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import EventIcon from "@material-ui/icons/Event"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import ScheduleIcon from "@material-ui/icons/Schedule"

const JobView: React.FC = () => {
  const { id } = useParams()
  const { error, loading, data } = useQuery(FIND_POST, { variables: { id } })

  if (loading) return <div>Loading...</div>

  if (!data) {
    return <Container>No post found</Container>
  }

  if (error) return <div>Error: {error}</div>

  const job: JobPost = data.findPost
  return (
    <Container>
      <Card>
        <StyledLink
          style={{
            fontSize: "1.2rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
          }}
          to="/"
        >
          {<ArrowBackIcon style={{ fontSize: "1.8rem" }} />}
          {"Back"}
        </StyledLink>
        <Company>{job.company}</Company>
        <Header header="h3">{job.title}</Header>
        <Info>
          <LocationCityIcon style={{ margin: 0 }} />
          {job.location} |
          <EventIcon />
          Published: {toFormattedDate(job.published)} {"| "}
          <ScheduleIcon />
          {job.deadline ? `${job.deadline}` : "No deadline assigned"}
        </Info>
        <Header header="h3">Description</Header>
        <Description>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </Description>
        <Header header="h3" marginTop="0.8rem">
          Skills
        </Header>
        <Skills>
          {job.requiredSkills.map((skill) => (
            <Button required key={skill}>
              {skill}
            </Button>
          ))}
          {job.recommendedSkills.map((skill) => (
            <Button recommended key={skill}>
              {skill}
            </Button>
          ))}
        </Skills>
        <FormButton>Apply</FormButton>
      </Card>
    </Container>
  )
}

export default JobView
