import React, { useState } from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../main/global"
import { theme } from "../main/theme"
import AdminNav from "../components/AdminNav"
import Dashboard from "./Dashboard"
import Container from "../components/Container"

interface Props {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Admin = (props: Props) => {
  const [token, setToken] = useState(null)
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Wrapper>
            <AdminNav />
            <Container>
              <Switch>
                <Route path="/" render={() => <Dashboard />} />
              </Switch>
            </Container>
          </Wrapper>
        </>
      </ThemeProvider>
    </Router>
  )
}

export default Admin
