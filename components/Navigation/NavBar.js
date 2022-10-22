import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Avatar,
  Badge,
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

const NavBar = ({ handleSearch }) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  
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
            GlassTree
          </Typography>
          {/* Search */}
          <SearchBar
            handleSearch={handleSearch}
          />
          {/* <Avatar sx={{ backgroundColor: "secondary.main" }}>
            {user ? user.email.split("")[0].toLocaleUpperCase() : "F"}
          </Avatar> */}
          <IconButton
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
          </IconButton>
          <IconButton
            onClick={() =>
              router.push(`http://localhost:3000/favorites/${user.uid}`)
            }
          >
            <FavoriteBorderOutlinedIcon
              sx={{ color: "#000" }}
              fontSize={"large"}
            />
          </IconButton>

          {user && (
            <ProfileAvatar
              name={user.email ? user.email : "J"}
              userID={user.uid}
            />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
