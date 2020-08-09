import React from "react"
import styled from "styled-components"

const H2 = styled.h2`
  margin: 0;
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: 900;
  font-size: 2rem;
`

const H3 = styled.h3`
  margin: 0;
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: 700;
  font-size: 1.5rem;
`
export interface Props {
  children: React.ReactNode
  header?: string
  color?: string
}

const Header: React.FC<Props> = ({ color, children, header }) => {
  if (header === "h3") {
    return <H3 color={color}>{children}</H3>
  }

  return <H2 color={color}>{children}</H2>
}

export default Header
