import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { ADD_POST, ALL_POSTS } from "../../queries"

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Form = styled.form`
  flex-direction: column;
  width: 400px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-top: 5rem;
`

const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-top: 10px;
  color: black;
  font-size: 14px;
  font-weight: 400;
`

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 6px 15px;
  font-size: 14px;
  color: black;
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
  margin-bottom: 10px;
  margin-top: 6px;
  font-size: 14px;
`

type FormData = {
  title: string
  company: string
  recruiter: string
  description: string
  location: string
  deadline: String
  link: string
}

const NewPost: React.FC = () => {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>()

  const [createPost] = useMutation(ADD_POST, {
    refetchQueries: [{ query: ALL_POSTS }],
  })

  const onSubmit = handleSubmit(
    ({ title, company, recruiter, description, location, deadline, link }) => {
      console.log({
        title,
        company,
        recruiter,
        description,
        location,
        deadline,
        link,
      })
      createPost({
        variables: {
          title,
          company,
          recruiter,
          description,
          location,
          deadline,
          link,
        },
      })
    }
  )

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h2>New</h2>
        <div>
          <Label>Job Title</Label>
          <Input name="title" ref={register} />
        </div>
        <div>
          <Label>Company</Label>
          <Input name="company" ref={register} />
        </div>
        <div>
          <Label>Recruiter</Label>
          <Input name="recruiter" ref={register} />
        </div>
        <div>
          <Label>Description</Label>
          <Input name="description" ref={register} />
        </div>
        <div>
          <Label>Location</Label>
          <Input name="location" ref={register} />
        </div>
        <div>
          <Label>Deadline</Label>
          <Input name="deadline" ref={register} />
        </div>
        <div>
          <Label>Link for applying</Label>
          <Input name="link" ref={register} />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default NewPost
