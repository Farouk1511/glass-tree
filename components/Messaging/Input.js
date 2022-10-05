import { IconButton, InputBase, Paper, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
const Input = ({ addMessageToConvo, conversationId,sendMessage,userId}) => {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!content) return
    sendMessage({convoID:conversationId,content})
    addMessageToConvo(conversationId, content,userId);
    setContent("");
  };

  const keyPress = (e) => {
    if (e.key === "Enter") {
     
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
