export interface Techs {
  required: string[]
  recommended: string[]
}

export enum State {
  WAITING = "WAITING",
  ACCEPTED = "ACCEPTED",
  HIDDEN = "HIDDEN",
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
