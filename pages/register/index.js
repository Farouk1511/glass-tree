import {
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { signup } from "../../firbase/utilities";
import Title from "../../components/Form/Title";
import Input from "../../components/Form/Input";
import ActionButton from "../../components/Form/ActionButton";
import FormPageLayout from "../../layouts/FormPageLayout";
import { signupMongoDb } from "../../utils/helper/apis";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const firebase_user = await signup(email, password);
      await signupMongoDb({
        name,
        email,
        username,
        uid: firebase_user.user.uid,
      })
      router.push("/login");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    
      <FormPageLayout error={error} setError={setError}>
      
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
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            id="username"
            label="Username"
            placeholder="erenyaeger00"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id="email"
            label="Email"
            placeholder="joe@email.com"
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
          />
          <Input
            id="password"
            label="Password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
          />

          <FormControlLabel
            label="By joining I agree to receive emails from GlassTree"
            control={<Checkbox />}
          />

          <ActionButton
            handleSubmit={handleSubmit}
            actionName="Create Account"
          />
        </FormControl>
      </FormPageLayout>
    
  );
};
export default Register;
