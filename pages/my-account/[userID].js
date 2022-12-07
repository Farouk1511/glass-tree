import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PostCardGrid from "../../components/Post/PostCardGrid";
import Categories from "../../components/Navigation/Categories";
import NavBar from "../../components/Navigation/NavBar";
import Tab from "../../components/Tabs/Tab";
import { getToken } from "../../firbase/utilities";
import User from "../../models/user";
import Job from "../../models/job";
import connectMongo from "../../utils/connectMongo";
import Service from "../../models/service";

export async function getServerSideProps(context) {
  try {
    await connectMongo();
    const { userID } = context.query;
    const user = await User.findOne({ uid: userID }).select("_id");
    const user_objID = user._id;

    const jobs = await Job.find({ user: user_objID })
      .select("-image")
      .populate({
        path: "user",
        model: User,
        select: "_id uid name email username averageRating totalRating",
      });
    const services = await Service.find({ user: user_objID })
      .select("-image")
      .populate({
        path: "user",
        model: User,
        select: "_id uid name email username averageRating totalRating",
      });
    return {
      props: {
        jobs: JSON.parse(JSON.stringify(jobs)),
        services: JSON.parse(JSON.stringify(services)),
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        jobs: [],
        services: [],
      },
    };
  }
}

const MyAcount = ({ jobs, services }) => {
  const [posts, setPosts] = useState({
    job: jobs,
    service: services,
  });
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(services);
  const [type, setType] = useState("service");

  const onTabChange = (tab) => {
    setPost(posts[tab]);
    setType(tab);
  };

  //https://stackoverflow.com/questions/70492512/next-js-userouter-not-returning-variable-inside-useeffect

  // !imporatant : https://stackoverflow.com/questions/60755316/nextjs-getserversideprops-show-loading/60756105#60756105

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
          My Postings
        </Typography>

        <Tab onTabChange={onTabChange} />

        {loading && (
          <CircularProgress
            sx={{
              marginTop: 5,
            }}
          />
        )}
      </Paper>

      <Paper
        sx={{
          padding: 15,
          paddingTop: 2,
        }}
        elevation={0}
      >
        {!loading && (
          <PostCardGrid
            postings={post}
            marginLeft={20}
            marginRight={20}
            marginTop={5}
            type={type}
            isOwner={true}
          />
        )}

        {
          post.length < 1 && (
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {` No ${type === "service" ? "Service" : "Jobs"} Liked`}
            </Typography>
          )
          //to be dynamic with jobs
        }
      </Paper>
    </>
  );
};

export default MyAcount;
