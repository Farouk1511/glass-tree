import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import HelpCardGrid from "../../components/Helper/HelpCardGrid";
import Categories from "../../components/Navigation/Categories";
import NavBar from "../../components/Navigation/NavBar";
import Tab from "../../components/Tabs/Tab";

const MyAcount = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const router = useRouter();
  // const {userID} = router.query
  // console.log(userID)
  //https://stackoverflow.com/questions/70492512/next-js-userouter-not-returning-variable-inside-useeffect
  useEffect(() => {
   
    const getPosts = async () => {
      if (!router.isReady) return;
      const { userID } = router.query;
      console.log(userID);

      const result = await fetch(
        `http://localhost:3000/api/service/by/${userID}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      setPost(await result.json());
      setLoading(false);
    };

    getPosts();
  }, [router.isReady, router.query]);
  return (
    <>
      <NavBar />
      <Categories
        sections={[
          { title: "Postings", url: "#" },
          { title: "Account", url: "#" },
          { title: "Settings", url: "#" },
          { title: "Inbox", url: "#" },
        ]}
      />

      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
          marginTop: 5,
          width: "100%",
          overflowY: "hidden",
        }}
        elevation={0}
      >
        <Typography sx={{ fontSize: 40, fontFamily: "rockwell" }}>
          Manage Postings
        </Typography>
        <Tab />
      {loading && (
        <CircularProgress
          sx={{
            marginTop: 5,
           
          }}
        />
      )}
      </Paper>

      {!loading && (
        
        <HelpCardGrid
          postings={post}
          marginLeft={20}
          marginRight={20}
          marginTop={5}
        />
      )}

      {post.length < 1 && <Typography sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>No Services Created</Typography>
      //to be dynamic with jobs
      } 
      
    </>
  );
};

export default MyAcount;
