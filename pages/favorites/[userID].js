import { CircularProgress, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import PostCardGrid from "../../components/Post/PostCardGrid";
import Categories from "../../components/Navigation/Categories";
import NavBar from "../../components/Navigation/NavBar";
import Tab from "../../components/Tabs/Tab";
import Footer from "../../components/Footer/Footer";
import User from "../../models/user";
import Job from "../../models/job";
import connectMongo from "../../utils/connectMongo";
import Service from "../../models/service";
import { getCookie } from "cookies-next";
import { firebaseAdmin } from "../../firbase/firebaseAdmin";

export async function getServerSideProps(context) {
  try {
    await connectMongo();
    const { userID } = context.query;
    const { req, res } = context;

    const token = getCookie("token", { req, res });
    // console.log(token)
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
   
    const { uid } = decodedToken;

    if (uid !== userID) {
      return {
        redirect: {
          permanent: false,
          destination: "/restricted-page",
        },
      };
    }

    let results = await User.findOne(
      { uid: userID },
      { favoriteJob: true, favoriteService: true }
    ).select("favoriteJob,favoriteService");
    const { favoriteJob, favoriteService } = results;
    // console.log(result);
    let favJobIDs = Array.from(results.favoriteJob.keys());
    const favJobs = favJobIDs.filter((id) => favoriteJob.get(id));

    const favoriteJobs = await Job.find({ _id: { $in: favJobs } })
      .select("-image")
      .populate({ path: "user", model: User, select: "-image" });

    const favServiceIDs = Array.from(results.favoriteService.keys());
    const favServices = favServiceIDs.filter((id) => favoriteService.get(id));
    //   console.log(favIDs)
    const favoriteServices = await Service.find({
      _id: { $in: favServices },
    })
      .select("-image")
      .populate({ path: "user", model: User, select: "-image" });

    return {
      // props: {
      //   jobs: [],
      //   services: [],
      // },
      props: {
        jobs: JSON.parse(JSON.stringify(favoriteJobs)),
        services: JSON.parse(JSON.stringify(favoriteServices)),
      },
    };
  } catch (err) {
    console.log(err.message);
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
}

const Favorites = ({ jobs, services }) => {
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
  if (loading) return <></>;

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
          Favorite Postings
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
            isOwner={false}
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

      <Footer />
    </>
  );
};

export default Favorites;
