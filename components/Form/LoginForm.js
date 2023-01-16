import { FormControl, Typography } from "@mui/material";
import React from "react";
import ActionButton from "./ActionButton";
import Input from "./Input";
import Title from "./Title";
import Link from "next/link";

const LoginForm = ({handleChanges,handleSubmit,error}) => {
  return (
    <>
      <Title title={"Log In"} />

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
          id="email"
          label="Email"
          placeholder="joe@email.com"
          onChange={handleChanges("email")}
          error={Boolean(error)}
        />

        <Input
          id="password"
          label="Password"
          placeholder="Enter your Password"
          type={"password"}
          onChange={handleChanges("password")}
          error={Boolean(error)}
        />

        <ActionButton
          id={"login_button"}
          actionName={"Login"}
          handleSubmit={handleSubmit}
        />
      </FormControl>
      <Typography
        variant="h7"
        component="span"
        sx={{ fontFamily: "rockwell", fontWeight: 700, marginTop: 3 }}
      >
        Dont have an account?
        <Link href={"/register"}>
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
            Register here
          </Typography>
        </Link>{" "}
      </Typography>
    </>
  );
};

export default LoginForm;
