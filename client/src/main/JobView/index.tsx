import React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { JobPost } from "../types"
import { FIND_POST } from "../queries"
import { StyledLink } from "../styles"
import { toFormattedDate } from "../utils"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import EventIcon from "@material-ui/icons/Event"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import ScheduleIcon from "@material-ui/icons/Schedule"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 0;
  padding: 20px;
  max-width: 90%;
`
const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0 0;
`

const Company = styled.h3`
  margin: 1.5rem 0 0 0;
  font-size: 1.1rem;
  color: gray;
`

const Header = styled.h3`
  margin: 1rem 0 0.4rem 0;
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
  margin-bottom: 0.6rem;
  margin-top: 1rem;
  font-size: 14px;
`

const Info = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`

const Skills = styled.div`
  display: flex;
`

const GreenSkillButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightgreen;
  border: none;
  border-radius: 6px;
  outline: none;
  padding: 8px;
  margin-right: 0.4rem;
`
const BlueSkillButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightblue;
  border: none;
  border-radius: 6px;
  outline: none;
  padding: 8px;
  margin-right: 0.4rem;
`

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
