import React from "react"
import styled from "styled-components"

const Wrapper = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
`

export interface Props {
  children: React.ReactNode
  marginLeft?: string
}

interface StyleProps {
  marginLeft?: string
}

const Container: React.FC<Props> = ({ children, marginLeft }) => {
  return <Wrapper marginLeft={marginLeft}>{children}</Wrapper>
}

export default Container
