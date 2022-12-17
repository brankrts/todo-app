/** @format */

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { editTodo } from "../todo/todoSlice";
import { useState } from "react";
const EditDialog = ({ isOpen, setIsOpen, todo }) => {
  const dispatch = useDispatch();
  const [editTodoText, setEditTodoText] = useState();
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleEditTodo = () => {
    dispatch(
      editTodo({
        todoId: todo.id,
        description: editTodoText,
      })
    );
    setIsOpen(false)
  };
  const handleTexFieldChange = (e) => {
    setEditTodoText(e.target.value);
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update todo with new todo description
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Update Todo"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleTexFieldChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEditTodo}>Edit todo</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditDialog;
