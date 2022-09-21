import { Grid, Paper } from "@mui/material";
import React from "react";
import PostCard from "./PostCard";
import PropTypes from "prop-types";
import PostShape from "./PostShape";

const PostCardGrid = ({ postings, marginTop, marginLeft, marginRight,type }) => {

  // console.log(postings)
  return (
    <Paper
      elevation={0}
      sx={{
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
      }}
    >
      <Grid container>
        {postings.map((post) => {
          {/* console.log(post) */}
         return <PostCard key={post._id} post={post} type={type}/>
        })}
      </Grid>
    </Paper>
  );
};

PostCardGrid.propTypes = {
  postings: PropTypes.arrayOf(PropTypes.objectOf(PostShape)).isRequired,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
};

PostCardGrid.defaultProps = {
  postings: [
    {
      _id: "dsjhdksdjs",
      name: "John Doe",
      description:
        "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
      title: "job/help title",
      averageRating: 4.5,
      totalRatings: 50,
      ratePerHour: 40,
    },
    {
      _id: "dsjhdksdjs",
      name: "John Doe",
      description:
        "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
      title: "job/help title",
      averageRating: 4.5,
      totalRatings: 50,
      ratePerHour: 40,
    },
    {
      _id: "dsjhdksdjs",
      name: "John Doe",
      description:
        "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
      title: "job/help title",
      averageRating: 4.5,
      totalRatings: 50,
      ratePerHour: 40,
    },
    {
      _id: "dsjhdksdjs",
      name: "John Doe",
      description:
        "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
      title: "job/help title",
      averageRating: 4.5,
      totalRatings: 50,
      ratePerHour: 40,
    },
    {
      _id: "dsjhdksdjs",
      name: "John Doe",
      description:
        "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
      title: "job/help title",
      averageRating: 4.5,
      totalRatings: 50,
      ratePerHour: 40,
    },
    {
      _id: "dsjhdksdjs",
      name: "John Doe",
      description:
        "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
      title: "job/help title",
      averageRating: 4.5,
      totalRatings: 50,
      ratePerHour: 40,
    },
    {
      _id: "dsjhdksdjs",
      name: "John Doe",
      description:
        "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
      title: "job/help title",
      averageRating: 4.5,
      totalRatings: 50,
      ratePerHour: 40,
    },
    {
      _id: "dsjhdksdjs",
      name: "John Doe",
      description:
        "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
      title: "job/help title",
      averageRating: 4.5,
      totalRatings: 50,
      ratePerHour: 40,
    },
   
  ],
};

export default PostCardGrid;
