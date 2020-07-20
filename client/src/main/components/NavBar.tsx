import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

interface Props {
  title: String
}

const Bar = styled.div`
  display: flex;
  position: fixed;
  background-color: black;
  width: 100%;
  z-index: 99;
  margin-bottom: 30px;
`

const Title = styled.div`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`

const RecruiterLink = styled.div`
  float: left;
  display: flex;
  justify-content: flex-end;
  color: #f2f2f2;
  text-align: right;
  padding: 14px 16px;
  text-decoration: none;
`

const NavBar: React.FC<Props> = ({ title }) => (
  <Bar>
    <Link to="/">
      <Title>{title}</Title>
    </Link>
    <Link to="/new">
      <RecruiterLink>Recruiters</RecruiterLink>
    </Link>
  </Bar>
)

export default NavBar
