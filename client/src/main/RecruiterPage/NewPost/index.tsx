import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { useForm } from "react-hook-form"
import { ADD_POST, ALL_POSTS } from "../../queries"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import {
  Container,
  Button,
  Form,
  FormCard,
  Label,
  Input,
  Header,
  CardHeader,
} from "./styles"

type FormData = {
  title: string
  description: string
  location: string
  deadline: String
  link: string
}

const NewPost: React.FC = () => {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>()
  const [editorValue, setEditorValue] = useState<string>("")
  const [requiredSkill, setRequiredSkill] = useState<string>("")
  const [requiredSkills, setRequiredSkills] = useState<string[]>([])
  const [recommendedSkill, setRecommendedSkill] = useState<string>("")
  const [recommendedSkills, setRecommendedSkills] = useState<string[]>([])

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

  const handleRequiredKeyPress = (event: any) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      setRequiredSkills([...requiredSkills, requiredSkill])
      setRequiredSkill("")
    }
  }

  const handleRecommendedKeyPress = (event: any) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      setRecommendedSkills([...recommendedSkills, recommendedSkill])
      setRecommendedSkill("")
    }
  }

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
          <div style={{ height: 200 }}>
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
          <Label>Add required skills for applicants</Label>
          <Input
            name="requiredSkill"
            value={requiredSkill}
            onChange={(event) => setRequiredSkill(event.target.value)}
            onKeyPress={handleRequiredKeyPress}
          />
          {requiredSkills.map((skill) => (
            <div key={skill}>{skill}</div>
          ))}
          <Label>Add recommended skills for applicants</Label>
          <Input
            name="recommendedSkill"
            value={recommendedSkill}
            onChange={(event) => setRecommendedSkill(event.target.value)}
            onKeyPress={handleRecommendedKeyPress}
          />
          {recommendedSkills.map((skill) => (
            <div key={skill}>{skill}</div>
          ))}
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
