import { CircularProgress, Paper, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../../components/Navigation/NavBar";
import Categories from "../../components/Navigation/Categories";
import SideBar from "../../components/Messaging/SideBar";
import ActiveChatContainer from "../../components/Messaging/ActiveChatContainer";
import io from "socket.io-client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firbase/utilities";
import { useRouter } from "next/router";

// https://betterprogramming.pub/socket-io-and-nextjs-build-real-time-chat-application-part-1-976555ecba
let CONVOS = [
  {
    conversationId: "6335e4a3b7149666a8b461ef",
    messages: [
      {
        seen: false,
        _id: "6335ea5e3ba280bc8758f5b9",
        sender: {
          _id: "631e97e9d587f83f24ca5c78",
          uid: "cB4HgYTZrAN7njW5Ngg2HpurLmp2",
          name: "Farouk Kazeem",
        },
        content: "Hello Dubem",
        conversationId: "6335e4a3b7149666a8b461ef",
        createdAt: "2022-09-29T18:56:30.876Z",
        __v: 0,
        isSender: true,
      },
      {
        seen: false,
        _id: "6335f0143ba280bc8758f5bf",
        sender: {
          _id: "631e97e9d587f83f24ca5c78",
          uid: "cB4HgYTZrAN7njW5Ngg2HpurLmp2",
          name: "Farouk Kazeem",
        },
        content: "Hello Dubem",
        conversationId: "6335e4a3b7149666a8b461ef",
        createdAt: "2022-09-29T19:20:52.066Z",
        __v: 0,
        isSender: true,
      },
      {
        _id: "633759aa72c7224d2a9a4a0a",
        sender: {
          _id: "631e97e9d587f83f24ca5c78",
          uid: "cB4HgYTZrAN7njW5Ngg2HpurLmp2",
          name: "Farouk Kazeem",
        },
        content: "Hello World",
        conversationId: "6335e4a3b7149666a8b461ef",
        seen: false,
        createdAt: "2022-09-30T21:03:38.434Z",
        __v: 0,
        isSender: true,
      },
      {
        _id: "633759cb72c7224d2a9a4a10",
        sender: {
          _id: "633491709a0d29123689d0bc",
          uid: "YpDaWLEOkDNfj5wiGvCJRmGKsqR2",
          name: "Dubem Udobi",
        },
        content: "Hello World",
        conversationId: "6335e4a3b7149666a8b461ef",
        seen: false,
        createdAt: "2022-09-30T21:04:11.523Z",
        __v: 0,
        isSender: false,
      },
    ],
    otherUser: "Dubem Udobi",
    otherUserId: "YpDaWLEOkDNfj5wiGvCJRmGKsqR2",
  },
  {
    conversationId: "63375a4372c7224d2a9a4a16",
    messages: [
      {
        _id: "63375a4372c7224d2a9a4a18",
        sender: {
          _id: "633492759a0d29123689d0f0",
          uid: "8Acq9U2mV2Xpo1rR1bE3aipYe1H3",
          name: "Udume Okotie",
        },
        content: "Hello mumu",
        conversationId: "63375a4372c7224d2a9a4a16",
        seen: false,
        createdAt: "2022-09-30T21:06:11.193Z",
        __v: 0,
        isSender: false,
      },
      {
        _id: "63375bb672c7224d2a9a4a30",
        sender: {
          _id: "631e97e9d587f83f24ca5c78",
          uid: "cB4HgYTZrAN7njW5Ngg2HpurLmp2",
          name: "Farouk Kazeem",
        },
        content: "Hello mumu - Farouk",
        conversationId: "63375a4372c7224d2a9a4a16",
        seen: false,
        createdAt: "2022-09-30T21:12:22.552Z",
        __v: 0,
        isSender: true,
      },
    ],
    otherUser: "Udume Okotie",
    otherUserId: "8Acq9U2mV2Xpo1rR1bE3aipYe1H3",
  },
  {
    conversationId: "63375c4d72c7224d2a9a4a38",
    messages: [
      {
        _id: "63375c4d72c7224d2a9a4a3a", //not needed
        sender: {
          _id: "631e97e9d587f83f24ca5c78",
          uid: "cB4HgYTZrAN7njW5Ngg2HpurLmp2",
          name: "Farouk Kazeem",
        }, //decided what u need here
        content: "Hello mumu - Farouk", //keep
        conversationId: "63375c4d72c7224d2a9a4a38", //not important
        seen: false, //keep
        createdAt: "2022-09-30T21:14:53.085Z", //keep
        __v: 0, //not imporatant
        isSender: true, // keep
      },
      {
        _id: "63375c7e72c7224d2a9a4a3c",
        sender: {
          _id: "6334952b73da167ac4eeaf89",
          uid: "sMyC87ZcpKhEe57BXNt8GMS3sHm2",
          name: "Jesse Uliem",
        },
        content: "Hello mumu - Jesse",
        conversationId: "63375c4d72c7224d2a9a4a38",
        seen: false,
        createdAt: "2022-09-30T21:15:42.193Z",
        __v: 0,
        isSender: false,
      },
    ],
    otherUser: "Jesse Uliem",
    otherUserId: "sMyC87ZcpKhEe57BXNt8GMS3sHm2",
  },
];

//Sockets
let socket;

const Chat = () => {
  const [activeConversation, setActiveConversation] = useState(CONVOS[0]);
  const [conversations, setConversations] = useState(CONVOS);
  const [user, isLoading, error] = useAuthState(auth);
  const [userId, setUserId] = useState("");
  const router = useRouter();
  const { otherUserId } = router.query;

  const setActiveChat = (index) => {
    setActiveConversation(conversations[index]);
  };

  const sendMessage = (data) => {
    socket.emit("new-message", {
      content: data.content,
      convoID: data.convoID,
      senderId: data.senderId,
    });

    console.log(data, "sendMEssage");
  };

  const createNewConversation = useCallback(
    async (content, senderId) => {
      const messageToAdd = {
        content,
        senderUID: senderId,
        recieverUID: otherUserId,
        conversationId: null,
      };

      console.log(senderId, otherUserId);
      //add message to backend
      let newMessage = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageToAdd),
      });

      newMessage = await newMessage.json();
      console.log(newMessage);
      // get conversation Id,
      const { conversationId } = newMessage.message;
      console.log(conversationId);
      // add message to conversation
      setConversations((prev) => {
        return prev.map((convo) => {
          if (convo.otherUserId === otherUserId) {
            const convoCopy = { ...convo };
            convoCopy.messages.push({
              ...newMessage.message,
              sender: { ...newMessage.message.sender, uid: userId },
            });
            convoCopy.conversationId = conversationId;
            convoCopy.latestMessage = newMessage.message.content;
            
            return convoCopy;
          } else {
            return convo;
          }
        });
      });
    },
    [otherUserId, userId]
  );

  const addMessageToConvo = useCallback(
    (convoID, content, senderId) => {
      if (convoID) {
        const index = conversations.find(
          (conversation) => conversation.conversationId === convoID
        );

        if (index) {
          const messageToAdd = {
            content,
          };

          const newConvo = conversations.map((convo) => {
            if (convo.conversationId === convoID) {
              const convoCopy = { ...convo };
              console.log(user.uid, convo.otherUserId);
              messageToAdd.isSender = user.uid === senderId;
              convoCopy.messages.push(messageToAdd);

              return convoCopy;
            } else {
              return convo;
            }
          });

          setConversations(newConvo);
        } else {
          const conversationToAdd = {
            conversationId: convoID,
            messages: [],
            otherUserId: senderId,
          };

          const messageToAdd = {
            _id: "63375a4372c7224d2a9a4a18",
            sender: {
              uid: senderId,
            },
            content: content,

            seen: false,

            isSender: userId === senderId,
          };

          conversationToAdd.messages.push(messageToAdd);

          setConversations((prev) => [conversationToAdd, ...prev]);
        }
      } else {
        createNewConversation(content, senderId);
      }
    },
    [conversations, user, createNewConversation,userId]
  );

  const socketInitializer = async () => {
    await fetch("/api/socket");

    socket = io();

    socket.on("new-incoming-message", (data) => {
      console.log(data, "UseEFfect");
      const { convoID, content, senderId } = data;
      addMessageToConvo(convoID, content, senderId);
    });
  };

  const addNewConvo = (otherUserId, otherUserName) => {
    // add convo to convo array
    const conversationToAdd = {
      conversationId: null,
      messages: [],
      otherUser: otherUserName,
      otherUserId: otherUserId,
    };

    setConversations((conversations) => [conversationToAdd, ...conversations]);
    setActiveConversation(conversationToAdd);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserId(user.uid);
    });
  }, [user]);

  useEffect(() => {
    if (!router.isReady) return; //get user id

    const { otherUserId, otherUserName } = router.query;
    console.log(router.query);
    //check if userid is conversation otherUserId
    if (otherUserId) {
      console.log(CONVOS);
      const indexOfConvo = CONVOS.findIndex(
        (convo) => convo.otherUserId === otherUserId
      );
      console.log(indexOfConvo);
      if (indexOfConvo > -1) {
        //if its there set conversation as active
        setActiveChat(indexOfConvo);
      } else {
        //else create a new conversation and set that as active
        addNewConvo(otherUserId, otherUserName);
        console.log(conversations);
      }
    }

    socketInitializer();
  }, [router]);
  // const socketInitializer = useCallback( async () => {
  //   await fetch("/api/socket");

  //   socket = io();

  //   socket.on("new-incoming-message", (data) => {
  //     console.log(data,"UseEFfect")
  //     const { convoID, content } = data;
  //     addMessageToConvo(convoID, content);
  //   });
  // },[addMessageToConvo]);

  // useEffect(() => {

  //   socketInitializer();

  // }, [socketInitializer]);

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
      {isLoading ? (
        <CircularProgress />
      ) : (
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
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <SideBar
            conversations={conversations}
            setActiveChat={setActiveChat}
          />
          <ActiveChatContainer
            conversation={activeConversation}
            addMessageToConvo={addMessageToConvo}
            sendMessage={sendMessage}
            userId={userId}
          />
        </Paper>
      )}
    </>
  );
};

export default Chat;
