import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"

const Form = styled.form`
  flex-direction: column;
  width: 50%;
  padding: 20px;
`

const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-top: 6px;
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
  margin-top: 8px;
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

interface Props {}

const Login = (props: Props) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <Label>Email</Label>
      <Input name="email" ref={register} />
      <Label>Password</Label>
      <Input type="password" name="password" ref={register} />
      <Button type="submit">Login</Button>
    </Form>
  )
}

export default Login
