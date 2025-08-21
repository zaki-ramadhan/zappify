import SkillsHeader from "@components/HeaderSkills";
import {ListSkills as List} from '@components';

// motion
import {motion} from 'framer-motion';
// animation
import {fadeIn} from '@animation'; // alias dari vite.config

import woman from "@images/women-officer.jpg";

const SkillsSection = () => {
    return (
        <section className="h-screen py-10 px-20">
            <SkillsHeader/>
            <main className="main-content__wrapper flex justify-between items-start py-8 gap-20">
                <ul className="skills flex flex-col mt-12 gap-9 max-w-48">
                    <motion.li variants={fadeIn("up", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="skill item">
                            <List icon={"ri:medal-2-fill"} iconColor={"text-stone-600"} title={"Leadership"} content={"Fully commited to the success company"} showLine={true}/>
                    </motion.li>

                    <motion.li variants={fadeIn("up", {motionDelay : 350})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="skill item">
                            <List icon={"mdi:clock-time-six-outline"} iconColor={"text-blue-900"} title={"Responsibility"} content={"Employees will always be my top priority"} showLine={true}/>
                    </motion.li>

                    <motion.li variants={fadeIn("up", {motionDelay : 500})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="skill item">
                            <List icon={"ph:lightning"} iconColor={"text-red-900"} title={"Flexibility"} content={"The ability to switch is an important skill"}/>
                    </motion.li>
                </ul>

                <motion.div variants={fadeIn("up", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="relative w-full">
                    <img src={woman} className="rounded-xl w-full h-96"></img>
                    <motion.div variants={fadeIn("up", {motionDelay : 300})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="floating-content p-3 absolute -top-8 right-36 bg-[#95c681] flex items-center">
                        <div className="year-content__wrapper flex relative gap-3 p-4 text-[#374151] dark:text-white bg-[#95c681] after:content-[''] dark:after:bg-white after:bg-[#374151] after:w-[1.5px] after:h-8 after:ms-4" >
                            <span className="text-3xl font-medium">10</span>
                            <p className="uppercase text-xs max-w-20 font-semibold">Years Experiences</p>
                        </div>
                        <div className="tipeCouse-content__wrapper text-[#374151] dark:text-white flex gap-3 p-4 bg-[#95c681]">
                            <span className="text-3xl font-medium">250</span>
                            <p className="uppercase text-xs max-w-20 font-semibold">types of courses</p>
                        </div>
                    </motion.div>
                </motion.div>
            </main>
        </section>
    )
}

export default SkillsSection;