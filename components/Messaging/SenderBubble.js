import React from "react";
import { Paper, Typography,Avatar } from "@mui/material";

const SenderBubble = ({message}) => {
  return (
    <Paper
    sx={{
      display: "flex",
      flexDirection: "row-reverse",
      marginBottom: 2,
    }}
    elevation={0}
  >
    <Avatar sx={{ marginLeft: 2 }} />
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "primary.main",
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

export default SenderBubble;
