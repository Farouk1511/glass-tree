import {
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Media from "../../components/Media";
import NavBar from "../../components/Navigation/NavBar";
import { getToken } from "../../firbase/utilities";
import Error from "../../components/Error/Error";
import User from "../../models/user";
//this can be statically pre-rendered because it will rearely change

export async function getServerSideProps(context) {
  try {
    const { userID } = context.query;

    const user = await User.findOne({ uid: userID }).select(
      "username name email"
    );
    return {
      props: {
        user: JSON.parse(JSON.stringify(user)),
      },
    };
  } catch (err) {
    return {
      props: {
        user: null,
        err: JSON.parse(JSON.stringify(err.message)),
      },
    };
  }
}

const Profile = ({ user, err }) => {
  // console.log(user,err)
  const [values, setValues] = useState(user);
  const [error, setError] = useState(err);
  const [image, setImage] = useState(user?.image);

  const router = useRouter();
  const { userID } = router.query;

  const onChange = (imageList, addUpdatedIndex) => {
    try {
      setImage(imageList[0]);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const onImageRemove = () => {
    setImage(null);
  };

  const handleUpdate = async () => {
    try {
      let token = getToken();

      const result = await fetch(
        `http://localhost:3000/api/user/update/${userID}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({ ...values, image }),
        }
      );

      await result.json();

      router.push(`http://localhost:3000/my-account/${userID}`);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const handleChange = (name) => (event) => {
    if (name === "ratePerHour") {
      setValues({ ...values, [name]: +event.target.value });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  if (error) {
    return (
      <>
        <NavBar />
        <Error message={error} />
      </>
    );
  }
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
        <Typography variant="h3">Update Profile</Typography>
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
            id="username"
            label="Username"
            onChange={handleChange("username")}
            value={values ? values.username : ""}
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
            id="name"
            label="Name"
            placeholder="Cleaning Service"
            value={values ? values.name : ""}
            onChange={handleChange("name")}
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
            id="email"
            label="Email"
            placeholder="$50"
            value={values ? values.email : ""}
            onChange={handleChange("email")}
          />

          <Media
            onChange={onChange}
            image={image}
            onImageRemove={onImageRemove}
          />

          <Button onClick={handleUpdate} variant="contained">
            Update
          </Button>
        </FormControl>
      </Paper>
    </>
  );
};

export default Profile;
