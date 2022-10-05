import { CardActionArea, Paper, Typography } from "@mui/material";
import React from "react";
import Chat from "./Chat";

const SideBar = ({conversations,setActiveChat}) => {

    return (
        <Paper
        sx={{
          width: "30%",
          height: "80vh",
          borderRadius: 0,
          padding: 2,
          overflowY:'auto'
        }}
        elevation={0}
      >
      
       {conversations.map((conversation,index) => (
        <CardActionArea key={conversation.otherUser} onClick={()=> setActiveChat(index)}>

        <Chat  conversation={conversation}/>
        </CardActionArea>
       ))}
            
      </Paper>
    )
}

export default SideBar