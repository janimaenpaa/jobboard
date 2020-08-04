import styled from "styled-components"
import { device } from "../../theme"

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-top: 1rem;
  width: 100%;

  @media ${device.tablet} {
    border-radius: 0px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  margin-top: 0rem;
  font-size: 1rem;
  font-weight: 600;
`

export const Header = styled.h2`
  margin: 0 8px;
  font-weight: 900;
  font-size: 2rem;
`
