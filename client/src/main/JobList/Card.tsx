import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { JobPost } from "../types"
import { device } from "../theme"
import { toFormattedDate } from "../utils"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import {
  Container,
  PinnedContainer,
  Title,
  StyledLink,
  Company,
  Content,
  Location,
  Published,
  Skill,
  TechButton,
  GreenSkillButton,
  BlueSkillButton,
} from "./cardStyles"

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
