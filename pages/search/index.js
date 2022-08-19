import React from "react";
import { Typography, Paper } from "@mui/material";

import HelpCardGrid from "../../components/Helper/HelpCardGrid";
import NavBar from "../../components/Navigation/NavBar";
import Categories from "../../components/Navigation/Categories";
import Service from "../../models/service";
import connectMongo from "../../utils/connectMongo";
import User from "../../models/user";

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

export async function getStaticProps() {
  
    console.log("Connecting to DB");
    await connectMongo();
    console.log("Succesfully connected DB");

    const services = await Service.find({})
      .populate({
        path: "user",
        model: User,
      })

      // console.log(services)
    return {
      props: {
        postings: JSON.parse(JSON.stringify(services)),
      },
    };
  
}

//Start changing all lists to posting instead of helperService or jobListing for componets
const SearchPage = ({ postings }) => {
  return (
    <>
      {/* Nav */}
      <NavBar />

      {/* Categories */}
      <Categories sections={sections} />

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

      <HelpCardGrid marginLeft={20} marginRight={20} marginTop={5} postings={postings} />
    </>
  );
};

export default SearchPage;
