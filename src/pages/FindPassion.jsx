import { useDarkMode } from "@hooks/DarkMode";
import { Header, GridGallery, Footer } from "@layouts/";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion'
import { fadeIn } from '@animation';

const FindPassion = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header active={true} toggleDarkMode={toggleDarkMode} />
      <section id="hero-section" className="container flex flex-col justify-center items-center mb-20">
        <GridGallery/>
        <motion.span variants={fadeIn("up", {motionDelay : 400})} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.5}} className="badge text-xs -mt-54 p-2 px-4 bg-slate-800/60 rounded-full">
          Explore Paths
        </motion.span>
        
        <div className="title__wrp mt-6 text-5xl text-center font-medium">
          <motion.h1 variants={fadeIn("up", {motionDelay : 500})} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0 }} className="text-accent">
            Uncover your true calling
          </motion.h1>
          <motion.h1 variants={fadeIn("up", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0 }} className="text-[#89be74]">
            Discover what moves you
          </motion.h1>
        </div>

        <motion.p variants={fadeIn("up", {motionDelay : 300})} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0 }} className="mt-6 text-slate-500 max-w-xl text-center">
          Take our passion assessment quiz and explore curated pathways tailored to your unique interests, 
          strengths, and aspirations. Start your journey to meaningful work today.
        </motion.p>

        <motion.button variants={fadeIn("up", {motionDelay : 400})} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0 }} className="text-sm py-2 px-4 mt-8 bg-[#89be74] rounded-full flex gap-1 items-center hover:bg-[#76a963] transition-colors">
          Start Your Journey
          <Icon icon="mdi:compass-outline" width="20" height="20" className="ml-1"/>
        </motion.button>
      </section>
      <Footer/>
    </div>
  )
}

export default FindPassion