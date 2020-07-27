import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { ADD_POST, ALL_POSTS } from "../../queries"
import { device } from "../../theme"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const Form = styled.form`
  flex-direction: column;
  margin-top: 2rem;
  min-width: 50%;

  @media ${device.laptopL} {
    min-width: 75%;
  }

  @media ${device.tablet} {
    min-width: 100%;
  }
`

const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media ${device.tablet} {
    border-radius: 0px;
  }
`

const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-top: 10px;
  color: black;
  font-size: 1rem;
  font-weight: 500;
`

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 12px 15px;
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
  margin-top: 10px;
  font-size: 1.1rem;
  font-weight: 600;
`
const Header = styled.h2`
  margin: 0 8px;
  font-weight: 900;
  font-size: 2rem;
`
const CardHeader = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 1.5rem;
`

type FormData = {
  title: string
  description: string
  location: string
  deadline: String
  link: string
}

const NewPost: React.FC = () => {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>()
  const [editorValue, setEditorValue] = useState("")

  const [createPost] = useMutation(ADD_POST, {
    refetchQueries: [{ query: ALL_POSTS }],
  })

  const onSubmit = handleSubmit(({ title, location, deadline, link }) => {
    console.log({
      title,
      location,
      deadline,
      link,
    })
    createPost({
      variables: {
        title,
        description: editorValue,
        location,
        deadline,
        link,
      },
    })
  })

  const modules = {
    clipboard: {
      matchVisual: false,
    },
    toolbar: [
      [{ header: [2, 3, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  }

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
  ]

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Header>Post a Job</Header>
        <FormCard>
          <CardHeader>Basic information</CardHeader>
          <Label>Job Title</Label>
          <Input name="title" ref={register} />
          <Label>Job Description</Label>
          {/* <Input name="description" ref={register} /> */}
          <div style={{ height: 190 }}>
            <ReactQuill
              theme="snow"
              value={editorValue}
              onChange={setEditorValue}
              modules={modules}
              formats={formats}
              style={{ height: 140 }}
            />
          </div>
        </FormCard>
        <FormCard>
          <CardHeader>Skills</CardHeader>
          <Label>Add required or recommended skills for applicants</Label>
          <Input name="skills" />
        </FormCard>
        <FormCard>
          <CardHeader>Additional information</CardHeader>
          <Label>Location</Label>
          <Input name="location" ref={register} />
          <Label>Deadline</Label>
          <Input name="deadline" ref={register} />
          <Label>Link for applying</Label>
          <Input name="link" ref={register} />
          <Button type="submit">Submit</Button>
        </FormCard>
      </Form>
    </Container>
  )
}

export default NewPost
