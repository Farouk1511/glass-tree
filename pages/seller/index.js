import React from "react";
import NavBar from "../../components/Navigation/NavBar";
import Categories from "../../components/Navigation/Categories";
import PostDetails from "../../components/Helper/HelperProfile";

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

const Seller = () => {
  return (
    <>
   <NavBar/>

      {/* Categories */}
      <Categories sections={sections}/>

      <PostDetails />
     
    </>
  );
};

export default Seller;
