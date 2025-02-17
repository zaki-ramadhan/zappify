import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { fadeIn } from '@animation';

const HeroCategoriesSection = () => {
  return (
    <section className="container hero_section categories py-10">
      <motion.p variants={fadeIn("up", { motionDelay: 200 })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="label text-xs uppercase tracking-wide text-slate-500">MASTER YOUR CRAFT</motion.p>
      <motion.h1 variants={fadeIn("up", { motionDelay: 400 })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-5xl font-medium mt-4 mb-5 w-2xl">
        Professional Skill <span className=" text-[#89be74]">Development</span> Programs.
      </motion.h1>
      <div className='description-buttons__wrp flex justify-between items-center'>
        <motion.p variants={fadeIn("up", { motionDelay: 600 })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="text-lg text-slate-500 w-2/3">
          Explore expert-led courses across multiple disciplines to enhance your 
          professional capabilities and personal growth.
        </motion.p>
        <motion.div variants={fadeIn("up", { motionDelay: 600 })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className='buttons button__wrp'>
          <button className='p-2 rounded-full mr-1 bg-slate-800/60 hover:bg-slate-800 transition-colors duration-200 ease-in-out'>
            <Icon icon="ri:arrow-left-s-line" width="24" height="24" />
          </button>
          <button className='p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors duration-200 ease-in-out'>
            <Icon icon="ri:arrow-right-s-line" width="24" height="24" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroCategoriesSection