import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

const DeleteModal = ({handleDelete,open,handleClose}) => {
    
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{"Delete Post"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete your post?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus variant="contained">No</Button>
        <Button onClick={handleDelete} variant="contained" color="secondary">Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
