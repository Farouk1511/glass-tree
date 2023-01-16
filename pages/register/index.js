import React, { useState } from "react";
import { useRouter } from "next/router";
import { signup } from "../../firbase/utilities";
import FormPageLayout from "../../layouts/FormPageLayout";
import { signupMongoDb } from "../../utils/helper/apis";
import RegisterForm from "../../components/Form/RegisterForm";

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
  });

  const router = useRouter();
  const [error, setError] = useState("");

  function checkPassword(password) {
    // Regular expression to check for at least one special character
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    // Regular expression to check for at least one number
    const numberRegex = /\d/;

    if (password.length < 8) {
      // console.log("Password must be at least 8 characters long.");
      return false;
    } else if (!specialCharRegex.test(password)) {
      // console.log("Password must contain at least one special character.");
      return false;
    } else if (!numberRegex.test(password)) {
      // console.log("Password must contain at least one number.");
      return false;
    } else {
      // console.log("Password is valid.");
      return true;
    }
  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleChanges = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const valideInputs = () => {
    const { email, name, username, password } = values;

    if (name.length < 2) {
      setError("Enter a name");

      return;
    }

    if (username.length < 4) {
      setError("Username must be 4 characters long");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter in a correct email address");

      return;
    }
    if (!checkPassword(password)) {
      setError(
        "Password must have special character, at least one number and must be greater than 8 characters"
      );

      
    }

    return true

  }
  const handleSubmit = async () => {
    const { email, name, username, password } = values;

    if(!valideInputs()){
      return
    }

    try {
      const firebase_user = await signup(email, password);
      await signupMongoDb({
        name,
        email,
        username,
        uid: firebase_user.user.uid,
      });
      router.push("/login");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <FormPageLayout error={error} setError={setError}>
      <RegisterForm
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
        error={error}
      />
    </FormPageLayout>
  );
};

export default Register;
