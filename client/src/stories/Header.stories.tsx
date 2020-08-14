import React from "react"
import Header from "../components/Header"

export default {
  component: Header,
  title: "Header",
}

export const header = () => <Header>Lorem ipsum</Header>

export const HeaderWithAHeaderProp = () => (
  <Header header="h3">Lorem ipsum</Header>
)

export const HeaderWithAColorProp = () => (
  <Header color="blue">Lorem ipsum</Header>
)
