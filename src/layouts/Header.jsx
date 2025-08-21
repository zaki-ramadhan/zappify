import { useDarkMode } from "@hooks/DarkMode"; // Pastikan path sesuai

import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { fadeIn } from '@animation'; // Alias path dari Vite

import logo from '@images/zappify.svg'

const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode(); // Gunakan context

    const refreshPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    // daftar route valid / terdaftar
    const validUrl = ["/", "/login", "/register", "/find-passion", "/categories", "/pricing", "/categories/entertainment"];
    const currentUrl = useLocation(); //url saat ini 

    const inLogin = currentUrl.pathname === "/login";
    const inRegist = currentUrl.pathname === "/register";

    // pengkondisian jika halaman adalah login/register maka  tidak akan menampilkan elemen ini :
    const ConditionalLinks = () => {
        if (inLogin || inRegist) return null;
        else if (!validUrl.includes(currentUrl.pathname)) return null; 
    
        // daftar link
        const links = [
            { path: "/find-passion", label: "Find Passion" },
            { path: "/categories", label: "Categories" },
            { path: "/customer", label: "Customer" },
            { path: "/account", label: "Account" }
        ];
    
        return (
            <ul className="flex justify-start gap-10 dark:text-slate-500 text-slate-600 -ms-50">
                {links.map((link) => (
                    //pengecekan link mana yang aktif berdasarkan dari url (saat ini)
                    <li key={link.path}>
                        <Link to={link.path} className={`dark:hover:text-white hover:text-black duration-150 ease-in-out ${currentUrl.pathname === link.path ? "text-black dark:text-white" : null}`}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    };    

    const SwitchButton = () => {
        // Cek apakah URL valid
        if (!validUrl.includes(currentUrl.pathname)) return null;
        return (
            <>
                <Link to={inLogin ? "/register" : "/login"} className="p-1 rounded-full text-[#374151] dark:text-white hover:border-slate-900/30 transition-colors duration-500">
                    {inLogin ? "Register" : "Login"}
                </Link>
                <Link to="/pricing" className="px-11 py-2 rounded-full bg-slate-800 hover:bg-[#374151] duration-150 text-white">Free trial</Link>
            </>
        );
    };

    return (
        <motion.header variants={fadeIn("down", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className="container py-4 px-20 text-sm flex justify-between items-center backdrop-blur-md text-[#374151] dark:text-white border-b dark:border-slate-900/70 border-stone-50/70 transition-colors duration-500">
            <span onClick={refreshPage} className="app-name font-bold text-xl cursor-pointer select-none">
                <Link to="/" className="flex items-center size-6"><img src={logo}/>Z<span className="font-['Space_Mono']">a</span>ppify.</Link>
            </span>
            <nav>
                <ConditionalLinks/>
            </nav>
            <div className="flex gap-4 items-center">
                <SwitchButton/> {/*muncul hanya kalau halaman login / register*/}
                <button onClick={toggleDarkMode}  className="p-2 rounded-full transition-colors duration-500 dark:bg-slate-800 dark:hover:bg-[#374151] bg-white hover:bg-gray-100">
                    {darkMode ? '🌜' : '☀️'}
                </button>
            </div>
        </motion.header>
    );
};

export default Header;
