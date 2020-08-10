import React from "react"
import { useMutation } from "@apollo/client"
import { SIGNUP } from "../../queries"
import { useForm } from "react-hook-form"
import { Button, Form, Input, Label } from "./styles"
import Card from "../../components/Card"
import Container from "../../components/Container"
import Header from "../../components/Header"
import { create } from "domain"

type FormData = {
  firstName: string
  lastName: string
  company: string
  email: string
  password: string
}

const Signup = () => {
  const { register, handleSubmit } = useForm<FormData>()

  const [createRecruiter] = useMutation(SIGNUP)

  const onSubmit = handleSubmit(
    ({ firstName, lastName, company, email, password }) => {
      createRecruiter({
        variables: {
          firstName,
          lastName,
          company,
          email,
          password,
        },
      })
    }
  )
  return (
    <Container>
      <Header>Signup</Header>
      <Card>
        <Form onSubmit={onSubmit}>
          <Label>First name</Label>
          <Input name="firstName" ref={register} />
          <Label>Last name</Label>
          <Input name="lastName" ref={register} />
          <Label>Company</Label>
          <Input name="company" ref={register} />
          <Label>Email</Label>
          <Input name="email" ref={register} />
          <Label>Password</Label>
          <Input type="password" name="password" ref={register} />
          <Button type="submit">Signup</Button>
        </Form>
      </Card>
    </Container>
  )
}

export default Signup
