import React, { useState } from "react"
import { useApolloClient, useQuery } from "@apollo/client"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./global"
import { theme } from "./theme"
import { ALL_POSTS } from "./queries"
import { Container } from "./styles"

import JobList from "./JobList"
import JobView from "./JobView"
import RecruiterPage from "./RecruiterPage"
import NavBar from "./components/NavBar"

const Main: React.FC = () => {
  const [token, setToken] = useState(localStorage.getItem("recruiter-token"))
  const { error, loading, data } = useQuery(ALL_POSTS)
  const client = useApolloClient()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <div>
        {error.name}: {error.message}
      </div>
    )
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
          <Container>
            <Switch>
              <Route path="/post/:id" render={() => <JobView />} />
              <Route
                path="/recruiter"
                render={() => (
                  <RecruiterPage setToken={setToken} token={token} />
                )}
              />
              <Route path="/" render={() => <JobList jobs={data.allPosts} />} />
            </Switch>
          </Container>
        </>
      </ThemeProvider>
    </Router>
  )
}

export default Main
