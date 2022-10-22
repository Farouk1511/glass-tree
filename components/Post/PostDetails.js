import React from "react";
import {
  Typography,
  Button,
  Paper,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Rating,
  CardHeader,
  CardActions,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import PostShape from "./PostShape";

const PostDetails = ({ post, type = "service" }) => {
  // console.log(post)
  return (
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
        {post.title}
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
            avatar={<Avatar>{post.user.name.split("")[0]}</Avatar>}
            title={post.title}
            subheader={
              <Rating
                readOnly
                value={post.user.averageRating ? post.user.averageRating : 4}
              />
            }
          />
          <CardMedia
            component={"img"}
            height="500"
            image={`http://localhost:3000/api/${type}/image/${post._id}`}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Description
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.description}
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
            marginLeft: 5,
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ marginBottom: 4 }}>
              Contact Me
            </Typography>
          </CardContent>
          <CardContent sx={{ padding: 0 }}>
            <TextField
              id="your message"
              label="Your Message"
              multiline
              rows={2}
              defaultValue="Hi, I’m interested. Please contact me."
              sx={{ width: 300, marginBottom: 2 }}
            />
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary" href="/search">
              Send Message
            </Button>
          </CardActions>
        </Card>
      </Paper>

      <Card sx={{ border: 2, borderRadius: 3, width: 350, marginBottom: 5 }}>
        <CardHeader
          sx={{ margin: 0, marginLeft: 2, marginTop: 1, padding: 0 }}
          title={post.user.name}
          avatar={<Avatar>{post.user.name.split("")[0]}</Avatar>}
        />
        <CardContent sx={{ margin: 0, marginLeft: 9, padding: 0 }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ marginLeft: 0, padding: 0 }}
          >
            {post.title}
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
  );
};

// PostDetails.propTypes = {
//   post: PropTypes.objectOf(PostShape),
// };

// PostDetails.defaultProps = {
//   post: {
//     uid: "dsjhdksdjs",
//     name: "John Doe",
//     description:
//       "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
//     title: "job/help title",
//     averageRating: 4.5,
//     totalRatings: 50,
//     ratePerHour: 40,
//   },
// };
export default PostDetails;
