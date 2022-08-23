import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HelpCardGrid from "../../components/Helper/HelpCardGrid";
import Categories from "../../components/Navigation/Categories";
import NavBar from "../../components/Navigation/NavBar";
import Tab from "../../components/Tabs/Tab";

const MyAcount = () => {
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    setTimeout(()=>setLoading(false),1000)
  },[])
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
          justifyContent: "center",
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
        <Box
          sx={{
            color: "#000",
            overflowY: "hidden",
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: 5,
          }}
        >
          {loading && <CircularProgress />}
         {!loading && <HelpCardGrid />}
        </Box>
      </Paper>
    </>
  );
};

export default MyAcount;
