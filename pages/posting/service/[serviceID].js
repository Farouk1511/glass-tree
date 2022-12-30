import React from "react";
import NavBar from "../../../components/Navigation/NavBar";
import Categories from "../../../components/Navigation/Categories";
import Service from "../../../models/service";
import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/user";
import PostDetails from "../../../components/Post/PostDetails";
import { jsonEval } from "@firebase/util";
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

export async function getServerSideProps(context){

  //i want to try adding the usersUID in the body when sending post request
    const { serviceID } = context.params;

    const post = await Service.findById(serviceID)
    .select("_id user title description ratePerHour comments")
    .populate({
      path: "user",
      model: User,
      select: "_id uid name email username averageRating totalRating",
    });

    // console.log(post)

  return {
    props:{
      post:JSON.parse(JSON.stringify(post))
    }
  }
}

// export async function getStaticPaths() {
//   //https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
//   await connectMongo();

//   const services = await Service.find({}).select("_id");

//   //   console.log(services)

//   let ids = JSON.parse(JSON.stringify(services));
//   ids = ids.map((service) => ({ params: { serviceID: service._id } }));
//   //   console.log(ids)
//   return {
//     paths: ids,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const { params } = context;
//   await connectMongo();
//   // console.log("Params",params)

//   const post = await Service.findById(params.serviceID)
//     .select("_id user title description ratePerHour")
//     .populate({
//       path: "user",
//       model: User,
//       select: "_id uid name email username averageRating totalRating",
//     });

//   // console.log(post)

//   return {
//     props: {
//       post: JSON.parse(JSON.stringify(post)),
//     },
//   };
// }

const Post = ({ post }) => {
  return (
    <>
      <NavBar />

      {/* Categories */}
      <Categories sections={sections} />

      <PostDetails post={post} type={"service"} />
    </>
  );
};

export default Post;
