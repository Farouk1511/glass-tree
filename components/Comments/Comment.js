import { Divider, Paper, Typography } from "@mui/material";
import React from "react";

const Comment = ({ content, author }) => {
  return (
    <Paper
      key={content}
      elevation={0}
      sx={{ backgroundColor: "#D8DDDE", padding: 2, marginBottom: 1 }}
    >
      <Typography
        fontWeight={"bold"}
        sx={{ fontFamily: "rockwell", fontWeight: 700 }}
      >
        {" "}
        {author}
      </Typography>
      <Divider />
      <Typography sx={{ fontFamily: "rockwell", fontWeight: 400 }}>
        {content}
      </Typography>
    </Paper>
  );
};

export default Comment;
