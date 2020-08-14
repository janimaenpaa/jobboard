import { Link } from "react-router-dom"
import styled from "styled-components"

export const Title = styled.div`
  color: black;
  font-size: 1.2rem;
  font-weight: 700;
  width: 100%;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export const Company = styled.div`
  color: #636363;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
  align: left;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`

export const Location = styled.div``
export const Published = styled.div``

export const Skill = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
