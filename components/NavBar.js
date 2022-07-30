import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Box, fontSize } from "@mui/system";

const pages = ["Sign Up", "Sign In"];

const NavBar = () => {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      style={{ paddingLeft: 200, paddingRight: 200}}
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
              key={page}
              sx={{
                my: 2,
                color: "primary.main",
                display: "block",
                fontFamily: "rockwell",
                fontWeight: "Bold",
                fontSize: 20,
              }}
              color={"primary"}
              href="/login"
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
