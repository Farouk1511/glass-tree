import { CardContent, Typography } from "@mui/material";
import React from "react";

const PostCardTitle = ({title}) => {

    return(
        <CardContent>
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
          {title}
        </Typography>
      </CardContent>
    )
}

export default PostCardTitle