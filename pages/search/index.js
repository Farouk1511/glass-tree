import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Link,
  Avatar,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firbase/utilities";

import HelpCardGrid from "../../components/Helper/HelpCardGrid";

const pages = [
  { name: "Register", href: "/register" },
  { name: " Login", href: "/login" },
];

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const SearchPage = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      {/* Nav */}
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
            href="/"
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
          <Avatar sx={{ backgroundColor: "secondary.main" }}>
            {user ? user.email.split("")[0].toLocaleUpperCase() : "F"}
          </Avatar>
        </Toolbar>
      </AppBar>

      {/* Categories */}
      <Paper elevation={0}>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{
            justifyContent: "space-between",
            overflowX: "auto",
            margin: 25,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              sx={{
                p: 1,
                flexShrink: 0,
                fontFamily: "rockwell",
                fontWeight: 700,
                textDecoration: "none",
                "&:hover": {
                  borderBottom: 4,

                  borderColor: "secondary.main",
                  color: "gray",
                },
              }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Paper>

      {/* Categories */}
      <Paper elevation={0} sx={{ marginLeft: 25, marginTop: 5 }}>
        <Typography variant="h4" sx={{ fontFamily: "rockwell" }}>
          {'Results for "Search"'}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: "rockwell", marginTop: 5, fontWeight: 700 }}
        >
          {"151,100 services available"}
        </Typography>
      </Paper>

      <HelpCardGrid marginLeft={20} marginRight={20} marginTop={5} />
    </>
  );
};

export default SearchPage;
