import React from "react"
import { JobPost } from "../types"
import { toFormattedDate } from "../utils"
import Button from "../components/Button"
import Card from "../components/Card"
import {
  Title,
  StyledLink,
  Company,
  Content,
  Location,
  Published,
  Skill,
} from "./cardStyles"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"

const Job: React.FC<{ job: JobPost }> = ({ job }) => {
  if (job.state === "PINNED") {
    return (
      <Card type="PIN">
        <StyledLink to={`/post/${job.id}`}>
          <Company>{job.company}</Company>
          <Content>
            <Title>{job.title}</Title>
            <Location>{job.location}</Location>
            <Published>Published: {toFormattedDate(job.published)}</Published>
            <Skill>
              {job.requiredSkills.map((skill) => (
                <Button key={skill} color="lightblue">
                  <CheckCircleIcon
                    style={{
                      fontSize: "1rem",
                      color: "darkblue",
                      marginRight: 2,
                    }}
                  />
                  {skill}
                </Button>
              ))}
              {job.recommendedSkills.map((skill) => (
                <Button key={skill} color="lightgreen">
                  <ThumbUpIcon
                    style={{
                      fontSize: "1rem",
                      color: "green",
                      marginRight: 2,
                    }}
                  />
                  {skill}
                </Button>
              ))}
            </Skill>
          </Content>
        </StyledLink>
      </Card>
    )
  }

  return (
    <Card type="HOVER">
      <StyledLink to={`/post/${job.id}`}>
        <Company>{job.company}</Company>
        <Content>
          <Title>{job.title}</Title>
          <Location>{job.location}</Location>
          <Published>Published: {toFormattedDate(job.published)}</Published>
          <Skill>
            {job.requiredSkills.map((skill) => (
              <Button key={skill} color="lightblue">
                <CheckCircleIcon
                  style={{
                    fontSize: "1rem",
                    color: "darkblue",
                    marginRight: 2,
                  }}
                />
                {skill}
              </Button>
            ))}
            {job.recommendedSkills.map((skill) => (
              <Button key={skill} color="lightgreen">
                <ThumbUpIcon
                  style={{
                    fontSize: "1rem",
                    color: "green",
                    marginRight: 2,
                  }}
                />
                {skill}
              </Button>
            ))}
          </Skill>
        </Content>
      </StyledLink>
    </Card>
  )
}

export default Job
