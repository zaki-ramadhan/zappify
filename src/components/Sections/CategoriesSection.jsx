import { HomeCategoriesCard as Cards} from "@components/Cards/";

// motion
import {motion} from 'framer-motion';
// animation
import {fadeIn} from '@animation'; // alias dari vite.config
import CountUp from '@effects/CountUp' // alias dari vite.config

// import BlurText from "./BlurText";

const CategoriesSection = () => {
    return (
        <section className="container h-screen px-20 flex flex-col gap-10 justify-center items-center">
            <motion.h1 variants={fadeIn("up", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className=" text-4xl text-[#374151] dark:text-white font-semibold">Unlimited <span className="font-['Space_Mono']">a</span>ccess to <CountUp from={0} to={100} separator="," direction="up" duration={2} className="count-up-text"/>+ instructors.</motion.h1>

            <motion.ul variants={fadeIn("up", {motionDelay : 300})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="flex justify-start gap-10 dark:text-slate-500 text-slate-400 text-sm font-medium">
                    <li className="cursor-pointer dark:text-white text-slate-800 underline underline-offset-8">All c<span className="font-['Space_Mono']">a</span>tegories</li>
                    <li className="cursor-pointer dark:hover:text-white hover:text-black duration-200">Entert<span className="font-['Space_Mono']">a</span>inment</li>
                    <li className="cursor-pointer dark:hover:text-white hover:text-black duration-200">Lifestyle</li>
                    <li className="cursor-pointer dark:hover:text-white hover:text-black duration-200">Writing</li>
                    <li className="cursor-pointer dark:hover:text-white hover:text-black duration-200">Business</li>
                    <li className="cursor-pointer dark:hover:text-white hover:text-black duration-200">Food</li>
            </motion.ul>

            <Cards/>
        </section>
    )
}

export default CategoriesSection;