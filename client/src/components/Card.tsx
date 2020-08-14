import React from "react"
import styled from "styled-components"
import { device } from "../main/theme"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 10px;
  width: 60%;
  padding: 10px;
  margin-top: 0.7rem;

  @media ${device.laptop} {
    width: 80%;
  }

  @media ${device.tablet} {
    width: 100%;
    border-radius: 0px;
  }
`

const PinContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #fff455;
  border-radius: 10px;
  width: 60%;
  padding: 10px;
  margin-top: 0.7rem;

  &:hover {
    background-color: #ffd302;
  }

  @media ${device.laptop} {
    width: 80%;
  }

  @media ${device.tablet} {
    width: 100%;
    border-radius: 0px;
  }
`

const HoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 10px;
  width: 60%;
  padding: 10px;
  margin-top: 0.7rem;

  &:hover {
    background-color: #81d2ff;
  }

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

export interface Props {
  children: React.ReactNode
  type?: string
}

const Card: React.FC<Props> = ({ type, children }) => {
  if (type === "PIN") {
    return (
      <PinContainer>
        <Content>{children}</Content>
      </PinContainer>
    )
  }

  if (type === "HOVER") {
    return (
      <HoverContainer>
        <Content>{children}</Content>
      </HoverContainer>
    )
  }

  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  )
}

export default Card
