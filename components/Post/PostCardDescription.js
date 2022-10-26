import { CardContent, Typography } from "@mui/material";
import React from "react";

const PostCardDescription = ({description}) => {

    return (
        <CardContent
        sx={{
          margin: 0,
          paddingTop: 0,
          paddingBottom: 0,
          height: 100,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Typography
          id="postDescription"
          variant="body2"
          inputprops={{
            "data-testid": "post-card-description",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    )
}

export default PostCardDescription