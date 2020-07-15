import React, { FC } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Main from "./main"

const App: FC = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/" render={() => <Main />} />
      </Switch>
    </Router>
  </div>
)

export default App
