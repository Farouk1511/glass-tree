import React from "react";
import { Paper, Typography,Avatar } from "@mui/material";

const OtherUserBubble = ({ message,time }) => {
  return (
    <Paper
    sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}
    elevation={0}
  >
    <Avatar sx={{ marginRight: 2 }} />
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "secondary.main",
        display: "flex",
        alignItems: "center",
        maxWidth: "80%",
      }}
    >
      <Typography
        variant="body2"
        fontWeight={"200"}
        padding={1}
        color={"#e0e0e0"}
      >
       {message}
      </Typography>
    </Paper>
  </Paper>
  );
};

export default OtherUserBubble;
