import { Typography, Box } from "@mui/material";
import React from "react";

const Section = ({ title, list }) => {
  return (
    <Box>
      <Typography
        sx={{ marginBottom: 3, color: "primary.main", fontWeight: "700" }}
      >
        {title}
      </Typography>

      {list.map((link) => (
        <Typography
          key={link}
          sx={{ marginBottom: 2, color: "#74767e", fontWeight: "600" }}
        >
          {link}
        </Typography>
      ))}
    </Box>
  );
};

export default Section;
