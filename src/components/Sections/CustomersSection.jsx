import {HomeCustomersCard as Cards} from "@components/Cards/"
import { Icon } from "@iconify/react";

// motion
import {motion} from 'framer-motion';
// animation
import {fadeIn} from '@animation'; // alias dari vite.config

const CustomersSection = ({darkMode}) => {
    return (
        <section className="container pt-10 px-20 flex flex-col items-center justify-center gap-10">
            <motion.h1 variants={fadeIn("up", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className=" text-4xl text-[#374151] dark:text-white font-semibold">Wh<span className="font-['Space_Mono']">a</span>t our customer s<span className="font-['Space_Mono']">a</span>y.</motion.h1>
            <Cards darkMode={darkMode}/>
            <motion.div variants={fadeIn("up", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="icons icon__wrapper flex gap-10 text-slate-400 dark:text-slate-600">
                    <Icon icon="gridicons:arrow-left" width="22" height="22" className="hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer" />
                    <Icon icon="gridicons:arrow-right" width="22" height="22" className="hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer" />
            </motion.div>
        </section>
    )
}

export default CustomersSection