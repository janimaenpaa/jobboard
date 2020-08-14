import React from "react"
import styled from "styled-components"
import { StyledLink } from "../main/styles"

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
  top: 0;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
`

const Title = styled.div`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
`

const NavLink = styled.div`
  color: #f2f2f2;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: 600;
`

const NavBar: React.FC<Props> = ({ title, token, logout }) => {
  if (token) {
    return (
      <Bar>
        <StyledLink to="/">
          <Title>{title}</Title>
        </StyledLink>
        <Links>
          <StyledLink to="/recruiter/new">
            <NavLink>Post a Job</NavLink>
          </StyledLink>
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
        <StyledLink to="/recruiter">
          <NavLink>Recruiters</NavLink>
        </StyledLink>
      </Links>
    </Bar>
  )
}

export default NavBar
