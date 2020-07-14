# Project Design

## FRONTEND

### Tech

- React
- TypeScript
- GraphQL-Apollo Client

### Pages

- [ ] Joblist
  - [ ] Filter jobs
  - [ ] Go to a job
- [ ] Job
    - [ ] Job description
    - [ ] Button to application
    - [ ] Go back
    - [ ] Other listings
- [ ] Recruiters
  - [ ] Login
  - [ ] Signup
  - [ ] Post a job
  - [ ] Manage jobs

## ADMIN PANEL

### Tech

- React
- TypeScript
- react-admin?

### Features

- [ ] Manage job posts
  - [ ] Add
  - [ ] Edit
  - [ ] Remove
- [ ] Manage recruiter accounts
  - [ ] Confirm registration
  - [ ] Edit / Delete

## BACKEND

### Tech

- TypeScript
- Node.js
- GraphQL
- GraphQL-Apollo Server
- TypeORM
- mongoose

### Features

- [ ] addJob
- [ ] getJob
- [ ] getJobs
- [ ] getJobsFiltered
- [ ] recruitLogin
- [ ] adminLogin
- [ ] addAdmin
- [ ] getAdmins
- [ ] addRecruiter
- [ ] getRecruiters
- [ ] getRecruiter

### Schemas

#### Post

- id: string
- title: string
- Recruiter: Recruiter
- company: string
- companyImage: string
- postImage: string
- description: string
- location: string
- published: date
- deadline: date
- techs: { required: string[], recommended: string[] }
- link: string
- status: string

#### Recruiter

- id: string
- firstName: string
- lastName: string
- email: string
- password: string
- phone: string
- company: string
- companyLogo: string
- posts: Post[]

#### Admin

- id: string
- username: string
- email: string
- password: string
- firstName: string
- lastName: string

## DATABASE

- MongoDB
