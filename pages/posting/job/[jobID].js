import React from "react";
import NavBar from "../../../components/Navigation/NavBar";
import Categories from "../../../components/Navigation/Categories";
import Job from "../../../models/job";
import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/user";
import PostDetails from "../../../components/Post/PostDetails";
import Footer from "../../../components/Footer/Footer";

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

export async function getStaticPaths() {
  console.log("Connecting to DB");
  await connectMongo();
  console.log("Succesfully connected DB");

  const jobs = await Job.find({})
    .populate({
      path: "user",
      model: User,
    })
    .select("-image")
    .exec();

  //   console.log(jobs)

  let ids = JSON.parse(JSON.stringify(jobs));
  ids = ids.map((job) => ({ params: { jobID: job._id } }));
  //   console.log(ids)
  return {
    paths: ids,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  console.log("Connecting to DB");
  await connectMongo();
  console.log("Succesfully connected DB");

  // console.log("Params",params)

  const post = await Job.findById(params.jobID)
    .select("-image")
    .populate({
      path: "user",
      model: User,
    })
    .exec();
  // console.log(post,"here");

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
}

const Post = ({ post }) => {
  return (
    <>
      <NavBar />

      {/* Categories */}
      <Categories sections={sections} />

      <PostDetails post={post} type={"job"} />

      <Footer/>
    </>
  );
};

export default Post;
