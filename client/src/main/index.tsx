import React, { useState } from "react"
import { useApolloClient, useQuery } from "@apollo/client"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./global"
import { theme } from "./theme"
import { ALL_POSTS } from "./queries"

import JobList from "./JobList"
import JobView from "./JobView"
import RecruiterPage from "./RecruiterPage"
import NewPost from "./NewPost"
import NavBar from "./components/NavBar"

const Main: React.FC = () => {
  const [token, setToken] = useState(localStorage.getItem("recruiter-token"))
  const { error, loading, data } = useQuery(ALL_POSTS)
  const client = useApolloClient()
  console.log(data)

  if (loading) {
    return <div>Loading...</div>
  }

  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <NavBar title="JobBoard" token={token} logout={logout} />
          <Switch>
            <Route path="/post/:id" render={() => <JobView />} />
            <Route path="/new" render={() => <NewPost />} />
            <Route
              path="/recruiter"
              render={() => <RecruiterPage setToken={setToken} token={token} />}
            />
            <Route path="/" render={() => <JobList jobs={data.allPosts} />} />
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  )
}

export default Main
