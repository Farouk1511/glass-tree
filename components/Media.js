import { Card, CardActionArea, CardContent } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ImageUploading from "react-images-uploading";
import Image from "next/image";

const Media = ({onChange,image}) => {
  

  return (
    <ImageUploading
      value={image}
      onChange={onChange}
      dataURLKey="data_url"
      acceptType={["png"]}
    >
      {({
        imageList,
        onImageUpload,
        onImageUpdate,
        onImageRemove,
      }) => (
        <>
            {!image && <Card
          sx={{
            marginTop: 5,
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: 2,
            height: "15vh",
          }}
          elevation={0}
        >
          <CardActionArea
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
             
            }}
            onClick={onImageUpload}
          >
          {!image && <CardContent>
              <AddIcon fontSize="large" />
            </CardContent>}
           
            
          </CardActionArea>
        </Card>}

        {image && <Image unoptimized src={image.data_url} alt=""  layout='intrinsic' width={600} height={500} onClick={onImageUpload}/> }

        
        </>
       
      )}
    </ImageUploading>
  );
};

export default Media;
