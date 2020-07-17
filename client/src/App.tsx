import React, { FC } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Main from "./main"

const App: FC = () => (
    <Router>
      <Switch>
        <Route path="/" render={() => <Main />} />
      </Switch>
    </Router>
)

export default App
