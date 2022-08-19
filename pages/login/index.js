import {
  Alert,
  Button,
  FormControl,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Error from "../../components/Error/Error";
import { signin } from "../../firbase/utilities";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const user_firebase = await signin(email, password);
      setUser(user_firebase);
      router.push("/search");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <>
      {error && <Error message={error} closeFunc={() => setError("")} />}
      <Paper
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          borderRadius: 0,
          backgroundColor: "primary.main",
        }}
        elevation={0}
      >
        {/* {error && <Error message={error}/>} */}

        <Paper
          sx={{
            width: "50%",
            backgroundColor: "transparent",
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
            {user ? "Logged In" : " GlassTree"}
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
            Log in
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
              placeholder="Enter your Password"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
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
              Login
            </Button>
          </FormControl>
        </Paper>
      </Paper>
    </>
  );
};

export default Login;
