import { Box, Rating, Typography } from "@mui/material";
import React from "react";


const PostCardRatings = ({averageRating,totalRatings}) =>{
    return (
        <Box>
        <Rating
          id="postAverageRating"
          readOnly
          max={1}
          defaultValue={averageRating }
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
          {totalRatings}K
        </Typography>
      </Box>
    )
}

export default PostCardRatings