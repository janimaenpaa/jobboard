import styled from "styled-components"
import { device } from "../../theme"

export const Container = styled.div`
  align-content: center;
  flex-direction: column;

  @media ${device.laptop} {
    max-width: 80%;
  }
  @media ${device.tablet} {
    max-width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  width: 100%;
`

export const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-top: 6px;
  color: black;
  font-size: 14px;
  font-weight: 400;
`

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 6px 15px;
  font-size: 14px;
  color: black;
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
  margin-bottom: 10px;
  margin-top: 8px;
  font-size: 14px;
`
