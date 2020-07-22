import React, { FC } from "react"
import { gql, useQuery } from "@apollo/client"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import "antd/dist/antd.css"
import { GlobalStyles } from "./global"
import { theme } from "./theme"

import JobList from "./JobList"
import RecruiterPage from "./RecruiterPage"
import { ALL_POSTS } from "./queries"
import NewPost from "./NewPost"
import NavBar from "./components/NavBar"

const Main: FC = () => {
  const { error, loading, data } = useQuery(ALL_POSTS)
  console.log(data)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <NavBar title="JobBoard" />
          <Switch>
            <Route path="/new" render={() => <NewPost />} />
            <Route path="/recruiter" render={() => <RecruiterPage />} />
            <Route path="/" render={() => <JobList jobs={data.allPosts} />} />
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  )
}

export default Main
