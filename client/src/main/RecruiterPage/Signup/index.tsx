import React from "react"
import { useForm } from "react-hook-form"
import { Button, Form, Input, Label } from "./styles"
import Card from "../../components/Card"
import Container from "../../components/Container"
import Header from "../../components/Header"

type FormData = {
  firstName: string
  lastName: string
  company: string
  email: string
  password: string
  passwordAgain: string
}

const Signup = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = (data: any) => console.log(data)
  return (
    <Container>
      <Header>Signup</Header>
      <Card>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Label>Password again</Label>
          <Input type="password" name="passwordAgain" ref={register} />
          <Button type="submit">Signup</Button>
        </Form>
      </Card>
    </Container>
  )
}

export default Signup
