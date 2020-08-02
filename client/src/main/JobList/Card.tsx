import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { JobPost } from "../types"
import { device } from "../theme"
import { toFormattedDate } from "../utils"

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

const Tech = styled.div`
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
            <Tech>
              <TechButton>MongoDB</TechButton>
              <TechButton>Express</TechButton>
              <TechButton>React</TechButton>
              <TechButton>Node.js</TechButton>
            </Tech>
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
          <Tech>
            <TechButton>MongoDB</TechButton>
            <TechButton>Express</TechButton>
            <TechButton>React</TechButton>
            <TechButton>Node.js</TechButton>
          </Tech>
        </Content>
      </Container>
    </StyledLink>
  )
}

export default Card
