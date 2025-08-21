import { Icon } from '@iconify/react';
// import { motion } from 'framer-motion';
// import { fadeIn } from '@animation'; // Alias path dari Vite

const HeroPricingSection = () => {
  return (
    // <section className='hero__section relative text-5xl text-center select-none'>
    //     <motion.h1 variants={fadeIn("up", {motionDelay : 400})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0}} className="text-[#374151] font-medium dark:text-white transition-colors duration-500"> Small investment</motion.h1>
    //     <motion.h1 variants={fadeIn("up", {motionDelay : 600})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className="text-[#89be74] font-semibold">Huge productivity boo<Icon icon="bi:lightning-fill" width="40" height="40" className="inline text-[#e8e166] -mx-1 translate-y-1"/>t</motion.h1>
    // </section>
    
    <section className='hero__section relative text-5xl text-center select-none'>
        <h1 className="text-[#374151] font-medium dark:text-white transition-colors duration-500"> Small investment</h1>
        <h1 className="text-[#89be74] font-semibold">Huge productivity boo<Icon icon="bi:lightning-fill" width="40" height="40" className="inline text-[#e8e166] -mx-1 translate-y-1"/>t</h1>
    </section>
  )
}

export default HeroPricingSection
