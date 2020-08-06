import React from "react"
import styled from "styled-components"
import { device } from "../theme"

export interface Props {
  children: React.ReactNode
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 10px;
  width: 60%;
  padding: 10px;

  @media ${device.laptop} {
    width: 80%;
  }

  @media ${device.tablet} {
    width: 100%;
    border-radius: 0px;
  }
`

const Content = styled.div`
  margin: 20px;
`

const Card: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  )
}

export default Card
