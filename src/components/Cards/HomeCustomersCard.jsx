/* eslint-disable no-unused-vars */
import { useState } from "react";
// motion
import {motion} from 'framer-motion';
// animation
import {fadeIn} from '@animation'; // alias dari vite.config

// path alias dari vite.config
    import img1 from "@images/profile-8.jpg";
    import img2 from "@images/profile-3.jpg";
    import img3 from "@images/profile-7.jpg";
    import img4 from "@images/profile-5.jpg";
    import img5 from "@images/me.jpg";

import { useRef } from "react";

const HomeCustomerCards
 = () => {
    const constraintsRef = useRef(null); // kaya buat ngasi batesan ke elemen yg bisa di drag biar ga bisa out of their parent
    const [users, setUser] = useState([
        {
            id : 1,
            name : "John Smith",
            position : "CEO",
            img : img1,
            message : "Our collaboration with this team has been nothing short of extraordinary. Their commitment to excellence and innovative solutions have significantly boosted our company's performance. Highly recommended!" 
        },
        {
            id : 2,
            name : "Emma Johnson",
            position : "Marketing Director",
            img : img2,
            message : "The services provided have exceeded our expectations. The team's strategic approach and attention to detail have remarkably enhanced our marketing efforts. Absolutely fantastic!" 
        },
        {
            id : 3,
            name : "Michael Brown",
            position : "Product Manager",
            img : img3,
            message : "Working with this talented group has been a game-changer for our product development. Their creativity and technical expertise have driven our product to new heights. Truly impressive!" 
        },
        {
            id : 4,
            name : "Zaki Ramadhan",
            position : "Developer",
            img : img5,
            message : "An exceptional experience from start to finish. Their technical prowess and innovative approach have streamlined our IT infrastructure, leading to improved efficiency and performance. Highly commendable!" 
        },
        {
            id : 5,
            name : "Sophia Miller",
            position : "Human Resources Manager",
            img : img4,
            message : "Their professionalism and dedication to employee well-being have positively impacted our workplace environment. The HR solutions offered are top-notch and have made a real difference!" 
        },
    ]);

    return (
        <div ref={constraintsRef} className='cards card__wrapper relative flex gap-7 justify-start items-center place-self-start'>
            {users.map((user)=>(
                // kalo menggunakan map harus ada key nya pada elemennya
                <motion.figure drag dragConstraints={constraintsRef}  dragTransition={{ timeConstant: 3000, bounceStiffness: 300 }} key={user.id} variants={fadeIn("up", {motionDelay : user.id * 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className='card w-64 h-52 p-6 rounded-xl dark:bg-white/5 dark:shadow-stone-900/30 dark:border-[#374151] bg-white/20 shadow-stone-200/30 border-slate-200 backdrop-blur-md border flex flex-col justify-between items-start shadow-xl before:content-["\""] before:absolute before:text-[7rem] before:font-bold before:text-[#95c681]/10 before:font-gothic before:top-1 before:left-1 before:blur-[1.4px] before:-z-10'>
                    <p className="message text-sm first-line:text-[#374151] dark:first-line:text-slate-300 text-slate-500 line-clamp-4 z-30">
                        {user.message}
                    </p>
                    <footer className="flex items-center justify-center gap-3">
                    <img src={user.img} className="w-11 h-auto aspect-square rounded-full"/>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm text-[#374151] dark:text-white font-medium">{user.name}</h3>
                            <p className="text-xs text-[#95c681] line-clamp-1">{user.position}</p>
                        </div>
                    </footer>
                </motion.figure>
            ))}
        </div>
    )
}

export default HomeCustomerCards
;