/* eslint-disable no-unused-vars */
import { useState } from "react";
// motion
import {motion} from 'framer-motion';
// animation
import {fadeIn} from '@animation'; // alias dari vite.config

// path alias dari vite.config
import img1 from "@images/profile-8.jpg";
import img2 from "@images/profile-6.jpg";
import img3 from "@images/profile-5.jpg";


const HomeHeroCard = () => {
    const [cards, setCard] = useState([
        {
            id: 1,
            width: "w-1",
            img: img1,
            tagline: "Writing Course",
            isGrow: true
        },
        {
            id: 2,
            width: "w-36",
            img: img2,
            tagline: "Writing",
            isGrow: false
        },
        {
            id: 3,
            width: "w-36",
            img: img3,
            tagline: "Business",
            isGrow: false
        },
    ]);

    return (
        <div className="cards__wrapper flex gap-8 w-full h-full">
            {cards.map((card) => {
                const grow = card.isGrow ? 'grow aspect-square' : '';

                return (
                    <motion.figure key={card.id} variants={fadeIn("left", {motionDelay : card.id * 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className={`card relative ${card.width} ${grow} rounded-2xl overflow-hidden`}>
                            <img src={card.img} alt="Profile img" className="w-full h-full" />
                            <div className="absolute w-full h-96 bg-linear-to-t from-black/80 to-black/0 bottom-0 left-0"></div>

                            {card.isGrow ? (
                                <div className="text-wrapper w-82 flex justify-between items-center text-white absolute bottom-22 left-20 font-medium">
                                    <motion.p variants={fadeIn("up", {motionDelay : 400})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="text-3xl max-w-32">{card.tagline}</motion.p>
                                    <motion.p variants={fadeIn("up", {motionDelay : 600})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="text-5xl max-w-20 leading-8 text-center">100 <span className="text-sm text-center font-normal">TOPICS</span></motion.p>
                                </div>
                            ) : (
                                <div className="relative -left-10 -top-44 -rotate-90 text-white">
                                    <motion.div variants={fadeIn("down", {motionDelay : card.id * 300})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="w-24 h-auto aspect-square bg-[#1e1f2e]"></motion.div>
                                    <motion.p variants={fadeIn("right", {motionDelay : card.id * 350})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="text-3xl max-w-20 leading-8 text-center -mt-16 ms-5">{card.tagline}</motion.p>
                                </div>
                            )}
                    </motion.figure>
                );
            })}
        </div>
    );
}

export default HomeHeroCard;
