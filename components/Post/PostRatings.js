import { Box, Rating, Typography } from "@mui/material";
import React from "react";

const PostCardRatings = ({ averageRating, totalRatings }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: "flex" }}>
        <Typography
          id="postTitle"
          gutterBottom
          variant="h7"
          component="span"
          sx={{ fontFamily: "rockwell", fontWeight: 700,color:'#74767e' }}
          
        >
          {averageRating}
        </Typography>
        <Rating
          id="postAverageRating"
          readOnly
          max={1}
          defaultValue={averageRating}
          inputprops={{
            "data-testid": "post-card-averageRating",
          }}
          sx={{
            color: "#74767e",
          }}
          size={'small'}
        />
      </Box>

      {/* <Typography
        id="postTotalRatings"
        sx={{
          display: "inline-block",
          fontFamily: "rockwell",
          fontWeight: 700,
          fontSize:10,

        }}
        variant="caption"
        inputprops={{
          "data-testid": "post-card-totalRatings",
        }}
      >
        {totalRatings}K
      </Typography> */}
    </Box>
  );
};

export default PostCardRatings;
