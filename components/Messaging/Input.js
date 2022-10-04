import { IconButton, InputBase, Paper, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
const Input = ({ addMessageToConvo, conversationId }) => {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessageToConvo(conversationId, content);
    setContent("");
  };

  const keyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
     handleSubmit(e)
    }
  };

  return (
    <Paper
      sx={{
        borderColor: "primary",
        width: "100%",
        border: 1,
        borderRadius: 0,
        display: "flex",
        marginTop: 0,
      }}
      component={"form"}
      elevation={0}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        onChange={(e) => handleChange(e)}
        value={content}
        onKeyDown={keyPress}
        components={<TextareaAutosize/>}
        autoFocus
        multiline
      />
      <IconButton
        sx={{
          borderRadius: 0,
          backgroundColor: "primary.main",
          color: "#fff",
          ":hover": {
            bgcolor: "#3f4145",
          },
        }}
        onClick={handleSubmit}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default Input;
