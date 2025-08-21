// motion
import {motion} from 'framer-motion';

// animation
import {fadeIn} from '@animation'; // alias dari vite.config

const Header = () => {
    return (
        <header className="grid grid-cols-2 gap-10">
            <motion.h1 variants={fadeIn("right", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="text-4xl text-[#374151] dark:text-white font-semibold max-w-80">Get the skills you need for <span className="font-['Space_Mono']">a</span> job th<span className="font-['Space_Mono']">a</span>t is in dem<span className="font-['Space_Mono']">a</span>nd.</motion.h1>
            <motion.p variants={fadeIn("left", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}}  className="text-slate-500 mt-1 max-w-100 place-self-start">The modern labor market dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</motion.p>
        </header>
    )
}

export default Header;