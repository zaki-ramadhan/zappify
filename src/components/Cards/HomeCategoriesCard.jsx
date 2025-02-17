/* eslint-disable no-unused-vars */
// motion
import {motion} from 'framer-motion';
import { Icon } from "@iconify/react"; //iconify sudah terinstall (pnpm i --save-dev @iconify/react)

// animation
import {fadeIn} from '@animation'; // alias dari vite.config
import { useState } from 'react';

// path alias dari vite.config
import salesM from "@images/coin.jpg";
import dataA from "@images/data-analytics.jpg";
import copyw from "@images/copywriting.jpg";
import designA from "@images/design-art.jpg";


const HomeCategoriesCard = () => {
    const [cards, setCard] = useState([
        { id : 1, title : "Sales Marketing", pict : salesM, time : "4 month"},
        { id : 2, title : "Data analytics", pict : dataA, time : "3 month"},
        { id : 3, title : "Copywriting Pro", pict : copyw, time : "2 month"},
        { id : 4, title : "Design art", pict : designA, time : "4 month"},
    ]) 
    return (
        <div className="feature-card__wrapper grid grid-cols-4 gap-6">
            {cards.map((card)=> (
                <motion.figure key={card.id} variants={fadeIn("up", {motionDelay : card.id * 205})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="card feature-card group relative flex flex-col w-auto">
                    <Icon icon="teenyicons:arrow-up-solid" width="36" height="36" className='hidden p-2 rounded-full absolute top-3 right-3 rotate-45 text-[#374151] dark:text-white bg-white hover:bg-slate-100 dark:bg-black/10 dark:hover:bg-black/20 group-hover:block duration-200'/>
                    <img src={card.pict} className="rounded-2xl"/>
                    <figcaption className="py-2 flex flex-col gap-1">
                        <h2 className=" text-xl text-[#374151] dark:text-white font-medium">{card.title}</h2>
                        <p className="text-xs  dark:text-slate-500 text-slate-400 font-medium">{card.time}</p>
                    </figcaption>
                </motion.figure>

            ))}
        </div>
    )
}

export default HomeCategoriesCard;