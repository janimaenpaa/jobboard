import React from "react"
import SearchBar from "../components/SearchBar"

export default {
  component: SearchBar,
  title: "SearchBar",
}

export const searchBar = () => (
  <SearchBar placeholder="Search for anything..." />
)
