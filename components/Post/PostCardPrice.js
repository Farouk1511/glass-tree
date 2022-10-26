import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PostCardPrice = ({ price, currency }) => {
  return (
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
        {currency} {price}/hr
      </Typography>
    </Box>
  );
};

export default PostCardPrice;
