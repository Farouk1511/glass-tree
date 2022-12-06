import { CircularProgress, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PostCardGrid from "../../components/Post/PostCardGrid";
import Categories from "../../components/Navigation/Categories";
import NavBar from "../../components/Navigation/NavBar";
import Tab from "../../components/Tabs/Tab";
import Footer from "../../components/Footer/Footer";
import { getToken } from "../../firbase/utilities";
import Error from "../../components/Error/Error";


const Favorites = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const [type, setType] = useState("service");
  const [error,setError] = useState("")
  const router = useRouter();

  const onTabChange = (tab) => {
    setType(tab);
    // console.log(tab);

    // console.log("Hello");
  };
  // const {userID} = router.query
  // console.log(userID)
  //https://stackoverflow.com/questions/70492512/next-js-userouter-not-returning-variable-inside-useeffect
  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      if (!router.isReady) return;
      const { userID } = router.query;
      // console.log(userID);
      // const token = await JSON.parse(localStorage.getItem('user')).getIdToken(true)
      const token = getToken();

      let result = await fetch(
        `http://localhost:3000/api/user/${userID}/${type}/favorite`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      result = await result.json();

      if (result.err) {
          
        setError(result.err)
        setLoading(false);
        
      } else {
        setPost(result);
        // console.log(result)
        setLoading(false);
      }
    };

    getPosts();
  }, [router, router.query, type]);

  if(loading) return <></>
  if(error) return (<>
    <Error message={error}/>
    <NavBar/>
    <Categories
        sections={[
          { title: "Postings", url: "#" },
          { title: "Account", url: "#" },
          { title: "Settings", url: "#" },
          { title: "Inbox", url: "#" },
        ]}
      />

  </>)
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
