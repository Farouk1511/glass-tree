import { Avatar, Typography,Box } from "@mui/material";

import React from "react";

const PostCardUserProfile = ({name}) =>{

    return(
        <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar />
            <Typography
              id="postName"
              gutterBottom
              variant="body2"
              component="div"
              sx={{
                fontFamily: "rockwell",
                margin: 0,
                marginLeft: 1,
                fontWeight: 700,
              }}
              inputprops={{
                "data-testid": "post-card-name",
              }}
            >
              {name}
            </Typography>
          </Box>
    )
}

export default PostCardUserProfile