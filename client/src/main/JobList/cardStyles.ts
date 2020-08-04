import { Link } from "react-router-dom"
import styled from "styled-components"
import { device } from "../theme"

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  margin-top: 0.7rem;
  padding: 20px;
  width: 100%;

  &:hover {
    background-color: #81d2ff;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    border-radius: 0px;
  }
`

export const PinnedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff455;
  border-radius: 10px;
  margin-top: 0.7rem;
  padding: 20px;
  width: 100%;

  &:hover {
    background-color: #ffd302;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    border-radius: 0px;
  }
`

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
`

export const TechButton = styled.button`
  margin-right: 0.2rem;
  background-color: lightgray;
  border: none;
  border-radius: 4px;
  outline: none;
  font-weight: 500;
  color: white;

  @media ${device.tablet} {
    border-radius: 0;
  }
`

export const GreenSkillButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightgreen;
  border: none;
  border-radius: 6px;
  outline: none;
  padding: 8px;
  margin-right: 0.4rem;
`
export const BlueSkillButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightblue;
  border: none;
  border-radius: 6px;
  outline: none;
  padding: 8px;
  margin-right: 0.4rem;
`
