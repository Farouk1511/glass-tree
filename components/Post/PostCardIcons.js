import { Box,IconButton, Tooltip } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import EditIcon from "@mui/icons-material/Edit";
const PostCardIcon = ({isOwner,handleFavorite,isFavorite,handleClickOpen,handleEdit,userUID,postUID,post}) => {

    return (
        <Box
        sx={{
          paddingBottom: 0,
        }}
      >
        {!isOwner && (
          <>
          <Tooltip title={"Save me for later"}>
            <IconButton
              onClick={() => {
                handleFavorite(post, !isFavorite);
              }}
            >
              {/* {console.log(favorite)} */}
              {!isFavorite && <FavoriteBorderIcon />}
              {isFavorite && <FavoriteOutlinedIcon />}
            </IconButton>
          </Tooltip>
        <Tooltip title={"Message me"}>
          <IconButton href={`/#`}>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </Tooltip>
          </>
        )}
        {isOwner && (
          <>
            <IconButton onClick={handleClickOpen}>
              <DeleteOutlineIcon />
            </IconButton>
            <IconButton onClick={handleEdit}>
              <EditIcon />
            </IconButton>
          </>
        )}
      </Box>
    )
}

export default PostCardIcon