import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { JobPost } from "../types"
import { device } from "../theme"
import { toFormattedDate } from "../utils"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  margin-top: 0.7rem;
  padding: 20px;
  width: 100%;

  &:hover {
    background-color: #81d2ff;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    border-radius: 0px;
  }
`

const PinnedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff455;
  border-radius: 10px;
  margin-top: 0.7rem;
  padding: 20px;
  width: 100%;

  &:hover {
    background-color: #ffd302;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    border-radius: 0px;
  }
`

const Title = styled.div`
  color: black;
  font-size: 1.2rem;
  font-weight: 700;
  width: 100%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

const Company = styled.div`
  color: #636363;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
  align: left;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`

const Location = styled.div``
const Published = styled.div``

const Skill = styled.div`
  display: flex;
  flex-direction: row;
`

const TechButton = styled.button`
  margin-right: 0.2rem;
  background-color: lightgray;
  border: none;
  border-radius: 4px;
  outline: none;
  font-weight: 500;
  color: white;

  @media ${device.tablet} {
    border-radius: 0;
  }
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

const Card: React.FC<{ job: JobPost }> = ({ job }) => {
  if (job.state === "PINNED") {
    return (
      <StyledLink to={`/post/${job.id}`}>
        <PinnedContainer>
          <Company>{job.company}</Company>
          <Content>
            <Title>{job.title}</Title>
            <Location>{job.location}</Location>
            <Published>Published: {toFormattedDate(job.published)}</Published>
            <Skill>
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
            </Skill>
          </Content>
        </PinnedContainer>
      </StyledLink>
    )
  }

  return (
    <StyledLink to={`/post/${job.id}`}>
      <Container>
        <Company>{job.company}</Company>
        <Content>
          <Title>{job.title}</Title>
          <Location>{job.location}</Location>
          <Published>Published: {toFormattedDate(job.published)}</Published>
          <Skill>
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
          </Skill>
        </Content>
      </Container>
    </StyledLink>
  )
}

export default Card
