import React from "react"
import { useForm } from "react-hook-form"
import { Button, Container, Form, Input, Label } from "./styles"

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
        <h2 style={{marginLeft: "8px"}}>Signup</h2>
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
    </Container>
  )
}

export default Signup
