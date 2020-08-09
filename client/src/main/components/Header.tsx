import React from "react"
import styled from "styled-components"

const H2 = styled.h2<StyleProps>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: 900;
  font-size: 2rem;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0.5rem")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0.5rem"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)};
`

const H3 = styled.h3<StyleProps>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0.2rem")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0.5rem"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)};
`
export interface Props {
  children: React.ReactNode
  header?: string
  color?: string
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
}

interface StyleProps {
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
}

const Header: React.FC<Props> = ({
  color,
  children,
  header,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) => {
  if (header === "h3") {
    return (
      <H3
        color={color}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
      >
        {children}
      </H3>
    )
  }

  return (
    <H2
      color={color}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children}
    </H2>
  )
}

export default Header
