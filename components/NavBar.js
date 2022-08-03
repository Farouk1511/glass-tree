import React from "react";
import { AppBar,Paper ,Toolbar, Typography, Button, Link } from "@mui/material";
import { Box, fontSize } from "@mui/system";
import { useUser } from "@auth0/nextjs-auth0";
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
const {user,error,isLoading} = useUser()

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
              {user?'Logout':page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>

      
    </AppBar>
   
   </>
  );
};

export default NavBar;
