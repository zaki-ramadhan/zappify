/* eslint-disable no-unused-vars */
import { useDarkMode } from "@hooks/DarkMode";
import { useState } from "react";

import { Header, Footer} from "@layouts/";

const Entertainment = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
      <div className={darkMode ? "dark" : ""}>
        <Header active={true} toggleDarkMode={toggleDarkMode} duration= {2} participan={5} reviews={20}/>
        <section className="container px-20 min-h-screen grid grid-cols-4 grid-rows-3">
         <div className="bg-slate-100 col-span-3 row-span-2"></div>
         <div className="bg-slate-200"></div>
         <div className="bg-slate-300"></div>
         <div className="bg-slate-400"></div>
         <div className="bg-slate-500"></div>
         <div className="bg-slate-600"></div>
         <div className="bg-slate-700"></div>
         <div className="bg-slate-800"></div>
         <div className="bg-slate-900"></div>
         <div className="bg-slate-950"></div>
        </section>
        <Footer/>
    </div>
  )
}

export default Entertainment
