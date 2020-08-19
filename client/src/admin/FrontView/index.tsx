import React from "react"
import Login from "./Login"

interface Props {
  token: string | null
}

const FrontView: React.FC<Props> = ({ token }) => {
  if (!token) {
    return (
      <div>
        <Login />
      </div>
    )
  }

  return <div></div>
}

export default FrontView
