import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PostShape from "./PostShape";

const PostCard = ({ post, type }) => { 
  return (
    <Grid lg={3} item>
      <Card sx={{ maxWidth: 350, marginBottom: 5,height:450 }} elevation={3}>
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
            id="postName"
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "rockwell", margin: 0 }}
            inputprops={{
              "data-testid": "post-card-name",
            }}
          >
            {post.name}
          </Typography>
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
        <CardContent sx={{ margin: 0, paddingTop: 0,paddingBottom: 0,height:100 }}>
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
        <CardContent>
          <Rating
            id="postAverageRating"
            readOnly
            max={5}
            defaultValue={post.user?.averageRating || 5}
            inputprops={{
              "data-testid": "post-card-averageRating",
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
        </CardContent>
        <Divider />
        <CardContent  sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent:'space-between',
            padding: 0,
          }}>
        <CardContent>
        <IconButton>

            <FavoriteBorderIcon/>
        </IconButton>
       
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingBottom: 0,
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
        </CardContent>
        </CardContent>
       
      </Card>
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
