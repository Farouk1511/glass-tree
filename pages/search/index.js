import React, { useEffect, useState } from "react";
import { Typography, Paper, CircularProgress, Container } from "@mui/material";
import NavBar from "../../components/Navigation/NavBar";
import Categories from "../../components/Navigation/Categories";
import Service from "../../models/service";
import connectMongo from "../../utils/connectMongo";
import User from "../../models/user";
import PostCardGrid from "../../components/Post/PostCardGrid";
import { useRouter } from "next/router";
import Header from "../../components/Navigation/Header";
import SearchInfo from "../../components/Navigation/SearchInfo";

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

  // Get user details

  // get fav services
  //chechk if value is true
  // add new value to service object service.isFav = true

  const services = await Service.find({}).select("-image").populate({
    path: "user",
    model: User,
    select: "-image",
  });

  // console.log(services)
  return {
    props: {
      postings: JSON.parse(JSON.stringify(services)).reverse(),
    },
  };
}

//Start changing all lists to posting instead of helperService or jobListing for componets
const SearchPage = ({ postings }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(postings);
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    const filteredPost = filter(postings, query);

    setPosts(filteredPost);
    setQuery(query);
  };

  const filter = (arr, query) => {
    const filteredPost = arr.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );

    return filteredPost;
  };

  useEffect(() => {
    if (!router.isReady) return;

    const { searchQuery } = router.query;

    if (!searchQuery) {
      setLoading(false);
      return;
    }
    // console.log(searchQuery);
    const filteredPost = filter(postings, searchQuery);

    setPosts(filteredPost);
    setLoading(false);
  }, [router, query, postings]);

  return (
    <Paper elevation={0}>
      <Header handleSearch={handleSearch} sections={sections} />

      {loading && (
        <Container
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Container>
      )}

      {!loading && (
        <>
          <SearchInfo query={query} posts={posts} />

          <PostCardGrid postings={posts} type={"service"} />
        </>
      )}
    </Paper>
    // <>
    //   <Header handleSearch={handleSearch} sections={sections} />

    // {loading && (
    //   <Container
    //     sx={{
    //       display: "flex",
    //       flex: 1,
    //       alignItems: "center",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <CircularProgress />
    //   </Container>
    // )}

    // {!loading && (
    //   <>
    //     {/* Categories */}
    //     <Paper elevation={0} sx={{ marginLeft: 25, marginTop: 5 }}>
    //       {query && (
    //         <Typography variant="h4" sx={{ fontFamily: "rockwell" }}>
    //           {`Results for "${query}"`}
    //         </Typography>
    //       )}
    //       {query && (
    //         <Typography
    //           variant="body2"
    //           sx={{ fontFamily: "rockwell", marginTop: 5, fontWeight: 700 }}
    //         >
    //           {`${posts.length} services available`}
    //         </Typography>
    //       )}
    //     </Paper>

    //     <PostCardGrid
    //       marginLeft={20}
    //       marginRight={20}
    //       marginTop={5}
    //       postings={posts}
    //       type={"service"}
    //     />
    //   </>
    // )}
    // </>
  );
};

export default SearchPage;
