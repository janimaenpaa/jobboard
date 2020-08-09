import React from "react"
import styled from "styled-components"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"

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
  margin-top: 0.4rem;
  margin-right: 0.4rem;
`

export interface Props {
  children?: React.ReactNode | string
  onClick?: () => void
  color?: string
  textColor?: string
  required?: boolean
  recommended?: boolean
}

export interface StyleProps {
  color?: string
  textColor?: string
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  color,
  textColor,
  required,
  recommended,
}) => {
  if (required) {
    return (
      <StyledButton color="lightblue" onClick={onClick}>
        <CheckCircleIcon
          style={{
            fontSize: "1rem",
            color: "darkblue",
            marginRight: 3,
          }}
        />
        {children}
      </StyledButton>
    )
  }

  if (recommended) {
    return (
      <StyledButton color="lightgreen" onClick={onClick}>
        <ThumbUpIcon
          style={{
            fontSize: "1rem",
            color: "green",
            marginRight: 3,
          }}
        />
        {children}
      </StyledButton>
    )
  }

  return (
    <StyledButton color={color} textColor={textColor} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
