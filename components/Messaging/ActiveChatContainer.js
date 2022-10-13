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
  conversations
}) => {
  {console.log(conversations,"activecontainer")}
console.log(conversation,"activecontainer")
  const activeConversation = conversations && conversation
    ? conversations.find(
        (convo) => convo.otherUser.name === conversation.otherUser.name
      )
    : null;
  return (
    <Paper
      sx={{ width: "70%", height: "80vh", borderRadius: 0, padding: 1 }}
      elevation={0}
    >
    {activeConversation && 
     <> <CurrentUser otherUser={activeConversation?.otherUser} />
      <ActiveChat conversation={activeConversation} userId={userId} />
      <Input
        addMessageToConvo={addMessageToConvo}
        conversationId={activeConversation?.conversationId}
        sendMessage={sendMessage}
        userId={userId}
      /></>
    }
    </Paper>
  );
};

export default ActiveChatContainer;
