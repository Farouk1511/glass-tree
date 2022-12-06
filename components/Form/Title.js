import { Typography } from "@mui/material";
import React from "react";

const Title = ({ title }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        fontFamily: "rockwell",
        fontSize: 35,
        fontWeight: 600,
        marginBottom: 10,
      }}
    >
      {title}
    </Typography>
  );
};

export default Title;
