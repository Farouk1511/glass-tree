import { FormControl } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ActionButton from "../../components/Form/ActionButton";
import Input from "../../components/Form/Input";
import Title from "../../components/Form/Title";
import { signin } from "../../firbase/utilities";
import FormPageLayout from "../../layouts/FormPageLayout";

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      await signin(values.email, values.password);
      router.push("/search");
    } catch (err) {
      // console.log(err);
      setError(err.message);
    }
  };

  const handleChanges = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <FormPageLayout error={error} setError={setError}>
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
        />

        <Input
          id="password"
          label="Password"
          placeholder="Enter your Password"
          type={"password"}
          onChange={handleChanges("password")}
        />

        <ActionButton actionName={"Login"} handleSubmit={handleSubmit} />
      </FormControl>
    </FormPageLayout>
  );
};

export default Login;
