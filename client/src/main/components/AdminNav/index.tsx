import React from "react"
import TopNav from "./TopNav"
import SideNav from "./SideNav"

const AdminNav = () => {
  return (
    <div>
      <TopNav title="JobBoard" miniTitle="Admin" />
      <SideNav />
    </div>
  )
}

export default AdminNav