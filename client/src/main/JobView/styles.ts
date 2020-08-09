import styled from "styled-components"
import { device } from "../theme"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 0;
  padding: 20px;
  max-width: 60%;

  @media ${device.laptop} {
    max-width: 80%;
  }
  @media ${device.tablet} {
    max-width: 100%;
    border-radius: 0;
`
export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0 0;
`

export const Company = styled.h3`
  margin: 1.5rem 0 0 0;
  font-size: 1.1rem;
  color: gray;
`

export const Header = styled.h3`
  margin: 1rem 0 0.4rem 0;
  font-size: 1.2rem;
`

export const Description = styled.div`
  margin: 0 0 0 0;
`

export const Button = styled.button`
  display: block;
  background: #bf1650;
  color: white;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 0.6rem;
  margin-top: 1rem;
  font-size: 14px;
`

export const Info = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`

export const Skills = styled.div`
  display: flex;
`