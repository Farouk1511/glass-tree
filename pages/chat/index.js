import {
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  Paper,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import NavBar from "../../components/Navigation/NavBar";
import SendIcon from "@mui/icons-material/Send";
import Categories from "../../components/Navigation/Categories";

const Chat = () => {
  return (
    <>
      <NavBar />
      <Categories />
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
        //   backgroundColor: "#e0e0e0",
          padding: 1,
          paddingLeft: 30,
          paddingRight: 30,
         
        }}
      >
        <Paper
          sx={{
            width: "20%",
            height: "80vh",
            borderRadius: 0,
            padding: 2,
          }}
          elevation={0}
        >
          {/* side Chats */}
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 1,
              borderRadius: 0,
              borderBottom: 1,
              borderColor: "#e0e0e0",
            }}
            elevation={0}
          >
            <Badge color="secondary" badgeContent=" " variant="dot">
              <Avatar />
            </Badge>
            <Box sx={{ marginLeft: 2 }}>
              <Typography variant="body2" fontWeight={"700"}>
                Name
              </Typography>
              <Typography variant="body2" fontWeight={"200"}>
                Recent Message
              </Typography>
            </Box>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 1,
              borderRadius: 0,
              borderBottom: 1,
              borderColor: "#e0e0e0",
            }}
            elevation={0}
          >
            <Badge color="secondary" badgeContent=" " variant="dot">
              <Avatar />
            </Badge>
            <Box sx={{ marginLeft: 2 }}>
              <Typography variant="body2" fontWeight={"700"}>
                Name
              </Typography>
              <Typography variant="body2" fontWeight={"200"}>
                Recent Message
              </Typography>
            </Box>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 1,
              borderRadius: 0,
              borderBottom: 1,
              borderColor: "#e0e0e0",
            }}
            elevation={0}
          >
            <Badge color="secondary" badgeContent=" " variant="dot">
              <Avatar />
            </Badge>
            <Box sx={{ marginLeft: 2 }}>
              <Typography variant="body2" fontWeight={"700"}>
                Name
              </Typography>
              <Typography variant="body2" fontWeight={"200"}>
                Recent Message
              </Typography>
            </Box>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 1,
              borderRadius: 0,
              borderBottom: 1,
              borderColor: "#e0e0e0",
            }}
            elevation={0}
          >
            <Badge color="secondary" badgeContent=" " variant="dot">
              <Avatar />
            </Badge>
            <Box sx={{ marginLeft: 2 }}>
              <Typography variant="body2" fontWeight={"700"}>
                Name
              </Typography>
              <Typography variant="body2" fontWeight={"200"}>
                Recent Message
              </Typography>
            </Box>
          </Paper>
        </Paper>
        <Divider orientation="vertical" flexItem />

        <Paper
          sx={{ width: "70%", height: "80vh", borderRadius: 0, padding: 1 }}
          elevation={0}
        >
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
                flexDirection: "reverse",
                alignItems: "center",
              }}
              elevation={0}
            >
              <Badge color="secondary" badgeContent=" " variant="dot">
                <Avatar />
              </Badge>
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="body2" fontWeight={"700"}>
                  Name
                </Typography>
                <Typography variant="body2" fontWeight={"200"}>
                  Recent Message
                </Typography>
                <Typography variant="body2" fontWeight={"200"}>
                  Last seen 12/10/2022
                </Typography>
              </Box>
            </Paper>
          </Paper>
          {/* Chatsss */}

          <Paper
            elevation={0}
            sx={{
              height: "85%",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: 0,
              },
              padding:3
            }}
          >
            <Paper
              sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}
              elevation={0}
            >
              <Avatar sx={{ marginRight: 2 }} />
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "secondary.main",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "80%",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={"200"}
                  padding={1}
                  color={"#e0e0e0"}
                >
                  Hello World
                </Typography>
              </Paper>
            </Paper>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                marginBottom: 2,
              }}
              elevation={0}
            >
              <Avatar sx={{ marginLeft: 2 }} />
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "80%",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={"200"}
                  padding={1}
                  color={"#e0e0e0"}
                >
                  Hello World
                </Typography>
              </Paper>
            </Paper>
            <Paper
              sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}
              elevation={0}
            >
              <Avatar sx={{ marginRight: 2 }} />
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "secondary.main",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "80%",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={"200"}
                  padding={1}
                  color={"#e0e0e0"}
                >
                hello everyone
                </Typography>
              </Paper>
            </Paper>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                marginBottom: 2,
              }}
              elevation={0}
            >
              <Avatar sx={{ marginLeft: 2 }} />
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "80%",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={"200"}
                  padding={1}
                  color={"#e0e0e0"}
                >
                  Hello World
                </Typography>
              </Paper>
            </Paper>
            <Paper
              sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}
              elevation={0}
            >
              <Avatar sx={{ marginRight: 2 }} />
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "secondary.main",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "80%",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={"200"}
                  padding={1}
                  color={"#e0e0e0"}
                >
                  Hello World
                </Typography>
              </Paper>
            </Paper>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                marginBottom: 2,
              }}
              elevation={0}
            >
              <Avatar sx={{ marginLeft: 2 }} />
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "80%",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={"200"}
                  padding={1}
                  color={"#e0e0e0"}
                >
                  Hello World
                </Typography>
              </Paper>
            </Paper>
            <Paper
              sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}
              elevation={0}
            >
              <Avatar sx={{ marginRight: 2 }} />
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "secondary.main",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "80%",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={"200"}
                  padding={1}
                  color={"#e0e0e0"}
                >
                  Hello World
                </Typography>
              </Paper>
            </Paper>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                marginBottom: 2,
              }}
              elevation={0}
            >
              <Avatar sx={{ marginLeft: 2 }} />
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "80%",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={"200"}
                  padding={1}
                  color={"#e0e0e0"}
                >
                  Hello World
                </Typography>
              </Paper>
            </Paper>
            <Paper
              sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}
              elevation={0}
            >
              <Avatar sx={{ marginRight: 2 }} />
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "secondary.main",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "80%",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={"200"}
                  padding={1}
                  color={"#e0e0e0"}
                >
                  Hello World
                </Typography>
              </Paper>
            </Paper>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                marginBottom: 2,
              }}
              elevation={0}
            >
              <Avatar sx={{ marginLeft: 2 }} />
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "80%",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={"200"}
                  padding={1}
                  color={"#e0e0e0"}
                >
                  Hello World
                </Typography>
              </Paper>
            </Paper>
          </Paper>

          <Paper
            sx={{
              borderColor: "primary",
              width: "100%",
              border: 1,
              borderRadius: 0,
              display: "flex",
              marginTop: 2,
            }}
            component={"form"}
            elevation={0}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Say Hi" />
            <IconButton
              sx={{
                borderRadius: 0,
                backgroundColor: "primary.main",
                color: "#fff",
              }}
            >
              <SendIcon />
            </IconButton>
          </Paper>
        </Paper>
      </Paper>
    </>
  );
};

export default Chat;
