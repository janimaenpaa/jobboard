import React, { FC } from "react"
import { Card } from "antd"

import { JobPost } from "../types"

const JobList: FC<{ jobs: JobPost[] }> = ({ jobs }) => (
  <div style={{ maxWidth: "80%", marginTop: 60 }}>
    {jobs.map((job) => (
      <Card key={job.id} style={{ margin: 20 }}>
        <Card.Meta title={job.title} description={job.company} />
        <p>{job.description}</p>
      </Card>
    ))}
  </div>
)

export default JobList
