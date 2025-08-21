import { Icon } from '@iconify/react';
// import { motion } from 'framer-motion';
// import { fadeIn } from '@animation'; // Alias path dari Vite

import {ToggleButton} from '@components/Buttons/';
import {PricingCard as Card} from '@components/Cards';
import UserRatings from './UserRatings';
import { HeroPricingSection as Hero} from '@components/Sections';

const PricingMain = () => {
  return (
    // <main className="container relative py-24 flex flex-col gap-10">
    //     <motion.span variants={fadeIn("up", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0}} className='label w-fit -mb-4 text-xs text-slate-400 py-2 px-5 border border-t-slate-600 border-x-slate-700 border-b-slate-700 hover:bg-slate-600/20 hover:text-slate-300 hover:border-t-slate-500 backdrop-blur-xs transition-colors duration-500 rounded-full place-self-center'>Limited-time offer: Save 20% on annual plans.</motion.span>
    //     <Hero/>
    //     <div className="benefits__wrp text-slate-500 dark:text-slate-500 place-self-center">
    //     <ul className=' list-disc flex gap-6 list-inside text-sm'>
    //         <motion.li variants={fadeIn("up", { motionDelay: 500 })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.5 }}>
    //             <Icon icon="healthicons:money-bag" width="24" height="24"  className='inline -ms-1 me-2'/>
    //             One-time purchased
    //         </motion.li>
    //         <motion.li variants={fadeIn("up", { motionDelay: 650 })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.5 }}>
    //             <Icon icon="la:list-alt" width="24" height="24"  className='inline -ms-1 me-2'/>
    //             All the features in every plan
    //         </motion.li>
    //         <motion.li variants={fadeIn("up", { motionDelay: 800 })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.5 }}>
    //             <Icon icon="fluent:wallet-credit-card-28-filled" width="22" height="22"  className='inline -ms-1 me-2'/>
    //             30-day Money Back Guarantee
    //         </motion.li>
    //     </ul>

    //     </div>
    //     <motion.div variants={fadeIn("down", {motionDelay : 600})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0}} className=" not-dark:hidden size-[140vw] rounded-full bg-radial from-emerald-500/60  from-0% via-emerald-500/20 via-25% to-emerald-400/0 to-65% absolute -top-full left-1/2 -translate-x-1/2 -z-10"></motion.div>

    //     <UserRatings/>

    //     <motion.div variants={fadeIn("up", {motionDelay : 1000})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className='button switch-cards__wrp place-self-center'>
    //         <ToggleButton/>
    //     </motion.div>
    //     <div className='cards h-max mt-20 card__wrp px-20 grid grid-cols-3 gap-6'>
    //         {/* Card Professional */}
    //         <Card level={"pro"} iconSrc={"fluent:people-12-filled"} delay={450} price={25.3} title="Professional" description="Ideal for small teams and businesses" features={[{ name: "Priority email support", available: true }, { name: "Extended storage (50GB)", available: true }, { name: "Team collaboration tools", available: true }, { name: "Customizable templates", available: true }, { name: "Advanced analytics", available: true }, { name: "Access to exclusive webinars and training", available: true }, { name: "24/7 dedicated support", available: false }, { name: "Unlimited storage", available: false }]} />

    //         {/* Card Personal */}
    //         <Card level={"basic"} iconSrc={"gridicons:user"} gradientColor={"from-emerald-600/30 to-slate-800/0"} scaleUp delay={300} price={3.900} title="Personal" description="For individuals who want to boost productivity" features={[{ name: "Access to basic tools", available: true }, { name: "Limited storage (5GB)", available: true }, { name: "Community support", available: true }, { name: "Access to basic templates", available: true }, { name: "Weekly updates", available: true }, { name: "Priority customer support", available: false }, { name: "Advanced analytics dashboard", available: false }, { name: "Customizable workflows", available: false }, { name: "Integration with third-party apps", available: false }, { name: "Exclusive access to webinars and tutorials", available: false }]} />

    //         {/* Card Enterprise */}
    //         <Card level={"vip"} iconSrc={"icon-park-twotone:workbench"} delay={600} price={49.900} title="Enterprise" description="Perfect for large organizations with advanced needs" features={[{ name: "24/7 dedicated support", available: true }, { name: "Unlimited storage", available: true }, { name: "Enterprise-level security", available: true }, { name: "Integration with third-party tools", available: true }, { name: "Real-time analytics and reporting", available: true }, { name: "Access to basic tools", available: false }, { name: "Community support", available: false }]} />
    //     </div>
    // </main>
    <main className="container relative py-24 flex flex-col gap-10">
        <span  className='label w-fit -mb-4 text-xs text-slate-400 py-2 px-5 border border-t-slate-600 border-x-slate-700 border-b-slate-700 hover:bg-slate-600/20 hover:text-slate-300 hover:border-t-slate-500 backdrop-blur-xs transition-colors duration-500 rounded-full place-self-center'>Limited-time offer: Save 20% on annual plans.</span>
        <Hero/>
        <div className="benefits__wrp text-slate-500 dark:text-slate-500 place-self-center">
        <ul className=' list-disc flex gap-6 list-inside text-sm'>
            <li>
                <Icon icon="healthicons:money-bag" width="24" height="24"  className='inline -ms-1 me-2'/>
                One-time purchased
            </li>
            <li>
                <Icon icon="la:list-alt" width="24" height="24"  className='inline -ms-1 me-2'/>
                All the features in every plan
            </li>
            <li>
                <Icon icon="fluent:wallet-credit-card-28-filled" width="22" height="22"  className='inline -ms-1 me-2'/>
                30-day Money Back Guarantee
            </li>
        </ul>

        </div>
        <div  className=" not-dark:hidden size-[140vw] rounded-full bg-radial from-emerald-500/60  from-0% via-emerald-500/20 via-25% to-emerald-400/0 to-65% absolute -top-full left-1/2 -translate-x-1/2 -z-10"></div>

        <UserRatings/>

        <div className='button switch-cards__wrp place-self-center'>
            <ToggleButton/>
        </div>
        <div className='cards h-max mt-20 card__wrp px-20 grid grid-cols-3 gap-6'>
            {/* Card Professional */}
            <Card level={"pro"} iconSrc={"fluent:people-12-filled"} delay={450} price={25.3} title="Professional" description="Ideal for small teams and businesses" features={[{ name: "Priority email support", available: true }, { name: "Extended storage (50GB)", available: true }, { name: "Team collaboration tools", available: true }, { name: "Customizable templates", available: true }, { name: "Advanced analytics", available: true }, { name: "Access to exclusive webinars and training", available: true }, { name: "24/7 dedicated support", available: false }, { name: "Unlimited storage", available: false }]} />

            {/* Card Personal */}
            <Card level={"basic"} iconSrc={"gridicons:user"} gradientColor={"from-emerald-600/30 to-slate-800/0"} scaleUp delay={300} price={3.900} title="Personal" description="For individuals who want to boost productivity" features={[{ name: "Access to basic tools", available: true }, { name: "Limited storage (5GB)", available: true }, { name: "Community support", available: true }, { name: "Access to basic templates", available: true }, { name: "Weekly updates", available: true }, { name: "Priority customer support", available: false }, { name: "Advanced analytics dashboard", available: false }, { name: "Customizable workflows", available: false }, { name: "Integration with third-party apps", available: false }, { name: "Exclusive access to webinars and tutorials", available: false }]} />

            {/* Card Enterprise */}
            <Card level={"vip"} iconSrc={"icon-park-twotone:workbench"} delay={600} price={49.900} title="Enterprise" description="Perfect for large organizations with advanced needs" features={[{ name: "24/7 dedicated support", available: true }, { name: "Unlimited storage", available: true }, { name: "Enterprise-level security", available: true }, { name: "Integration with third-party tools", available: true }, { name: "Real-time analytics and reporting", available: true }, { name: "Access to basic tools", available: false }, { name: "Community support", available: false }]} />
        </div>
    </main>
  )
}

export default PricingMain
