import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
`

export interface Props {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Container
