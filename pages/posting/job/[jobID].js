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
 
  await connectMongo();
 
  const jobs = await Job.find({}).select("_id")

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

  await connectMongo();
  const post = await Job.findById(params.jobID)
    .select("-image")
    .populate({
      path: "user",
      model: User,
      select:"_id uid name email username averageRating totalRating"
    })
 

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
