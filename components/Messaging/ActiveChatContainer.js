import { Paper } from "@mui/material";
import React from "react";
import ActiveChat from "./ActiveChat";
import CurrentUser from "./CurrentUser";
import Input from "./Input";

const ActiveChatContainer = ({
  conversation,
  addMessageToConvo,
  sendMessage,
  userId,
}) => {
  return (
    <Paper
      sx={{ width: "70%", height: "80vh", borderRadius: 0, padding: 1 }}
      elevation={0}
    >
      <CurrentUser otherUser={conversation.otherUser} />
      <ActiveChat conversation={conversation} />
      <Input
        addMessageToConvo={addMessageToConvo}
        conversationId={conversation.conversationId}
        sendMessage={sendMessage}
        userId={userId}
      />
    </Paper>
  );
};

export default ActiveChatContainer;
