import React, { FC } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "typeface-roboto"
import "typeface-lato"
import "typeface-roboto-slab"

import Main from "./main"
import Admin from "./admin"

const App: FC = () => (
  <Router>
    <Switch>
      <Route path="/admin" render={() => <Admin />} />
      <Route path="/" render={() => <Main />} />
    </Switch>
  </Router>
)

export default App
