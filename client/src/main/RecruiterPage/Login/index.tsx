import React, { useEffect } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { useMutation } from "@apollo/client"
import { LOGIN } from "../../queries"

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
  email: string
  password: string
}

const Login: React.FC<{ setToken: any }> = ({ setToken }) => {
  const { register, handleSubmit } = useForm<FormData>()

  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    },
  })

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.token
      setToken(token)
      localStorage.setItem("recruiter-token", token)
    }
  }, [result.data]) // eslint-disable-line

  const onSubmit = handleSubmit(({ email, password }) => {
    login({ variables: { email, password } })
  })
  return (
    <Form onSubmit={onSubmit}>
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
