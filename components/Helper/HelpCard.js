import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import PostShape from "./Utils";

const HelpCard = ({ post }) => {
  
  return (
    <Grid lg={3} item>
      <Card sx={{ maxWidth: 350, marginBottom: 5 }} elevation={1}>
        <CardActionArea href={`/seller/${post._id}`}>
          <CardMedia
            component={"img"}
            alt="image"
            height={"150"}
            image="https://picsum.photos/400/150"
          />
        </CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "rockwell", margin: 0 }}
          >
            {post.name}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="span"
            sx={{ fontFamily: "rockwell", fontWeight: 200 }}
          >
            {post.title}
          </Typography>
        </CardContent>
        <CardContent sx={{ margin: 0, paddingTop: 0 }}>
          <Typography variant="body2">{post.description}</Typography>
        </CardContent>
        <CardContent>
          <Rating
            readOnly
            max={5}
            defaultValue={post.user?.averageRating || 5}
          />

          <Typography
            sx={{
              display: "inline-block",
              fontFamily: "rockwell",
              fontWeight: 700,
            }}
            variant="caption"
          >
            {post.user?.totalRatings}K
          </Typography>
        </CardContent>
        <Divider />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingBottom: 0,
          }}
        >
          <Typography sx={{ fontFamily: "rockwell" }}>Starting at</Typography>
          <Typography sx={{ fontFamily: "rockwell", fontWeight: 700 }}>
            CA${post.user?.ratePerHour}/hr
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

HelpCard.propTypes = {
  post: PropTypes.objectOf(PostShape).isRequired,
};

// HelpCard.defaultProps = {
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

export default HelpCard;
