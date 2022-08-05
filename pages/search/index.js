import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Paper,
  Link,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Grid,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firbase/utilities";

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

  const [user,loading,error] = useAuthState(auth)

  return (
    <>
      {/* Nav */}
      <AppBar
        position="sticky"
        elevation={0}
        style={{ paddingLeft: 200, paddingRight: 200, zIndex: 1000,backgroundColor:'#fff' }}
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
          <Avatar sx={{ backgroundColor: "secondary.main" }}>{user?user.email.split('')[0].toLocaleUpperCase():'F'}</Avatar>
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

      <Paper elevation={0} sx={{ marginLeft: 20, marginRight: 20, marginTop: 5 }}>
      <Grid container>
       {sections.map((sec) => (
        <Grid lg={3} key={sec.title} item>
        <Card sx={{ maxWidth: 350,marginBottom:5 }} elevation={1}>
          <CardMedia
            component={"img"}
            alt="image"
            height={"150"}
            image="https://picsum.photos/400/150"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontFamily: "rockwell", margin: 0 }}
            >
              Farouk Kazeem
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="span"
              sx={{ fontFamily: "rockwell", fontWeight: 200 }}
            >
              Computer Programmer
            </Typography>
          </CardContent>
          <CardContent sx={{ margin: 0, paddingTop: 0 }}>
            <Typography variant="body2">
              Currently booking new projects! Clean, efficient, quality work
              done at a fair price. Call/Text/Email today for your free, no
              obligation quote. Renovations, new residential builds, Commercial
              Builds, etc.
            </Typography>
          </CardContent>
          <CardContent>
            <Rating readOnly max={5} defaultValue={5}>
              Hello
            </Rating>
            <Typography
              sx={{
                display: "inline-block",
                fontFamily: "rockwell",
                fontWeight: 700,
              }}
              variant="caption"
            >
              (43k)
            </Typography>
          </CardContent>
          <Divider/>
          <CardContent sx={{display:"flex",flexDirection:'column',alignItems:"flex-end",paddingBottom:0}}>
            <Typography sx={{fontFamily: "rockwell",
                }}>Starting at</Typography>
            <Typography sx={{fontFamily: "rockwell",
                fontWeight: 700,}}>CA$40/hr</Typography>
          </CardContent>
        </Card>
        </Grid>
       ))}
      </Grid>
        
      </Paper>
    </>
  );
};

export default SearchPage;
