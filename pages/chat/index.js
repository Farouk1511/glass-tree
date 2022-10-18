import { Paper, Typography } from "@mui/material";
import React, {useEffect, useState } from "react";
import NavBar from "../../components/Navigation/NavBar";
import Categories from "../../components/Navigation/Categories";
import SideBar from "../../components/Messaging/SideBar";
import ActiveChatContainer from "../../components/Messaging/ActiveChatContainer";
import { auth } from "../../firbase/utilities";


//Sockets
let socket;

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [userId, setUserId] = useState("");



  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserId(user.uid);
   
    
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
        <SideBar conversations={conversations} userId={userId} />
        <ActiveChatContainer
         
        />
      </Paper>
    </>
  );
};

export default Chat;
