import React from "react"
import styled from "styled-components"

interface Props {
  children: React.ReactNode
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  border: 1px solid;
  width: 60%;
  padding: 20px;
`

const Card: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Card
