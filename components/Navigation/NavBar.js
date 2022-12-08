import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Avatar,
  Badge,
  Box,
  Button,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firbase/utilities";
import ProfileAvatar from "./ProfileAvatar";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";
const pages = [{name:"Register",href:'/register'}, {name:" Login",href:'/login'}];
const NavBar = ({ handleSearch }) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  
  // useEffect(() => {
  //   auth.onAuthStateChanged(async(user) => {
  //     console.log("DELETE USER HERE",await user.getIdToken(true))
  //   } )
  // },[])

  
  
  return (
    <>
      <AppBar
        position="relative"
        elevation={0}
        style={{
         
          zIndex: 1000,
          backgroundColor: "#fff",
        }}
      >
     {/* {console.log(user)} */}
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          disableGutters
        >
          <Typography
            sx={{
              fontFamily: "rockwell",
              fontWeight: 700,
              textDecoration: "none",
            }}
            variant="h3"
            component="a"
            href="/search"
            color="primary"
          >
           Glass Tree
          </Typography>
          {/* Search */}
          <SearchBar
            handleSearch={handleSearch}
          />
          {/* <Avatar sx={{ backgroundColor: "secondary.main" }}>
            {user ? user.email.split("")[0].toLocaleUpperCase() : "F"}
          </Avatar> */}
          {/* <IconButton
            onClick={() =>
              router.push(`http://localhost:3000/chat`)
            }
          >
            <Badge badgeContent={40} color="secondary">
              <ChatBubbleOutlineIcon
                sx={{ color: "#000" }}
                fontSize={"large"}
              />
            </Badge>
          </IconButton> */}
         {user && <IconButton
            onClick={() =>{
             
              router.push(`http://localhost:3000/favorites/${user.uid}`)
            }
            }
          >
            <FavoriteBorderOutlinedIcon
              sx={{ color: "#000" }}
              fontSize={"large"}
            />
          </IconButton>}

          {user && (
            <ProfileAvatar
              name={user.email ? user.email : "J"}
              userID={user.uid}
            />
          )}

          {!user && <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              sx={{
                my: 2,
                color: "primary.main",
                display: "block",
                fontFamily: "rockwell",
                fontWeight: "Bold",
                fontSize: 20,
              }}
              color={"primary"}
              href={page.href}
            >
              {page.name}
            </Button>
          ))}
        </Box>}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
