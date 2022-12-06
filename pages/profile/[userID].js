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
import Error from '../../components/Error/Error'
const Profile = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    username: "",
  });
  const [error, setError] = useState("")
  const router = useRouter();

  const { userID } = router.query;

  const [image, setImage] = useState(null);

  const onChange = (imageList, addUpdatedIndex) => {
    try {
      // console.log(imageList, addUpdatedIndex);

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
      console.log(err);
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    // const { userID } = router.query;

    let token = getToken();

    const getUserInfo = async () => {
      const result = await fetch(
        `http://localhost:3000/api/user/read/${userID}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      let data = await result.json();

      if(data.err){
       setError(data.err)
      }else{
        let {user} = data
        setValues(user)
      }

        
     
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

  if(error){
    return (
      <>
      <NavBar />
      <Error message={error}/>

      </>
    )
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
