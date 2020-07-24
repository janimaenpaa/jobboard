import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Login from "../Login"

const Card = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  margin-top: 5rem;
  width: 60%;
`

const Signup = styled.div`
  width: 70%;
  padding: 20px;
`

const View: React.FC<{ setToken: any }> = ({ setToken }) => {
  return (
    <Card>
      <Signup>
        <h2>Don't have an account?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          <Link to="/recruiter/signup">Signup here</Link>
        </p>
      </Signup>
      <Login setToken={setToken} />
    </Card>
  )
}

export default View
