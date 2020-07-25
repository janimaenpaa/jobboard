import React from "react"
import styled from "styled-components"
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom"
import View from "./View"
import Signup from "./Signup"

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const RecruiterPage: React.FC<{ setToken: any; token: any }> = ({
  setToken,
  token,
}) => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/recruiter/signup" render={() => <Signup />} />
          <Route
            path="/"
            render={() => <View setToken={setToken} token={token} />}
          />
        </Switch>
      </Container>
    </Router>
  )
}

export default RecruiterPage
