import { HomeHeroCard as Cards} from "@components/Cards/";
import { Icon } from "@iconify/react"; //iconify sudah terinstall (pnpm i --save-dev @iconify/react)
import { useRef } from "react";

// motion
import {motion} from 'framer-motion';
// animation
import {fadeIn} from '@animation'; // alias dari vite.config
import Magnet from '@effects/Magnet' // alias dari vite.config
import me from "@images/me.jpg"; // alias dari vite.config

// penulisan  component langsung aja seperti membuat variabel soalnya tidak ada penggunaan this juga
const HeroHomeSection = () => {
    const constraintsRef = useRef(null);
    return (
        <section className="container px-20 h-[70vh] mt-4 flex justify-center items-center gap-10">
            <div ref={constraintsRef} className="relative -mt-40">
                <div className="min-w-66 space-y-1 text-wrap text-6xl text-[#374151] dark:text-white leading-[.9] font-semibold">
                    <motion.h1 drag dragConstraints={constraintsRef} variants={fadeIn("right", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} >W<span className="font-['Space_Mono']">a</span>tch<span className="font-['Silkscreen'] font-normal">.</span></motion.h1>
                    <motion.h1 drag dragConstraints={constraintsRef} variants={fadeIn("right", {motionDelay : 400})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} >Le<span className="font-['Space_Mono']">a</span>rn<span className="font-['Silkscreen'] font-normal">.</span></motion.h1>
                    <motion.h1 drag dragConstraints={constraintsRef} variants={fadeIn("right", {motionDelay : 600})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} >Grow<span className="font-['Silkscreen'] font-normal">.</span></motion.h1>
                </div>
                <div className="form-info__wrapper absolute mt-16 z-30 flex flex-col gap-5">
                    <motion.form variants={fadeIn("right", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="flex items-center shadow-xl shadow-zinc-500/5">
                        <input className="text-sm p-8 w-[30ch] bg-white dark:bg-slate-800 dark:text-slate-300 dark:border dark:border-[#374151] focus:outline-hidden dark:focus:border-slate-500 transition-colors duration-500 z-30" placeholder="Find your passion"/>
                        <button className=" bg-[#95c681] hover:bg-[#86b274] text-[#374151] p-6 border-2 border-[#95c681] font-medium text-2xl">Go</button>
                    </motion.form>
                    <Magnet padding={150} disabled={false} magnetStrength={100}>
                        <motion.div variants={fadeIn("right", {motionDelay : 400})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="dev-label flex gap-3 items-center p-2 rounded-full dark:bg-white/5 dark:hover:bg-white/10 dark:border-slate-800 dark:hover:border-slate-500 bg-white/50 border-white backdrop-blur-lg border duration-300 shadow-xl shadow-zinc-500/5 w-fit">
                            <img src={me} className="w-8 h-auto aspect-square  rounded-full"></img>
                            <p className="dev-name text-xs font-medium">Zaki Ramadhan</p>
                            <Icon icon="lets-icons:check-fill" width="24" height="24" className="text-[#95c681]"/>
                        </motion.div>
                    </Magnet>
                </div>
            </div>
            <Cards/>
        </section>
    )
}

export default HeroHomeSection;