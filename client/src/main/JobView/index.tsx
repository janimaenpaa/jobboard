import React from "react"
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { JobPost } from "../types"
import { FIND_POST } from "../queries"
import { StyledLink } from "../styles"
import { toFormattedDate } from "../utils"
import {
  Card,
  Company,
  Container,
  Title,
  Header,
  Description,
  Button,
  BlueSkillButton,
  GreenSkillButton,
  Info,
  Skills,
} from "./styles"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import EventIcon from "@material-ui/icons/Event"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import ScheduleIcon from "@material-ui/icons/Schedule"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"

const JobView: React.FC = () => {
  const { id } = useParams()
  const { error, loading, data } = useQuery(FIND_POST, { variables: { id } })

  if (loading) return <div>Loading...</div>

  if (!data) {
    return <Container>No post found</Container>
  }

  if (error) return <div>Error: {error}</div>

  const job: JobPost = data.findPost
  console.log(job)
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
        <Title>{job.title}</Title>
        <Info>
          <LocationCityIcon style={{ margin: 0 }} />
          {job.location} |
          <EventIcon />
          Published: {toFormattedDate(job.published)} {"| "}
          <ScheduleIcon />
          {job.deadline ? `${job.deadline}` : "No deadline assigned"}
        </Info>
        <Header>Description</Header>
        <Description>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </Description>
        <Header>Skills</Header>
        <Skills>
          {job.requiredSkills.map((skill) => (
            <BlueSkillButton key={skill}>
              <CheckCircleIcon
                style={{
                  fontSize: "1rem",
                  color: "darkblue",
                  marginRight: 2,
                }}
              />
              {skill}
            </BlueSkillButton>
          ))}
          {job.recommendedSkills.map((skill) => (
            <GreenSkillButton key={skill}>
              <ThumbUpIcon
                style={{
                  fontSize: "1rem",
                  color: "green",
                  marginRight: 2,
                }}
              />
              {skill}
            </GreenSkillButton>
          ))}
        </Skills>
        <Button>Apply</Button>
      </Card>
    </Container>
  )
}

export default JobView
