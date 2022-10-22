import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { auth } from "../../firbase/utilities";

const PostCardGrid = ({
  postings,
  marginTop,
  marginLeft,
  marginRight,
  type,
  isOwner,
}) => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleFavorite = async (post, favorite) => {
    const { _id } = post;
    try {
      const { uid } = currentUser;
      await fetch(
        `http://localhost:3000/api/user/${uid}/${type}/${
          favorite ? "favorite" : "unfavorite"
        }/${_id}`,
        {
          method: "PUT",
        }
      );

      if (type === "service") {
        setCurrentUser({
          ...currentUser,
          favoriteService: {
            ...currentUser.favoriteService,
            [_id]: !currentUser.favoriteService[_id],
          },
        });
      }

      if (type === "job") {
        setCurrentUser({
          ...currentUser,
          favoriteJob: {
            ...currentUser.favoriteJob,
            [_id]: !currentUser.favoriteJob[_id],
          },
        });
      }

      // console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  //https://www.reddit.com/r/Firebase/comments/mghedt/on_a_page_refresh_my_app_gives_me_a_typeerror_uid/

  useEffect(() => {
    const getUser = async () => {
      const unsub = auth.onAuthStateChanged(async (user) => {
        unsub();

        if (user) {
          const result = await fetch(
            `http://localhost:3000/api/user/read/${user.uid}`,
            {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
          const resultUser = await result.json();
          setCurrentUser({ ...resultUser.user });
        }
      });
      // Get user details

      // get fav services
      //chechk if value is true
      // add new value to service object service.isFav = true
    };

    getUser();
  }, []);

  // console.log(postings)
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: 10,
        paddingLeft: 20,
        paddingTop: 2,
      }}
    >
      {/* {console.log(currentUser)} */}
      <Grid container>
        {/* {console.log(favorites,'fgfgfg')} */}
        {postings.map((post) => {
          let isFavorite = false;
          if (type === "job" && currentUser) {
            const favoriteJobs = currentUser.favoriteJob || [];
            isFavorite = favoriteJobs[post._id];
          }
          if (type === "service" && currentUser) {
            const favoriteServices = currentUser.favoriteService || [];
            isFavorite = favoriteServices[post._id];
          }
          {
            /* console.log(post) */
          }

          return (
            <PostCard
              key={post._id}
              post={post}
              type={type}
              isOwner={isOwner}
              isFavorite={isFavorite}
              handleFavorite={handleFavorite}
            />
          );
        })}
      </Grid>
    </Paper>
  );
};

// PostCardGrid.propTypes = {
//   postings: PropTypes.arrayOf(PropTypes.objectOf(PostShape)).isRequired,
//   marginLeft: PropTypes.number,
//   marginRight: PropTypes.number,
//   marginTop: PropTypes.number,
// };

// PostCardGrid.defaultProps = {
//   postings: [
//     {
//       _id: "dsjhdksdjs",
//       name: "John Doe",
//       description:
//         "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
//       title: "job/help title",
//       averageRating: 4.5,
//       totalRatings: 50,
//       ratePerHour: 40,
//     },
//     {
//       _id: "dsjhdksdjs",
//       name: "John Doe",
//       description:
//         "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
//       title: "job/help title",
//       averageRating: 4.5,
//       totalRatings: 50,
//       ratePerHour: 40,
//     },
//     {
//       _id: "dsjhdksdjs",
//       name: "John Doe",
//       description:
//         "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
//       title: "job/help title",
//       averageRating: 4.5,
//       totalRatings: 50,
//       ratePerHour: 40,
//     },
//     {
//       _id: "dsjhdksdjs",
//       name: "John Doe",
//       description:
//         "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
//       title: "job/help title",
//       averageRating: 4.5,
//       totalRatings: 50,
//       ratePerHour: 40,
//     },
//     {
//       _id: "dsjhdksdjs",
//       name: "John Doe",
//       description:
//         "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
//       title: "job/help title",
//       averageRating: 4.5,
//       totalRatings: 50,
//       ratePerHour: 40,
//     },
//     {
//       _id: "dsjhdksdjs",
//       name: "John Doe",
//       description:
//         "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
//       title: "job/help title",
//       averageRating: 4.5,
//       totalRatings: 50,
//       ratePerHour: 40,
//     },
//     {
//       _id: "dsjhdksdjs",
//       name: "John Doe",
//       description:
//         "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
//       title: "job/help title",
//       averageRating: 4.5,
//       totalRatings: 50,
//       ratePerHour: 40,
//     },
//     {
//       _id: "dsjhdksdjs",
//       name: "John Doe",
//       description:
//         "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
//       title: "job/help title",
//       averageRating: 4.5,
//       totalRatings: 50,
//       ratePerHour: 40,
//     },

//   ],
// };

export default PostCardGrid;
