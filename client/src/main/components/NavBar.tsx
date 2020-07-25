import React from "react"
import styled from "styled-components"
import { StyledLink } from "../styles"

interface Props {
  title: String
  token: String | null
  logout: () => void
}

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: black;
  width: 100%;
  z-index: 99;
  align-items: center;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
`

const Title = styled.div`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
`

const NavLink = styled.div`
  color: #f2f2f2;
  text-align: right;
  padding: 14px 16px;
  text-decoration: none;
`

const NavBar: React.FC<Props> = ({ title, token, logout }) => {
  console.log(token)
  if (token) {
    return (
      <Bar>
        <StyledLink to="/">
          <Title>{title}</Title>
        </StyledLink>
        <Links>
          <StyledLink to="/recruiter">
            <NavLink>Posts</NavLink>
          </StyledLink>
          <StyledLink to="/" onClick={logout}>
            <NavLink>Logout</NavLink>
          </StyledLink>
        </Links>
      </Bar>
    )
  }

  return (
    <Bar>
      <StyledLink to="/">
        <Title>{title}</Title>
      </StyledLink>
      <Links>
        <StyledLink to="/new">
          <NavLink>New</NavLink>
        </StyledLink>
        <StyledLink to="/recruiter">
          <NavLink>Recruiters</NavLink>
        </StyledLink>
      </Links>
    </Bar>
  )
}

export default NavBar
