import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: black;
  color: white;
  width: 100%;
  height: 3rem;
  z-index: 99;
  top: 0;
`

const Title = styled.div`
  font-size: 1.5rem;
  padding-left: 1rem;
`

const MiniTitle = styled.div`
  font-size: 1rem;
  padding-left: 0.5rem;
`

const Titles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export interface Props {
  title: String
  miniTitle?: String
  children?: React.ReactNode
}

const TopNav: React.FC<Props> = ({ title, miniTitle, children }) => {
  return (
    <Container>
      <Titles>
        <Title>{title}</Title>
        <MiniTitle>{miniTitle}</MiniTitle>
      </Titles>
    </Container>
  )
}

export default TopNav
