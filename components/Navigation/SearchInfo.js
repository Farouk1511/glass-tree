import { Paper, Typography } from "@mui/material";
import React from "react";

const SearchInfo = ({query,posts}) => {
  return (
    <Paper elevation={0} sx={{ marginLeft: 25, marginTop: 5 }}>
      {query && (
        <Typography variant="h4" sx={{ fontFamily: "rockwell" }}>
          {`Results for "${query}"`}
        </Typography>
      )}
      {query && (
        <Typography
          variant="body2"
          sx={{ fontFamily: "rockwell", fontWeight: 700 }}
        >
          {`${posts.length} services available`}
        </Typography>
      )}
    </Paper>
  );
};

export default SearchInfo;
