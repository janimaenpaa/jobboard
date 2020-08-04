import styled from "styled-components"
import { device } from "../../../theme"

export const Header = styled.h2`
  margin: 0 8px;
  font-weight: 900;
  font-size: 2rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-top: 1rem;
  width: 60%;

  @media ${device.tablet} {
    border-radius: 0px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div``
