import { Typography, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Categories from "../../../components/Navigation/Categories";
import NavBar from "../../../components/Navigation/NavBar";
import SideBar from "../../../components/Messaging/SideBar";
import ActiveChatContainer from "../../../components/Messaging/ActiveChatContainer";
import io from "socket.io-client";

export async function getServerSideProps(context) {
  const { params } = context;
  const { userUID, otherUserUID } = params;

  const res = await fetch(`/api/conversation/${userUID}`);
  const data = await res.json();

  return { props: { data, oUserUID: otherUserUID, uUID: userUID } };
  //on every request
  // get lastest convrsation list
  // use userUID to check through the conversation list
  // get object where other user uid = userUID
  // set it as active container
  //simple
}

let socket;

const Chat = ({ data, oUserUID, uUID }) => {
  const [conversations, setConversations] = useState(data);
  const [otherUserUID, setOtherUserUID] = useState(oUserUID);
  const [userUID, setUserUID] = useState(uUID);
  const [activeConversation, setActiveConversation] = useState(null);

  // Functions
  const sendMessage = (data) => {
    socket.emit("new-message", data);

    console.log(data, "sendMEssage");
  };

  // ----------------------Messaging Feature-------------------------

  const saveMessage = async ({
    conversationId,
    content,
    senderUID,
    recieverUID,
  }) => {
    const result = await fetch(`/api/messages/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ conversationId, content, senderUID, recieverUID }),
    });

    const { message } = await result.json();

    return message;
  };

  const postMessage = async ({ conversationId, content, senderUID }) => {
    const message = await saveMessage({
      conversationId,
      content,
      senderUID,
      recieverUID: activeConversation.otherUser.uid,
    });

    // console.log(message);

    let convoObject = conversations.find(
      (convo) =>
        convo.conversationId === message.conversationId ||
        convo.otherUser.uid === otherUserUID
    );

    // console.log(convoObject, "convoObject");

    if (convoObject) {
      addMessageToConversation({ message });
    } else {
      createAndAddNewConversation({ message });
    }

    // console.log(conversations);

    // const data = {...message,recipient:}
    sendMessage({ message, otherUserUID });
  };

  const createAndAddNewConversation = ({ message }) => {
    console.log(message, "create message");
    const conversationToAdd = {
      conversationId: message.conversationId ? message.conversationId : null,
      messages: message.content ? [message.content] : [],
      otherUser: {
        name: message.sender.name,
        uid: otherUserUID ? otherUserUID : message.sender.uid,
      },
    };

    console.log(conversationToAdd, "create message");

    setConversations((prev) => [conversationToAdd, ...prev]);
    setActiveConversation(conversationToAdd);
    return conversationToAdd;
  };

  const addMessageToConversation = ({ message, otherUserUID }) => {
    //creating new array of conversation to trigger state change
    console.log(message, "addmessage");
    console.log(conversations, "add Message");

    const result = conversations.find(
      (convo) => convo.conversationId === message.conversationId
    );

    if (!result && userUID === otherUserUID) {
      createAndAddNewConversation({message,otherUserUID});
    }

    if (result) {
      setConversations((prev) =>
        prev.map((convo) => {
          if (
            convo.conversationId === message.conversationId ||
            convo.otherUser.uid === otherUserUID
          ) {
            const convoCopy = { ...convo, messages: [...convo.messages] };
            convoCopy.conversationId = message.conversationId;
            convoCopy.messages.push(message);
            console.log(convoCopy);
            return convoCopy;
          } else {
            return convo;
          }
        })
      );
    }
  };

  const socketInitializer = async (id) => {
    await fetch("/api/socket");

    socket = io();

    socket.on("new-incoming-message", ({ message, otherUserUID }) => {
      console.log(data, id, "UseEffect socketInitliazer");
      if (message.sender.uid !== id) {
        addMessageToConversation({ message, otherUserUID });
      }
    });

    socket.on("disconnect", function () {
      socket.removeAllListeners("new-incoming-message");
      socket.removeAllListeners("disconnect");
    });
  };

  useEffect(() => {
    socketInitializer(userUID);
  }, []);

  useEffect(() => {
    const result = conversations.find(
      (convo) => convo.otherUser.uid === otherUserUID
    );

    if (result) {
      setActiveConversation(result);
    } else {
      let newMessage = {
        sender: {
          name: "New conversation",
          uid: otherUserUID,
        },
        conversationsId:null
      };
      createAndAddNewConversation({ message:newMessage, otherUserUID });
    }
  }, [conversations, otherUserUID]);

  return (
    <>
      {console.log(data, otherUserUID)}
      <NavBar />
      <Categories />
      <Typography
        sx={{
          fontFamily: "rockwell",
          fontWeight: 700,
          textDecoration: "none",
          display: "flex",

          marginLeft: 33,

          alignItems: "center",
        }}
        variant="h4"
        component="a"
        href="/search"
        color="primary"
      >
        Messages
      </Typography>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          // backgroundColor: "#e0e0e0",
          padding: 1,
        }}
      >
        <SideBar conversations={conversations} userId={userUID} />
        <ActiveChatContainer
          userId={userUID}
          conversations={conversations}
          conversation={activeConversation}
          addMessageToConvo={postMessage}
        />
      </Paper>
    </>
  );
};

export default Chat;
