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
import NavBar from "../../../../components/Navigation/NavBar";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firbase/utilities";
import Media from "../../../../components/Media";
import { useRouter } from "next/router";
import Footer from "../../../../components/Footer/Footer";
import Job from "../../../../models/job";
import connectMongo from "../../../../utils/connectMongo";


export async function getServerSideProps(context) {
  try {
    const { jobID } = context.query;
    await connectMongo();

    const job = await Job.findById(jobID).select(
      "title pay description _id "
    );

    return {
      props: {
        job: JSON.parse(JSON.stringify(job)),
      },
    };
  } catch (err) {
    console.log(err);
  }
}

const Edit = ({job}) => {
  const router = useRouter();
  const [values, setValues] = useState(job);
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
    if (name === "pay") {
      setValues({ ...values, [name]: +event.target.value });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const handleSubmit = async () => {
    try {
      console.log(image);
      const result = await fetch(
        `http://localhost:3000/api/job/update/${values._id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: image
            ? JSON.stringify({ ...values, image })
            : JSON.stringify({ ...values }),
        }
      );
      await result.json();
      await router.push(`http://localhost:3000/my-account/${user.uid}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
          Update Job
        </Typography>

        <Box sx={{ display: "flex", alignItems: "flex-start", width: "80%" }}>
          <Typography
            sx={{ fontSize: 15, fontFamily: "rockwell", fontWeight: 600 }}
          >
            Job Details
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
            value={values ? values.pay : ""}
            onChange={handleChange("pay")}
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
      <Footer />
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
