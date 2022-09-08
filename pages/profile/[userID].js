import { FormControl, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Media from "../../components/Media";
import Categories from "../../components/Navigation/Categories";
import NavBar from "../../components/Navigation/NavBar";

const Profile = () => {
  
    const [values,setValues] = useState({
        name:"",
        email:"",
        image:null,
        username:""
    })
    const router = useRouter()
    useEffect(() =>{
        if (!router.isReady) return;
        const {userID} = router.query
        const getUserInfo = async() =>{
            const result = await fetch(`http://localhost:3000/api/user/read/${userID}`,{
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                }
              })
           const {user} = await result.json()
           setValues(user)
           console.log(user)
        }

        getUserInfo()
    },[router.isReady,router.query])




    const handleChange = (name) => (event) => {
        if (name === "ratePerHour") {
          setValues({ ...values, [name]: +event.target.value });
        } else {
          setValues({ ...values, [name]: event.target.value });
        }
      };
  return (
    <>
    <NavBar/>

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
            required
            id="username"
            label="Username"
            onChange={handleChange("username")}
            defaultValue={''}
            value={values?values.username:''}

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
            id="name"
            label="Name"
            placeholder="Cleaning Service"
            defaultValue={''}
            value={values?values.name:''}
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
            required
            id="email"
            label="Email"
            placeholder="$50"
            defaultValue={''}
            value={values?values.email:''}
            onChange={handleChange("email")}
          />
          
         <Media/>
        </FormControl>
      </Paper>
    </>
  );
};

export default Profile;
