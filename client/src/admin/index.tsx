import React, { useState } from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../main/global"
import { theme } from "../main/theme"
import AdminNav from "../components/AdminNav"
import Container from "../components/Container"
import FrontView from "./FrontView"

interface Props {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Admin = (props: Props) => {
  const [token, setToken] = useState(localStorage.getItem("user-token"))
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Wrapper>
            <AdminNav token={token} />
            <Container>
              <Switch>
                <Route path="/" render={() => <FrontView token={token} />} />
              </Switch>
            </Container>
          </Wrapper>
        </>
      </ThemeProvider>
    </Router>
  )
}

export default Admin
