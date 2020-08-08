import React from "react"
import styled from "styled-components"
import { Route, Switch, useRouteMatch } from "react-router-dom"
import View from "./View"
import Signup from "./Signup"
import NewPost from "./NewPost"
import PostEditor from "./PostManager/PostEditor"

const RecruiterPage: React.FC<{ setToken: any; token: any }> = ({
  setToken,
  token,
}) => {
  let { path } = useRouteMatch()
  return (
        <Switch>
          <Route path={`${path}/post/:id`} render={() => <PostEditor />} />
          <Route path={`${path}/signup`} render={() => <Signup />} />
          <Route path={`${path}/new`} render={() => <NewPost />} />
          <Route
            path={path}
            render={() => <View setToken={setToken} token={token} />}
          />
        </Switch>
  )
}

export default RecruiterPage
