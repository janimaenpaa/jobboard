export enum State {
  WAITING = "WAITING",
  ACCEPTED = "APPROVED",
  HIDDEN = "HIDDEN",
  PINNED = "PINNED",
}

export interface JobPost {
  id: string
  title: string
  company: string
  recruiter: Recruiter
  description: string
  location: string
  published: string
  deadline?: string
  requiredSkills: [string]
  recommendedSkills: [string]
  link: string
  state: State
}

export interface Recruiter {
  id: string
  email: string
  firstName: string
  lastName: string
  company: string
  posts: [JobPost]
}
