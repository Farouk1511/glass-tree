import { Box, Badge, Avatar, Paper, Typography } from "@mui/material";
import React from "react";

const Chat = ({conversation}) => {
  return (
    <Paper
      sx={{
        backgroundColor:'#D8E2DC',
        display: "flex",
        alignItems: "center",
        padding: 1,
        borderRadius: 0,
        borderBottom: 1,
        borderColor: "#e0e0e0",
      }}
      elevation={0}
    >
      {conversation.isOnline ? (
        <Badge color="secondary" badgeContent=" " variant="dot">
          <Avatar />
        </Badge>
      ) : (
        <Avatar />
      )}

      <Box sx={{ marginLeft: 2 }}>
        <Typography variant="body2" fontWeight={"700"}>
          {conversation.otherUser.name}
        </Typography>
        <Typography variant="body2" fontWeight={"200"}>
        
          {conversation.messages[conversation.messages.length -1]?.content}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Chat;
