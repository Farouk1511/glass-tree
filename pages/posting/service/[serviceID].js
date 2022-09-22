import React from "react";
import NavBar from "../../../components/Navigation/NavBar";
import Categories from "../../../components/Navigation/Categories";
import Service from "../../../models/service";
import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/user";
import PostDetails from "../../../components/Helper/PostDetails";
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

  const services = await Service.find({}).populate({
    path: "user",
    model: User,
    select: "-image",
  });

  //   console.log(services)

  let ids = JSON.parse(JSON.stringify(services));
  ids = ids.map((service) => ({ params: { serviceID: service._id } }));
  //   console.log(ids)
  return {
    paths: ids,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  await connectMongo();
  // console.log("Params",params)

  const post = await Service.findById(params.serviceID)
    .populate({ path: "user", model: User, select: "-image" })
    .select("-image");
  // console.log(post)

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

      <PostDetails post={post} />
    </>
  );
};

export default Post;
