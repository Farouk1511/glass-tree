import { useRouter } from "next/router";
import React, { useState } from "react";
import LoginForm from "../../components/Form/LoginForm";
import { signin } from "../../firbase/utilities";
import FormPageLayout from "../../layouts/FormPageLayout";

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // const handleSubmit = async () => {};
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


  const handleSubmit = async () => {
    if (!validateEmail(values.email)) {
      setError("Wrong Credentials");
    } else {
      //in case wrong email at first but corrects it
      setError("");

      try {
        const token = await signin(values.email, values.password);

        if (token) {
          localStorage.setItem("user_token", token);
        }

        router.push("/search");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleChanges = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };



  return (
    <FormPageLayout error={error} setError={setError}>
      <LoginForm
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
        error={error}
      />
    </FormPageLayout>
  );
};

export default Login;
