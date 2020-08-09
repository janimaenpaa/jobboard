import React from "react"
import styled from "styled-components"
import { device } from "../theme"

export interface Props {
  placeholder?: string
  onChange?: () => void
}

const Bar = styled.input`
  display: block;
  border: none;
  border-radius: 10px;
  background-color: #dedede;
  padding: 10px;
  outline: none;
  width: 60%;

  &:focus {
    background-color: #c7c7c7;
  }

  @media ${device.laptop} {
    width: 80%;
  }

  @media ${device.tablet} {
    border-radius: 0px;
    width: 100%;
`

const SearchBar: React.FC<Props> = ({ placeholder, onChange }) => {
  return <Bar placeholder={placeholder} onChange={onChange} />
}

export default SearchBar
