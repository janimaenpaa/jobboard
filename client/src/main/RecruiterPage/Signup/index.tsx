import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"

const Form = styled.form`
  flex-direction: column;
  width: 50%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  margin-top: 5rem;
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
  margin-top: 8px;
  font-size: 14px;
`

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Signup</h2>
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
  )
}

export default Signup
