import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  position: fixed;
  height: 100vh;
  width: 18rem;
  background-color: white;
  z-index: 98;
`

export interface Props {}

const SideNav: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>Lorem</li>
        <li>Ipsum</li>
        <li>Lorem Ipsum</li>
      </ul>
    </Container>
  )
}

export default SideNav
