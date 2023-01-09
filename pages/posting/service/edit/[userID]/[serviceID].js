import {
  Box,
  Button,
  Divider,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../../../../../components/Navigation/NavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../../firbase/utilities";
import Media from "../../../../../components/Media";
import { useRouter } from "next/router";
import Service from "../../../../../models/service";
import connectMongo from "../../../../../utils/connectMongo";
import { getCookie } from "cookies-next";
import { firebaseAdmin } from "../../../../../firbase/firebaseAdmin";

export async function getServerSideProps(context) {
  try {
    const { serviceID, userID } = context.query;
    await connectMongo();

    //Authentication and authoriaztion
    const { req, res } = context;
    const token = getCookie("token", { req, res });
    // console.log(token)
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);

    const { uid } = decodedToken;

    if (uid !== userID) {
      return {
        redirect: {
          permanent: false,
          destination: "/restricted-page",
        },
      };
    }

    const service = await Service.findById(serviceID).select(
      "_id title ratePerHour description"
    );

    return {
      props: {
        post: JSON.parse(JSON.stringify(service)),
      },
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/restricted-page",
      },
    };
  }
}

const Edit = ({ post }) => {
  const router = useRouter();
  const [values, setValues] = useState(post);
  const [image, setImage] = useState(null);

  const onChange = (imageList, addUpdatedIndex) => {
    try {
      setImage(imageList[0]);
    } catch (err) {
      console.log(err);
    } // console.log(values)
  };

  const onImageRemove = () => {
    setImage(null);
  };

  const [user, loading, error] = useAuthState(auth);

  const handleChange = (name) => (event) => {
    if (name === "ratePerHour") {
      setValues({ ...values, [name]: +event.target.value });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const handleSubmit = async () => {
    try {
      const result = await fetch(
        `/api/service/update/${user?.uid}/${values._id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:'Bearer '+getCookie('token')
          },
          body: image
            ? JSON.stringify({ ...values, image })
            : JSON.stringify({ ...values }),
        }
      );
      await result.json();
      await router.push(`/my-account/${user.uid}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* {console.log(values)} */}
      <NavBar />
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Typography sx={{ fontSize: 40, fontFamily: "rockwell" }}>
          Create a Service
        </Typography>

        <Box sx={{ display: "flex", alignItems: "flex-start", width: "80%" }}>
          <Typography
            sx={{ fontSize: 15, fontFamily: "rockwell", fontWeight: 600 }}
          >
            Ad Details
          </Typography>
        </Box>
        <Divider variant="fullWidth" />

        <FormControl
          sx={{
            marginTop: 5,
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{
              width: "60%",
              marginBottom: 5,
              borderWidth: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: 2, borderRadius: 0 },
              },
            }}
            required
            id="title"
            label="Title"
            value={values ? values.title : ""}
            onChange={handleChange("title")}
          />
          <TextField
            sx={{
              width: "60%",
              marginBottom: 5,
              borderWidth: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: 2, borderRadius: 0 },
              },
            }}
            required
            id="ratePerHour"
            label="Rate Per Hour"
            value={values ? values.ratePerHour : ""}
            onChange={handleChange("ratePerHour")}
          />
          <TextField
            sx={{
              width: "60%",
              marginBottom: 5,
              borderWidth: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: 2, borderRadius: 0 },
              },
            }}
            required
            id="description"
            label="Description"
            value={values ? values.description : ""}
            onChange={handleChange("description")}
            multiline
            rows={4}
          />
        </FormControl>

        <Box sx={{ display: "flex", alignItems: "flex-start", width: "80%" }}>
          <Typography
            sx={{ fontSize: 15, fontFamily: "rockwell", fontWeight: 600 }}
          >
            Media
          </Typography>
        </Box>
        <Divider variant="fullWidth" />

        {/* <Card
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
              
            >
              <CardContent>
                <AddIcon fontSize="large" />
              </CardContent>
            </CardActionArea>
          </Card> */}
        <Media
          onChange={onChange}
          image={image}
          onImageRemove={onImageRemove}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "10%", marginTop: 10 }}
          onClick={handleSubmit}
        >
          Update
        </Button>
      </Paper>
    </>
  );
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb", // Set desired value here
    },
  },
};

export default Edit;
