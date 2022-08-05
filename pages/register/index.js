import {
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from 'next/router'
import { signup } from "../../firbase/utilities";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter()

  const handleSubmit = async () => {
    try {
      const firebase_user = await signup(email, password);
      const user = {
        name,
        email,
        username,
        uid: firebase_user.user.uid,
      };
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response.json())
      router.push('/login')
      
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Paper
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        borderRadius: 0,
      }}
      elevation={0}
    >
      <Paper
        sx={{
          width: "50%",
          backgroundColor: "primary.main",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 0,
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "rockwell",
            fontWeight: 700,
            textDecoration: "none",
          }}
          variant="h1"
          component="a"
          href="/"
          color="primary"
          margin={"dense"}
        >
          GlassTree
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "rockwell",
            fontWeight: 400,
            textDecoration: "none",
          }}
          variant="h4"
          component="a"
          href="/"
          color="primary"
          margin={"dense"}
        >
          Ottawas First Service MarketPlace
        </Typography>
      </Paper>
      <Paper
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 0,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "rockwell",
            fontSize: 35,
            fontWeight: 600,
            marginBottom: 10,
          }}
        >
          Register
        </Typography>

        <FormControl
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
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
            id="name"
            label="Name"
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
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
            id="username"
            label="Username"
            placeholder="erenyaeger00"
            onChange={(e) => setUsername(e.target.value)}
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
            placeholder="joe@email.com"
            onChange={(e) => setEmail(e.target.value)}
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
            id="password"
            label="Password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
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
            id="confirm-password"
            label="Confirm Password"
            placeholder="Re-type Password"
          />

          <FormControlLabel
            label="By joining I agree to receive emails from GlassTree"
            control={<Checkbox />}
          />

          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: "60%",
              fontWeight: 600,
              fontFamily: "rockwell",
              borderRadius: 0,
            }}
            onClick={handleSubmit}
          >
            Create Account
          </Button>
        </FormControl>
      </Paper>
    </Paper>
  );
};
export default Register;
