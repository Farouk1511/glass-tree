import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteModal from "../DeleteModal";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firbase/utilities";

const PostCard = ({ post, type, isOwner, isFavorite, handleFavorite }) => {
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
    <Grid lg={3} item>
      {console.log(post)}
      <Card
        sx={{ maxWidth: 350, marginBottom: 5, height: "auto", minHeight: 400 }}
        elevation={6}
      >
        <CardActionArea href={`/posting/${type}/${post._id}`}>
          <CardMedia
            component={"img"}
            alt="image"
            height={"150"}
            sx={{}}
            image={`http://localhost:3000/api/${type}/image/${post._id}`}
          />
        </CardActionArea>
        <CardContent>
          <Typography
            id="postTitle"
            gutterBottom
            variant="h7"
            component="span"
            sx={{ fontFamily: "rockwell", fontWeight: 700 }}
            inputprops={{
              "data-testid": "post-card-title",
            }}
          >
            {post.title}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            margin: 0,
            paddingTop: 0,
            paddingBottom: 0,
            height: 100,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Typography
            id="postDescription"
            variant="body2"
            inputprops={{
              "data-testid": "post-card-description",
            }}
          >
            {post.description}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Rating
              id="postAverageRating"
              readOnly
              max={1}
              defaultValue={post.user?.averageRating || 5}
              inputprops={{
                "data-testid": "post-card-averageRating",
              }}
              sx={{
                color: "secondary.main",
              }}
            />

            <Typography
              id="postTotalRatings"
              sx={{
                display: "inline-block",
                fontFamily: "rockwell",
                fontWeight: 700,
              }}
              variant="caption"
              inputprops={{
                "data-testid": "post-card-totalRatings",
              }}
            >
              {post.user?.totalRatings}K
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
          {/* {post.user?<Avatar  src={`/api/user/image/${post.user?._id}`} />:<Avatar />} */}
            <Avatar/>
            <Typography
              id="postName"
              gutterBottom
              variant="body2"
              component="div"
              sx={{
                fontFamily: "rockwell",
                margin: 0,
                marginLeft: 1,
                fontWeight: 700,
              }}
              inputprops={{
                "data-testid": "post-card-name",
              }}
            >
              {post.user?.name}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding:2,
            margin:0
          }}
        >
          <Box
            sx={{
              paddingBottom: 0,
            }}
          >
            {!isOwner && (
              <Tooltip title={"Save me for later"}>
                <IconButton
                  onClick={() => {
                    handleFavorite(post, !isFavorite);
                  }}
                >
                  {/* {console.log(favorite)} */}
                  {!isFavorite && <FavoriteBorderIcon />}
                  {isFavorite && <FavoriteOutlinedIcon />}
                </IconButton>
              </Tooltip>
            )}
            {isOwner && (
              <>
                <IconButton onClick={handleClickOpen}>
                  <DeleteOutlineIcon />
                </IconButton>
                <IconButton onClick={handleEdit}>
                  <EditIcon />
                </IconButton>
              </>
            )}
            <Tooltip title={"Message me"}>
              <IconButton
                href={`/chat/${user?.uid}/${post.user?.uid}`}
              >
                <ChatBubbleOutlineIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
             
            }}
          >
            <Typography sx={{ fontFamily: "rockwell" }}>Starting at</Typography>
            <Typography
              id="postHourlyRate"
              sx={{ fontFamily: "rockwell", fontWeight: 700 }}
              inputprops={{
                "data-testid": "post-card-hourlyRate",
              }}
            >
              CA${post.ratePerHour || post.pay}/hr
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <DeleteModal
        handleClose={handleClose}
        open={open}
        handleDelete={handleDelete}
      />
    </Grid>
  );
};

// PostCard.propTypes = {
//   post: PropTypes.objectOf(PostShape).isRequired,
// };

// PostCard.defaultProps = {
//   post: {
//     _id: "dsjhdksdjs",
//     name: "John Doe",
//     description:
//       "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
//     title: "job/help title",
//     averageRating: 4.5,
//     totalRatings: 50,
//     ratePerHour: 40,
//   },
// };

export default PostCard;
