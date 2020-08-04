import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { JobPost } from "../../types"
import { ALL_POSTS, DELETE_POST, ME } from "../../queries"
import { toFormattedDate } from "../../utils"
import {
  Row,
  Title,
  Buttons,
  EditButton,
  DeleteButton,
} from "./postColumnStyles"

import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"
import { TransitionProps } from "@material-ui/core/transitions"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide ref={ref} {...props} />
})

const PostColumn: React.FC<JobPost> = ({ id, title, published, deadline }) => {
  const [open, setOpen] = useState(false)
  const [deletePost] = useMutation(DELETE_POST, {
    refetchQueries: [
      {
        query: ALL_POSTS,
      },
      {
        query: ME,
      },
    ],
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    deletePost({
      variables: {
        id,
      },
    })
    setOpen(false)
  }

  return (
    <Row>
      <td>
        <Title>{title}</Title>
      </td>
      <td>{toFormattedDate(published)}</td>
      {deadline ? <td>{deadline}</td> : <td>No deadline</td>}
      <td>
        <Buttons>
          <Link to={`/recruiter/post/${id}`}>
            <EditButton>EDIT</EditButton>
          </Link>
          <DeleteButton onClick={handleClickOpen}>DELETE</DeleteButton>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
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
        </Buttons>
      </td>
    </Row>
  )
}

export default PostColumn
