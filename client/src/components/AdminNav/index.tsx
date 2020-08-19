import React from "react"
import TopNav from "./TopNav"
import SideNav from "./SideNav"

export interface Props {
  token?: string | null
}

const AdminNav: React.FC<Props> = ({ token }) => {
  return (
    <div>
      <TopNav title="JobBoard" miniTitle="Admin" />
      {token && <SideNav />}
    </div>
  )
}

export default AdminNav
