import styled from "styled-components"
import { device } from "../../theme"

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-top: 10px;
  color: black;
  font-size: 1rem;
  font-weight: 500;
`

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 12px 15px;
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
  margin-top: 10px;
  font-size: 1.1rem;
  font-weight: 600;
`
export const Header = styled.h2`
  margin: 0 1rem;
  font-weight: 900;
  font-size: 2rem;
`
export const CardHeader = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 1.5rem;
`
