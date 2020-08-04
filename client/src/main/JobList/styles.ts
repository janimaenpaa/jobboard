import styled from "styled-components"
import { device } from "../theme"

export const Container = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  max-width: 60%;

  @media ${device.laptop} {
    max-width: 80%;
  }
  @media ${device.tablet} {
    max-width: 100%;
`

export const Header = styled.h2`
  margin: 0 8px;
  font-weight: 900;
  font-size: 2rem;
`

export const SearchBar = styled.input`
  border: none;
  border-radius: 10px;
  background-color: #dedede;
  padding: 10px;
  margin-top: 1rem;
  outline: none;

  &:focus {
    background-color: #c7c7c7;
  }

  @media ${device.tablet} {
    border-radius: 0px;
`