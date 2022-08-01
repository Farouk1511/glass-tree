import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Paper,
  Link,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Grid,
  Divider,
  CardHeader,
  CardActions,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const Seller = () => {
  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        style={{
          paddingLeft: 200,
          paddingRight: 200,
          zIndex: 1000,
          backgroundColor: "#fff",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          disableGutters
        >
          <Typography
            sx={{
              fontFamily: "rockwell",
              fontWeight: 700,
              textDecoration: "none",
            }}
            variant="h3"
            component="a"
            href="/"
            color="primary"
          >
            GlassTree
          </Typography>
          {/* Search */}
          <Paper
            sx={{
              borderColor: "primary",
              width: 750,
              border: 1,
              borderRadius: 0,
              display: "flex",
            }}
            component={"form"}
            elevation={0}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Try "paint my fence"'
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              sx={{
                borderRadius: 0,
                backgroundColor: "primary.main",
                color: "#fff",
              }}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <Avatar sx={{ backgroundColor: "secondary.main" }}>F</Avatar>
        </Toolbar>
      </AppBar>

      {/* Categories */}
      <Paper elevation={0}>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{
            justifyContent: "space-between",
            overflowX: "auto",
            margin: 25,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              sx={{
                p: 1,
                flexShrink: 0,
                fontFamily: "rockwell",
                fontWeight: 700,
                textDecoration: "none",
                "&:hover": {
                  borderBottom: 4,

                  borderColor: "secondary.main",
                  color: "gray",
                },
              }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: 40,
          marginRight: 40,
          marginTop: 5,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Drywall installation and Finishing
        </Typography>

        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Card elevation={0} sx={{ width: 750 }}>
            <CardHeader
              avatar={<Avatar>F</Avatar>}
              title="Farouk Kazeem"
              subheader={<Rating readOnly value={5} />}
            />
            <CardMedia
              component={"img"}
              height="500"
              image="https://picsum.photos/750/550"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Description
              </Typography>
              <Typography variant="body2" color="text.secondary">
                More than 600 Projects Completed. Website Development is my
                passion, and I truly believe in quality work and great customer
                service. If you need an Amazing WordPress Website, you are at
                the right place. • Don’t worry if your content is not ready, I
                can use the dummy content. WordPress website will be highly
                customizable with its user-friendly dashboard. No coding is
                required! WordPress customization facility will help you save a
                lot of time and money. • I have a huge stock of premium
                WordPress themes. If you have any theme in mind, you can save a
                lot by sending me a message to confirm its availability. You
                will need to buy the theme if you want a theme license. •
                Whether it’s a custom WordPress website design or a WordPress
                website development, you can always send me a message to discuss
                the details. • Please provide login details for your hosting
                before I start work or I will deliver completed work in zipped
                files.
              </Typography>
            </CardContent>
          </Card>

          <Card
            elevation={0}
            sx={{
              border: 2,
              width: "30%",
              height: 250,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft:5
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{marginBottom:4}}>Contact Helper</Typography>
            </CardContent>
            <CardContent sx={{ padding: 0 }}>
              <TextField
                id="your message"
                label="Your Message"
                multiline
                rows={2}
                defaultValue="Hi, I’m interested. Please contact me."
                sx={{ width:300,marginBottom:2}}
                
              />
            </CardContent>
            <CardActions>
              <Button variant="contained" color="secondary" href="/search">
                Send MEssage
              </Button>
            </CardActions>
          </Card>
        </Paper>

        <Card sx={{ border: 2, borderRadius: 3, width: 350, marginBottom: 5 }}>
          <CardHeader
            sx={{ margin: 0, marginLeft: 2, marginTop: 1, padding: 0 }}
            title={"Farouk Kazeem"}
            avatar={<Avatar>FK</Avatar>}
          />
          <CardContent sx={{ margin: 0, marginLeft: 9, padding: 0 }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ marginLeft: 0, padding: 0 }}
            >
              Experienced Web Developer
            </Typography>
            <Rating readOnly value={5} />
          </CardContent>

          <CardActions
            sx={{ margin: 0, marginLeft: 9, padding: 0, marginBottom: 1 }}
          >
            <Button variant="contained" color="secondary" href="/search">
              Contact Me
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </>
  );
};

export default Seller;
