/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/FormRegister.jsx
import { Link } from "react-router-dom";

import { useState } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '@animation'; // path alias dari vite.config

const Form = (props) => {
  const { title, handleSubmit, additionalText, children} = props;
  const isLogin = props.title === "Login";
  
  return (
    <motion.form variants={fadeIn("up", 300)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} onSubmit={handleSubmit} className={`max-w-lg mx-auto ${isLogin ? 'mt-28' : 'mt-20'} p-8 border  border-slate-200/70 dark:border-slate-500 transition-colors duration-500 bg-white/10 backdrop-blur-md rounded-xl shadow-lg`}>
      <h2 className="text-xl font-bold text-center mb-6 text-[#374151] dark:text-white transition-colors duration-500">{title}</h2>
      {children}
      <p className="text-center mt-4 text-sm dark:text-gray-300 text-gray-700">
        {additionalText}

        {/* CTA link */}
        <Link to={isLogin ? "/register" : "/login"} className="dark:hover:text-blue-600 text-blue-500 hover:underline">
          {isLogin ? "Register here" : "Login Here"}
        </Link>
      </p>
    </motion.form>
  );
};

export default Form;
