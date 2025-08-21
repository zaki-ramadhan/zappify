/* eslint-disable no-unused-vars */
import { Icon } from "@iconify/react";
// motion
import {motion} from 'framer-motion';
// animation
import {fadeIn} from '@animation'; // path alias dari vite.config
import logo from '@images/zappify.svg'
import { Link, useLocation } from "react-router-dom";

const Footer = (props) => {
    const currentUrl = useLocation();
    const isHomePage = currentUrl.pathname === "/";

    const refreshPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`container w-full mt-10 border-t dark:border-slate-900/30 ${!isHomePage ? 'bg-slate-800/20 py-1' : 'py-2'} backdrop-blur-md`}>
            {isHomePage && (
                <div className="footer__top px-20 grid grid-cols-3 place-content-start py-14">
                    <motion.p variants={fadeIn("right", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="app-name font-bold text-[#374151] dark:text-white text-xl flex"><img src={logo} className="size-6 translate-y-1"/>Z<span className="font-['Space_Mono']">a</span>ppify.</motion.p>
                    <motion.ul variants={fadeIn("up", {motionDelay : 400})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="columns-2 text-sm text-slate-500 -ms-10">
                        <li onClick={refreshPage} className="mb-6 hover:text-[#374151] dark:hover:text-white duration-200">
                            <Link to="/find-passion">Find passion</Link>
                        </li>
                        <li onClick={refreshPage} className="hover:text-[#374151] dark:hover:text-white duration-200">
                            <Link to="skills">Skills</Link>
                        </li>
                        <li onClick={refreshPage} className="-ms-8 mb-6 hover:text-[#374151] dark:hover:text-white duration-200">
                            <Link to="/categories">Categories</Link>
                        </li>
                        <li onClick={refreshPage} className="-ms-8 hover:text-[#374151] dark:hover:text-white duration-200">
                            <Link to="/customer">Customer</Link>
                        </li>
                    </motion.ul>
                    <motion.form variants={fadeIn("left", {motionDelay : 500})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="flex flex-col gap-3 -mt-1 ms-28">
                        <h2 className="font-medium">Join our community</h2>
                        <div className="input__wrapper flex justify-start items-center">
                            <input className="w-[29ch] p-4 border text-xs dark:bg-slate-800 dark:text-slate-300 dark:border-[#374151] dark:focus:border-slate-500 text-slate-400 border-slate-300 focus:outline-hidden" placeholder="Enter your email" />
                            <button className="bg-[#95c681] text-[#374151] p-[.67rem] border-2 border-[#95c681] font-semibold text-base">GO</button>
                        </div>
                    </motion.form>
                </div>
            )}

            <div className={`footer__bottom py-3 px-20 flex justify-between items-center  ${isHomePage ? 'translate-y-1' : ''}`}>
                {!isHomePage && (
                    <motion.span onClick={refreshPage} variants={fadeIn("right", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}}>
                        <Link to="/" className="app-name font-semibold text-[#374151] dark:text-white flex"><img src={logo} className="size-4 mr-1 translate-y-1"/>Z<span className="font-['Space_Mono']">a</span>ppify.</Link>
                    </motion.span>
                )}
                <motion.p variants={fadeIn(isHomePage ? "right" : "left", 400)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="text-xs text-slate-500">&copy; 2025 Zappify. All rights reserved.</motion.p>
                {isHomePage && (
                    <motion.div variants={fadeIn("left", 400)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="flex justify-center gap-3 mt-2 text-[#374151]">
                        <Icon icon="ri:facebook-fill" width="32" height="32" className="dark:text-slate-400 dark:border-[#374151] border-slate-200 p-1 rounded-full border "/>
                        <Icon icon="ant-design:behance-outlined" width="32" height="32" className="dark:text-slate-400 dark:border-[#374151] border-slate-200 p-1 rounded-full border "/>
                        <Icon icon="line-md:linkedin" width="32" height="32" className="dark:text-slate-400 dark:border-[#374151] border-slate-200 p-1 rounded-full border "/>
                        <Icon icon="ion:logo-instagram" width="32" height="32" className="dark:text-slate-400 dark:border-[#374151] border-slate-200 p-1 rounded-full border "/>
                        <Icon icon="ph:dribbble-logo-light" width="32" height="32" className="dark:text-slate-400 dark:border-[#374151] border-slate-200 p-1 rounded-full border "/>
                    </motion.div>
                )}
            </div>
        </footer>
    );
};

export default Footer;
