/* eslint-disable no-unused-vars */ 
import { useDarkMode } from "@hooks/DarkMode";
import { useState } from "react";

import Header from "@layouts/Header";
import {Form} from '/src/components/Forms/';
import useForm from "@hooks/UseForm";
import {InputField as Input} from '@components/Inputs/';
import {SubmitButton as Button} from '@components/Buttons/';

const Login = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { formData, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = (data) => {
    alert("Register data submitted: ", data);
    // Proses register
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Form title="Login" additionalText="Don&apos;t have an account ? ">
        <Input label="Name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
        {/* <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" /> */}
        <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
        <Button label="Register" />
      </Form>
    </div>
  );
};

export default Login;
