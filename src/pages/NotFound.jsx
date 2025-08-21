import { useDarkMode } from "@hooks/DarkMode";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "@animation";

import Header from '@layouts/Header';

const NotFound = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <section className={`-z-50`}>
        <div className="py-1 px-4 mx-auto flex flex-col items-center justify-center max-w-(--breakpoint-xl) lg:py-16 lg:px-6">
          <motion.img variants={fadeIn("up", { motionDelay: 200 })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" className="size-64"/>
          <div className="mx-auto max-w-(--breakpoint-sm) text-center">
            <motion.h1 variants={fadeIn("up", { motionDelay: 350 })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#95c681] dark:text-[#95c681]">
              404
            </motion.h1>
            <motion.p variants={fadeIn("up", { motionDelay: 500 })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className={`mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ${darkMode ? 'text-white' : 'text-[#374151]'}`}>
              Something&apos;s missing.
            </motion.p>
            <motion.p variants={fadeIn("up", { motionDelay: 650 })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className={`mb-4 font-light text-gray-500 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the
              home page.
            </motion.p>
            <motion.button variants={fadeIn("up", { motionDelay: 800 })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }}>
              <Link to="/" className="inline-flex dark:textslate-700 text-white bg-[#95c681] hover:bg-[#86b274] focus:ring-4 focus:outline-hidden focus:ring-[#95c681] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-[#95c681] my-4">
                Back to Homepage
              </Link>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
