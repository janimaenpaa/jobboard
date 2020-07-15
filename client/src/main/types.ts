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
  recruiter: string
  description: string
  location: string
  published: string
  deadline?: string
  techs: Techs
  link: string
  state: State
}
