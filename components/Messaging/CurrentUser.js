import { Avatar, Badge, Box, Paper, Typography } from "@mui/material";
import React from "react";
const CurrentUser = ({otherUser}) => {
    return (
        <Paper
        elevation={0}
        sx={{
          padding: 1,
          marginBottom: 2,
          borderBottom: 1,
          borderRadius: 0,
          borderColor: "#e0e0e0",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          elevation={0}
        >
          <Badge color="secondary" badgeContent=" " variant="dot">
            <Avatar />
          </Badge>
          <Box sx={{ marginLeft: 2 }}>
            <Typography variant="body2" fontWeight={"700"}>
              {otherUser}
            </Typography>
            <Typography variant="body2" fontWeight={"200"}>
              Last seen 12/10/2022
            </Typography>
          </Box>
        </Paper>
      </Paper>
    )
}

export default CurrentUser