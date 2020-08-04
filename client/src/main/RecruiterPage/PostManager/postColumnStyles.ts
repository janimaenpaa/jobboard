import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Row = styled.tr`
  width: 100%;
`

export const Title = styled.div``

export const Buttons = styled.div``

export const EditButton = styled.button`
  background-color: #49c0ff;
  color: white;
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;
  width: 4.5rem;
  padding: 4px 10px;
  margin-left: 6px;
  margin-top: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1c8de9;
  }
`
export const DeleteButton = styled.button`
  background-color: #c96185;
  color: white;
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;
  width: 4.5rem;
  padding: 4px 6px;
  margin-left: 6px;
  margin-top: 4px;
  cursor: pointer;

  &:hover {
    background-color: #bf1650;
  }
`
