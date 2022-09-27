import React from "react";
import { AppBar, Toolbar, Typography, Paper, Avatar } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firbase/utilities";
import ProfileAvatar from "./ProfileAvatar";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useRouter } from "next/router";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        style={{
          paddingLeft: 200,
          paddingRight: 200,
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
          <Paper
            sx={{
              borderColor: "primary",
              width: 750,
              border: 1,
              borderRadius: 0,
              display: "flex",
            }}
            component={"form"}
            elevation={0}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Try "paint my fence"'
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              sx={{
                borderRadius: 0,
                backgroundColor: "primary.main",
                color: "#fff",
              }}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          {/* <Avatar sx={{ backgroundColor: "secondary.main" }}>
            {user ? user.email.split("")[0].toLocaleUpperCase() : "F"}
          </Avatar> */}
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
