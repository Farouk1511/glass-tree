import { Box, CardActionArea, CardMedia } from "@mui/material";
import Image from "next/image";
import React from "react";

const PostImageCard = ({id,type,altTitle}) =>{

    return (
        <CardActionArea
        href={`/posting/${type}/${id}`}
        sx={{ height: 150 }}
      >
        <CardMedia>
          <Image
            alt={`${altTitle}`}
            src={`http://localhost:3000/api/${type}/image/${id}`}
            layout="fill"
            objectFit="cover" // or objectFit="cover"
          />
        </CardMedia>
      </CardActionArea>
    )
}

export default PostImageCard