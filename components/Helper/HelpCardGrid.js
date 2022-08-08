import { Grid, Paper } from "@mui/material";
import React from "react";
import HelpCard from "./HelpCard";
import PropTypes from "prop-types";
import HelperShape from "./Utils";

const HelpCardGrid = ({ helperList,marginTop,marginLeft,marginRight }) => {
  return (
    <Paper elevation={0}  sx={{ marginLeft: marginLeft , marginRight: marginRight, marginTop: marginTop }}>
      <Grid container>
        {helperList.map((helper) => (
          <HelpCard key={helper.uid} />
        ))}
      </Grid>
    </Paper>
  );
};

HelpCardGrid.propTypes = {
  helperList: PropTypes.arrayOf(PropTypes.objectOf(HelperShape)).isRequired,
  marginLeft:PropTypes.number,
  marginRight:PropTypes.number,
  marginTop:PropTypes.number
};

HelpCardGrid.defaultProps = {
  helperList: [
    {
      uid: "dsjhdksdjs",
      name: "John Doe",
      helperDescription:
        "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
      title: "job/help title",
      averageRating: 4.5,
      totalRatings: 50,
      ratePerHour: 40,
    },
    {
      uid: "dsjhfdksdjs",
      name: "John Doe",
      helperDescription:
        "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
      title: "job/help title",
      averageRating: 4.5,
      totalRatings: 50,
      ratePerHour: 40,
    },
    {
      uid: "dsjhdsksdjs",
      name: "John Doe",
      helperDescription:
        "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
      title: "job/help title",
      averageRating: 4.5,
      totalRatings: 50,
      ratePerHour: 40,
    },
    {
      uid: "dsr4jhdksdjs",
      name: "John Doe",
      helperDescription:
        "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
      title: "job/help title",
      averageRating: 4.5,
      totalRatings: 50,
      ratePerHour: 40,
    },
  ],
};

export default HelpCardGrid;
