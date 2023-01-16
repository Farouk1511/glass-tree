import { FormControl, FormControlLabel, Typography,Checkbox } from "@mui/material";
import Link from "next/link";
import React from "react";
import ActionButton from "./ActionButton";
import Input from "./Input";
import Title from "./Title";

const RegisterForm = ({handleSubmit, handleChanges,error}) => {
  return (
    <>
      <Title title={"Register"} />

      <FormControl
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          id="name"
          label="Name"
          placeholder="John Doe"
          onChange={handleChanges("name")}
          error={error}
        />
        <Input
          id="username"
          label="Username"
          placeholder="erenyaeger00"
          onChange={handleChanges('username')}
          error={error}
        />
        <Input
          id="email"
          label="Email"
          placeholder="joe@email.com"
          onChange={handleChanges("email")}
          type={"email"}
          error={error}
        />
        <Input
          id="password"
          label="Password"
          placeholder="Enter Password"
          onChange={handleChanges("password")}
          type={"password"}
          error={error}
        />

        <FormControlLabel
          label="By joining I agree to receive emails from GlassTree"
          control={<Checkbox />}
        />

        <ActionButton handleSubmit={handleSubmit} actionName="Create Account" />
      </FormControl>

      <Typography
        variant="h7"
        component="span"
        sx={{ fontFamily: "rockwell", fontWeight: 700, marginTop: 3 }}
      >
        Have an account?{" "}
        <Link href={"/login"}>
          <Typography
            variant="h7"
            component="span"
            sx={{
              fontFamily: "rockwell",
              fontWeight: 700,
              color: "secondary.main",
              cursor: "pointer",
            }}
          >
            Login here
          </Typography>
        </Link>{" "}
      </Typography>
    </>
  );
};

export default RegisterForm;
