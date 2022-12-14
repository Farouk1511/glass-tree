import { Divider, Paper, Typography } from "@mui/material";
import React from "react";

const Comment = ({ text, user }) => {
  return (
    <Paper
      key={text}
      elevation={0}
      sx={{ backgroundColor: "#D8DDDE", padding: 2, marginBottom: 1 }}
    >
      <Typography
        fontWeight={"bold"}
        sx={{ fontFamily: "rockwell", fontWeight: 700 }}
      >
        {" "}
        {user}
      </Typography>
      <Divider />
      <Typography sx={{ fontFamily: "rockwell", fontWeight: 400 }}>
        {text}
      </Typography>
    </Paper>
  );
};

export default Comment;
