import { Typography } from "@mui/material";
import Head from "next/head";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import MainNav from "../components/Navigation/MainNav";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import HelpCardGrid from "../components/Helper/HelpCardGrid";
import { useState } from "react";
import Service from "../models/service";
import connectMongo from "../utils/connectMongo";
import User from "../models/user";
const links = ["Moving", "Lawn", "Plumbing", "Carpenter"];

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
];

export async function getStaticProps() {
  console.log("Connecting to DB");
  await connectMongo();
  console.log("Succesfully connected DB");

  const services = await Service.find({}).select('-image').populate({
    path: "user",
    model: User,
  }).limit(4).exec();

  return {
    props: {
      postings: JSON.parse(JSON.stringify(services)),
    },
  };
}

export default function Home({ postings }) {
  console.log(postings);

  return (
    <div>
      <Head>
        <title>GlassTree | Find Helper Near You</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainNav />

      <Paper
        sx={{
          position: "relative",
        }}
        style={{
          paddingLeft: 200,
          paddingRight: 200,
          width: 1400,
          marginTop: 50,
        }}
        color="primary"
        elevation={0}
      >
        <Typography
          component="h1"
          variant="h1"
          color="inherit"
          gutterBottom
          sx={{ fontFamily: "rockwell", fontWeight: 700 }}
        >
          Find the happy helper near you
        </Typography>
      </Paper>

      <Paper
        sx={{
          borderColor: "primary",
          width: 750,
          border: 1,
          borderRadius: 0,
          display: "flex",
        }}
        component={"form"}
        style={{
          marginLeft: 200,
        }}
        elevation={0}
      >
        <IconButton disabled>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Try "paint my fence"'
          inputProps={{ "aria-label": "search google maps" }}
        />
        <Button
          variant="contained"
          sx={{
            border: 1,
            borderLeft: 0,
            borderRadius: 0,
            width: 110,
            fontFamily: "rockwell",
            fontWeight: 500,
            letterSpacing: 1,
          }}
          color="secondary"
          href="/search"
        >
          Search
        </Button>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          display: "flex",
        }}
        style={{
          marginLeft: 200,
        }}
      >
        <Toolbar
          component={"nav"}
          variant="dense"
          sx={{ justifyContent: "space-between", overflow: "auto" }}
          style={{ paddingLeft: 0 }}
        >
          <Typography sx={{ fontFamily: "rockwell", fontWeight: 700 }}>
            Popular:
          </Typography>

          {links.map((link) => (
            <Button
              color="primary"
              variant="outlined"
              key={link}
              sx={{
                marginRight: 2,
                marginLeft: 2,
                fontFamily: "rockwell",
                fontWeight: 750,
                fontSize: 12,
                borderRadius: 5,
                paddingLeft: 0.8,
                paddingRight: 0.8,
                minWidth: 80,
                border: 2,
              }}
            >
              {link}
            </Button>
          ))}
        </Toolbar>
      </Paper>

      <Paper
        elevation={0}
        style={{
          marginLeft: 200,
          marginTop: 70,
          marginBottom: 200,
        }}
      >
        <Typography
          sx={{ fontFamily: "rockwell", fontWeight: 700 }}
          variant="h4"
        >
          Popular Professional services
        </Typography>

        {/* <Paper
          elevation={0}
          sx={{
            display: "flex",
            
          }}
          style={{marginTop:30}}
        >
          {links.map((link) => (
            <Box
              key={link}
              sx={{
                border:4,
                width: 250,
                height: 300,
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                marginRight:1
              }}
            ></Box>
          ))}
        </Paper> */}

        <HelpCardGrid marginTop={5} postings={postings} />
      </Paper>
    </div>
  );
}
