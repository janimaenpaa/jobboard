import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../main/global"
import { theme } from "../main/theme"
import AdminNav from "../components/AdminNav"

interface Props {
    
}

const Admin = (props: Props) => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <>
                <GlobalStyles />
                <AdminNav />
                <Switch>
                </Switch>
                </>
            </ThemeProvider>
        </Router>
    )
}

export default Admin
