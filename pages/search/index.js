import React from "react";
import { Typography, Paper } from "@mui/material";
import NavBar from "../../components/Navigation/NavBar";
import Categories from "../../components/Navigation/Categories";
import Service from "../../models/service";
import connectMongo from "../../utils/connectMongo";
import User from "../../models/user";
import PostCardGrid from "../../components/Helper/PostCardGrid";

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
  
    
    await connectMongo();
    

    const services = await Service.find({}).select('-image')
      .populate({
        path: "user",
        model: User,
        select:'-image'
      })

      // console.log(services)
    return {
      props: {
        postings: JSON.parse(JSON.stringify(services)).reverse(),
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

      <PostCardGrid marginLeft={20} marginRight={20} marginTop={5} postings={postings} type={'service'}/>
    </>
  );
};

export default SearchPage;
