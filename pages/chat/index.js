import { Paper, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../../components/Navigation/NavBar";
import Categories from "../../components/Navigation/Categories";
import SideBar from "../../components/Messaging/SideBar";
import ActiveChatContainer from "../../components/Messaging/ActiveChatContainer";
import io from "socket.io-client";

import { auth } from "../../firbase/utilities";
import { useRouter } from "next/router";

//Sockets
let socket;

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [userId, setUserId] = useState("");
  const router = useRouter();
  const { otherUserId, otherUserName } = router.query;

  const setActiveChat = (conversation) => {
    setActiveConversation(conversation);
    router.push("/chat");
  };

  const sendMessage = (data) => {
    socket.emit("new-message", data);

    // console.log(data, "sendMEssage");
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
        convo.otherUser.name === otherUserName
    );

    // console.log(convoObject, "convoObject");

    if (convoObject) {
      addMessageToConversation(message);
    } else {
      createAndAddNewConversation(message);
    }

    // console.log(conversations);

    // const data = {...message,recipient:}
    sendMessage(message);
  };

  const createAndAddNewConversation = (message) => {
    console.log(message, "create message");
    const conversationToAdd = {
      conversationId: message.conversationId ? message.conversationId : null,
      messages: message.content ? [message.content] : [],
      otherUser: {
        name: otherUserName ? otherUserName : message.sender.name,
        uid: otherUserId ? otherUserId : message.sender.uid,
      },
    };

    console.log(conversationToAdd, "create message");

    setConversations((prev) => [conversationToAdd, ...prev]);

    return conversationToAdd;
  };

  const addMessageToConversation = (message) => {
    //creating new array of conversation to trigger state change
    console.log(message, "addmessage");
    console.log(conversations, "add MEssage");

    setConversations((prev) =>
      prev.map((convo) => {
        if (
          convo.conversationId === message.conversationId ||
          convo.otherUser.name === otherUserName
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
  };

  const socketInitializer = async (id) => {
    await fetch("/api/socket");

    socket = io();

    socket.on("new-incoming-message", (data) => {
      console.log(data,id,"UseEffect socketInitliazer")
      if(data.sender.uid !== id){

        addMessageToConversation(data);
      }
    });

    socket.on('disconnect', function () {
      socket.removeAllListeners('new-incoming-message');
      socket.removeAllListeners('disconnect');
      io.removeAllListeners('connection');
      console.log("Disconnected")
  });
  };
 

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserId(user.uid);
      socketInitializer(user.uid)
    
    });
  }, []);

 

  useEffect(() => {
    const getConversations = async (uid) => {
      try {
        const result = await fetch(`/api/conversation/${uid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const convos = await result.json();
        console.log(convos, "useEffect convo");
        setConversations(prev => [...prev,...convos] );
      } catch (err) {
        console.log(err);
      }
    };

    if(userId){

      getConversations(userId);
    }
  }, [userId]);

  // useEffect(() => {
  //   if (!router.isReady) return; //get user id

  //   const { otherUserId, otherUserName } = router.query;
  //   // console.log(router.query);
  //   //check if userid is conversation otherUserId
  //   if (otherUserId) {
  //     console.log(conversations);
  //     const foundConvo = conversations.find(
  //       (convo) => convo.otherUser.uid === otherUserId
  //     );
  //     // console.log(indexOfConvo);
  //     if (foundConvo) {
  //       //if its there set conversation as active
  //       setActiveConversation(foundConvo);
  //     } else {
  //       //else create a new conversation and set that as active
  //       const convo = createAndAddNewConversation({
  //         content: "",
  //         otherUser: { uid: otherUserId, name: otherUserName },
  //       });

  //       console.log(convo, "useEffect");
  //       setActiveConversation(convo);
  //       // console.log(conversations);
  //     }
  //   }

  //   // socketInitializer();
  // }, [router,userId]);

  return (
    <>
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
        <SideBar conversations={conversations} setActiveChat={setActiveChat} />
        <ActiveChatContainer
          conversations={conversations}
          conversation={activeConversation}
          addMessageToConvo={postMessage}
          sendMessage={sendMessage}
          userId={userId}
        />
      </Paper>
    </>
  );
};

export default Chat;
