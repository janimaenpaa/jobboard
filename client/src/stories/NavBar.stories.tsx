import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { storiesOf } from "@storybook/react"
import NavBar from "../main/components/NavBar"

storiesOf("NavBar", module).add("NavBar when not logged in", () => (
  <Router>
    <NavBar
      title="JobBoard"
      token={null}
      logout={() => console.log("logout")}
    />
  </Router>
)).add("NavBar when logged in", () => (
  <Router>
    <NavBar
      title="JobBoard"
      token={"token"}
      logout={() => console.log("logout")}
    />
  </Router>
))
