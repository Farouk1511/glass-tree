import React from "react";
import { Paper } from "@mui/material";
import SenderBubble from "./SenderBubble";
import OtherUserBubble from "./OtherUserBubble";

const ActiveChat = ({ conversation }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "85%",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: 0,
        },
        padding: 3,
      }}
    >
     
      {conversation.messages.map((message) =>
        message.isSender ? (
          <SenderBubble message={message.content} />
        ) : (
          <OtherUserBubble message={message.content} />
        )
      )}
    </Paper>
  );
};

export default ActiveChat;
