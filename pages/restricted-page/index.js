import { Paper, Typography } from "@mui/material";
import React from "react";
import Categories from "../../components/Navigation/Categories";
import NavBar from "../../components/Navigation/NavBar";

const RestrictedPage = () => {
  return (
    <>
      <NavBar />
      <Categories />
      <Paper elevation={0}>
        <Typography>Restricted Page</Typography>
      </Paper>
    </>
  );
};

export default RestrictedPage;
