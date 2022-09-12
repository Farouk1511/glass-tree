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
import Categories from "../../components/Navigation/Categories";
import NavBar from "../../components/Navigation/NavBar";

const Profile = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    username: "",
  });
  const router = useRouter();

  const { userID } = router.query;

  const [image, setImage] = useState(null);

  const onChange = (imageList, addUpdatedIndex) => {
    try {
      console.log(imageList, addUpdatedIndex);

      setImage(imageList[0]);
    } catch (err) {
      console.log(err);
    } // console.log(values)
  };

  const onImageRemove = () => {
    setImage(null);
  };

  const handleUpdate = async () => {
    try {
      // console.log(values);
      const result = await fetch(
        `http://localhost:3000/api/user/update/${userID}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...values,image}),
        }
      );

      console.log(await result.json());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    // const { userID } = router.query;
    const getUserInfo = async () => {
      const result = await fetch(
        `http://localhost:3000/api/user/read/${userID}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const { user } = await result.json();
      setValues(user);
      console.log(user);
    };

    getUserInfo();
  }, [router.isReady, userID]);

  const handleChange = (name) => (event) => {
    if (name === "ratePerHour") {
      setValues({ ...values, [name]: +event.target.value });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };
  return (
    <>
      <NavBar />

      {console.log(values)}
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
        <Typography>Profile</Typography>
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
