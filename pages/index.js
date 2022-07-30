import { Typography } from "@mui/material";
import Head from "next/head";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "../components/NavBar";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";

const links = ["Moving", "Lawn", "Plumbing", "Carpenter", "Carpenter"];

export default function Home() {
  return (
    <div>
      <Head>
        <title>GlassTree | Find Helper Near You</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Paper
        sx={{
          position: "relative",
        }}
        style={{
          paddingLeft: 200,
          paddingRight: 200,
          width: 1400,
          marginTop: 50,
        }}
        color="primary"
        elevation={0}
      >
        <Typography
          component="h1"
          variant="h1"
          color="inherit"
          gutterBottom
          sx={{ fontFamily: "rockwell", fontWeight: 700 }}
        >
          Find the happy helper near you
        </Typography>
      </Paper>

      <Paper
        sx={{
          borderColor: "primary",
          width: 750,
          border: 1,
          borderRadius: 0,
          display: "flex",
        }}
        component={"form"}
        style={{
          marginLeft: 200,
          
        }}
        elevation={0}
      >
        <IconButton disabled>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Try "paint my fence"'
          inputProps={{ "aria-label": "search google maps" }}
        />
        <Button
          variant="contained"
          sx={{ border: 1, borderLeft: 0, borderRadius: 0, width: 110 ,fontFamily:'rockwell',fontWeight:500,letterSpacing:1}}
          color="secondary"
        >
          Search
        </Button>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          display: "flex",
        }}
        style={{
          marginLeft: 200,
        }}
      >
        <Toolbar
          component={"nav"}
          variant="dense"
          sx={{ justifyContent: "space-between", overflow: "auto" }}
          style={{ paddingLeft: 0 }}
        >
          <Typography sx={{ fontFamily: "rockwell", fontWeight: 700 }}>
            Popular:
          </Typography>

          {links.map((link) => (
            <Button
              color="primary"
              variant="outlined"
              key={link}
              sx={{
                marginRight: 2,
                marginLeft: 2,
                fontFamily: "rockwell",
                fontWeight: 750,
                fontSize: 12,
                borderRadius: 5,
                paddingLeft: 0.8,
                paddingRight: 0.8,
                minWidth: 80,
                border: 2,
              }}
            >
              {link}
            </Button>
          ))}
        </Toolbar>
      </Paper>

      <Paper
        elevation={0}
        style={{
          marginLeft: 200,
          marginTop: 70,
          marginBottom:200
        }}
      >
        <Typography
          sx={{ fontFamily: "rockwell", fontWeight: 700 }}
          variant="h4"
        >
          Popular Professional services
        </Typography>

        <Paper
          elevation={0}
          sx={{
            display: "flex",
            
          }}
          style={{marginTop:30}}
        >
          {links.map((link) => (
            <Box
              key={link}
              sx={{
                border:4,
                width: 250,
                height: 300,
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                marginRight:1
              }}
            ></Box>
          ))}
        </Paper>
      </Paper>
    </div>
  );
}
