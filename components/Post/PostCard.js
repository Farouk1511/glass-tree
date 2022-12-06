import React, { useState } from "react";
import { Card, CardContent, Divider, Grid, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import DeleteModal from "../DeleteModal";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firbase/utilities";
import PostImageCard from "./PostImageCard";
import PostCardTitle from "./PostCardTitle";
import PostCardDescription from "./PostCardDescription";
import PostCardRatings from "./PostRatings";
import PostCardUserProfile from "./PostCardUserProfile";
import PostCardIcon from "./PostCardIcons";
import PostCardPrice from "./PostCardPrice";


// investigate: the favorite button can be interactive with having a use Effect inside post card causing a render

const PostCard = ({ post, type,  isFavorite, handleFavorite }) => {
  const [open, setOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = async () => {
    try {
      await fetch(`/api/${type}/delete/${post._id}`, {
        method: "DELETE",
      });
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async () => {
    router.push(`http://localhost:3000/posting/${type}/edit/${post._id}`);
  };

  return (
    <Grid2
      sm={1}
      md={2}
      lg={3}
      xl={3}
      sx={{
        marginBottom: 5,
        height: "auto",
        marginRight:1,
        minWidth: 300,
        maxWidth: 400,
        border:1,
        borderColor:'#3D3D3D'
      //  bgcolor:'red'
      }}
    >
     
        <PostImageCard id={post._id} altTitle={post.title} type={type} />
        <PostCardTitle title={post.title} />
        <PostCardDescription description={post.description} />

        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <PostCardRatings
            averageRating={post.user?.averageRating || 5}
            totalRatings={post.user?.totalRatings}
          />
          <PostCardUserProfile name={post.user?.name} />
        </CardContent>
        <Divider />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 2,
            margin: 0,
          }}
        >
          <PostCardIcon
            isOwner={post.user?.uid === user?.uid}
            handleFavorite={handleFavorite}
            isFavorite={isFavorite}
            handleClickOpen={handleClickOpen}
            handleEdit={handleEdit}
            userUID={user?.uid}
            postUID={post.user?.uid}
            post={post}
          />
          <PostCardPrice
            currency={"USD"}
            price={post.ratePerHour || post.pay}
          />
        </CardContent>
        {/* <Card
        sx={{ maxWidth: 350, marginBottom: 5, height: "auto", minHeight: 400 }}
        elevation={6}
      >
       
      </Card> */}
        <DeleteModal
          handleClose={handleClose}
          open={open}
          handleDelete={handleDelete}
        />
     

      {/* {console.log(post)} */}
    </Grid2>
  );
};

export default PostCard;
