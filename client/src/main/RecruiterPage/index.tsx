import React from "react"
import styled from "styled-components"
import { Link, BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom"
import View from "./View"
import Signup from "./Signup"
import NewPost from "./NewPost"

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const RecruiterPage: React.FC<{ setToken: any; token: any }> = ({
  setToken,
  token,
}) => {
  let { path } = useRouteMatch()
  return (
      <Container>
        <Switch>
          <Route path={`${path}/signup`} render={() => <Signup />} />
          <Route path={`${path}/new`} render={() => <NewPost />} />
          <Route
            path={path}
            render={() => <View setToken={setToken} token={token} />}
          />
        </Switch>
      </Container>
  )
}

export default RecruiterPage
