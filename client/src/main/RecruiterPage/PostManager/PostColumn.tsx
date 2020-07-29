import React, { useState } from "react"
import styled from "styled-components"
import { useMutation } from "@apollo/client"
import { JobPost } from "../../types"
import { ALL_POSTS, DELETE_POST, ME } from "../../queries"
import { toFormattedDate } from "../../utils"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Row = styled.tr`
  width: 100%;
`

const Title = styled.div``

const Buttons = styled.div``

const EditButton = styled.button`
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
const DeleteButton = styled.button`
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

const PostColumn: React.FC<JobPost> = ({ id, title, published, deadline }) => {
  const [open, setOpen] = useState(false)
  const [deletePost] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: ALL_POSTS }, { query: ME }],
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    deletePost({ variables: { id } })
    setOpen(false)
  }

  const ReffedDialog = React.forwardRef((props, ref) => (
    <Dialog
      open={open}
      ref={ref}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`Are you sure you want to delete job "${title}"?`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This action will delete the post permanently.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          CANCEL
        </Button>
        <Button onClick={handleDelete} color="secondary" autoFocus>
          DELETE
        </Button>
      </DialogActions>
    </Dialog>
  ))

  return (
    <Row>
      <td>
        <Title>{title}</Title>
      </td>
      <td>{toFormattedDate(published)}</td>
      {deadline ? <td>{deadline}</td> : <td>No deadline</td>}
      <td>
        <Buttons>
          <EditButton>EDIT</EditButton>
          <DeleteButton onClick={handleClickOpen}>DELETE</DeleteButton>
          <ReffedDialog />
        </Buttons>
      </td>
    </Row>
  )
}

export default PostColumn
