/* eslint-disable no-unused-vars */
import { useDarkMode } from "@hooks/DarkMode";
import { useState } from "react";

import Header from "@layouts/Header";
import Form from '@components/Forms/Form';
import InputField from '@components/Inputs/InputField';
import SubmitButton from '@components/Buttons/SubmitButton';
// import { Form, InputField, SubmitButton } from '@elements';
import useForm from "@hooks/UseForm";

const Register = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  const { formData, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = (data) => {
    console.log("Register data submitted: ", data);
    // Proses register
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Form title="Register" additionalText="Already have an account ? ">
        <InputField label="Name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
        <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
        <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
        <SubmitButton label="Register" onClick={handleSubmit} />
      </Form>
    </div>
  );
};

export default Register;
