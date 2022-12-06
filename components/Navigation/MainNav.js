import React from "react";
import { AppBar,Box ,Toolbar, Typography, Button, Link } from "@mui/material";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firbase/utilities";
const pages = [{name:"Register",href:'/register'}, {name:" Login",href:'/login'}];
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
const NavBar = () => {

  return (
   <>
     <AppBar
      position="sticky"
    
      elevation={0}
      style={{ paddingLeft: 200, paddingRight: 200,zIndex:1000,backgroundColor:'#fff'}}
    >
      <Toolbar disableGutters>
        <Typography
          sx={{
            flexGrow: 1,
            fontFamily: "rockwell",
            fontWeight: 700,
            textDecoration: "none",
            zIndex:100
          }}
          variant="h3"
          component="a"
          href="/"
          color="primary"
        >
          GlassTree
        </Typography>
        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
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
        </Box>
      </Toolbar>

      
    </AppBar>
   
   </>
  );
};

export default NavBar;
