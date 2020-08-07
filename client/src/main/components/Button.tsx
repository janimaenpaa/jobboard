import React from "react"
import styled from "styled-components"

const StyledButton = styled.button<StyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(props) => (props.color ? props.color : "#bf1650")};
  border: none;
  border-radius: 6px;
  color: ${(props) => (props.textColor ? props.textColor : "white")};
  cursor: pointer;
  outline: none;
  padding: 8px;
  margin-right: 0.4rem;
`

export interface Props {
  children?: React.ReactNode | string
  onClick?: () => void
  color?: string
  textColor?: string
}

export interface StyleProps {
  color?: string
  textColor?: string
}

const Button: React.FC<Props> = ({ children, onClick, color, textColor }) => {
  return (
    <StyledButton color={color} textColor={textColor} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
