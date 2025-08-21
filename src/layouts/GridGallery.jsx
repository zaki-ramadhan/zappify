import { fadeIn } from '@animation'; // Alias path dari Vite

import {FlipCard as Card} from '@components/Cards/';

import image1 from '@images/pfp-1.jpg'
import image2 from '@images/pfp-2.jpg'
import image3 from '@images/pfp-3.jpg'
import image4 from '@images/pfp-4.jpg'
import image5 from '@images/pfp-5.jpg'
import image6 from '@images/pfp-6.jpg'
import image7 from '@images/pfp-7.jpg'
import image8 from '@images/pfp-8.jpg'
import image9 from '@images/pfp-9.jpg'
import image10 from '@images/pfp-10.jpg'
import image11 from '@images/pfp-11.jpg'
import image12 from '@images/pfp-12.jpg'
import image13 from '@images/pfp-14.jpg'
// Cybersecurity Sentinel
const GridGallery = () => {
  return (
    <section className="px-20 mt-10 min-h-screen grid grid-flow-col grid-cols-9 grid-rows-22 gap-3">
      
      {/* 1 */}
      <motion.div variants={fadeIn("up", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className='row_wrapper grid grid-rows-subgrid row-span-22'>
        <div className="bg-linear-to-t from-slate-800/20 to-slate-800/5 row-span-5 rounded-lg"></div>
        <Card source={image1} backfaceText = {"Cybersecurity Sentinel"} opacity={'opacity-60'}/>
        
        <figure className="flip-card relative w-full h-full group perspective-[1000px] row-span-11 grid grid-rows-subgrid before:content-[''] before:absolute before:-bottom-6 before:left-1/2 before:translate-x-1/2 before:w-[.8px] before:h-1/2 before:bg-linear-to-b before:from-slate-800/40 before:to-slate-700/0 before:-z-20">
            <div className='flip-card-content__wrp w-full h-full row-start-1 row-span-6 transition-all duration-300 transform-3d group-hover:rotate-y-180'>
                <img src={image2} className={`absolute backface-hidden w-full h-full  rounded-lg opacity-60`}></img>
                {/* bagian belakang flip-card */}
                <div className='flip-card__back-face absolute inset-0 w-full h-full bg-radial-[at_0%_0%] from-slate-900 from-0% to-slate-800/50 to-80% border border-slate-700 rounded-lg backface-hidden rotate-y-180 place-content-center'>
                    <p className='status__wrp text-center text-[10px] font-light p-3 box-border'>
                        Specializes in AI-driven UX design
                    </p>
                </div>
            </div>
        </figure>
      </motion.div>

      {/* 2 */}
      <motion.div variants={fadeIn("down", {motionDelay : 350})} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className='row_wrapper grid grid-rows-subgrid row-span-22'>
        <div className="bg-linear-to-t from-slate-800/20 to-slate-800/5 row-span-3 rounded-lg"></div>
        <Card source={image3} backfaceText = {"Sustainable Architecture Guru"} opacity={'opacity-70'}/>
        <figure className="relative row-span-11 grid grid-rows-subgrid before:content-[''] before:absolute before:-bottom-6 before:left-1/2 before:translate-x-1/2 before:w-[.8px] before:h-1/2 before:bg-linear-to-b before:from-slate-800/40 before:to-slate-700/0 before:-z-20">
          <img src={image4} className={`w-auto h-full row-start-1 row-span-6 rounded-lg opacity-70`}></img>
        </figure>
      </motion.div>
        
      {/* 3 */}
      <motion.div variants={fadeIn("up", {motionDelay : 500})} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className='row_wrapper grid grid-rows-subgrid row-span-22'>
      <div className="bg-linear-to-t from-slate-800/20 to-slate-800/5 row-span-5 rounded-lg"></div>
        <div className="relative row-span-17 grid grid-rows-subgrid before:content-[''] before:absolute before:bottom-14 before:left-1/2 before:translate-x-1/2 before:w-[.8px] before:h-1/2 before:bg-linear-to-b before:from-slate-800/40 before:to-slate-700/0 before:-z-20">
          <img src={image5} className={`w-auto h-full row-start-1 row-span-6 rounded-lg opacity-80 `}></img>
        </div>
      </motion.div>

      {/* 4 */}
        <motion.div variants={fadeIn("down", {motionDelay : 650})} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className='row_wrapper grid grid-rows-subgrid row-span-22'>
            <div className="bg-linear-to-t from-slate-800/20 to-slate-800/5 row-span-3 rounded-lg"></div>
            <div className="relative row-span-19 grid grid-rows-subgrid before:content-[''] before:absolute before:bottom-20 before:left-1/2 before:translate-x-1/2 before:w-[.8px] before:h-1/2 before:bg-linear-to-b before:from-slate-800/40 before:to-slate-700/0 before:-z-20">
                <img src={image6} className={`w-auto h-full row-start-1 row-span-6 rounded-lg opacity-90`}></img>
            </div>
        </motion.div>

        {/* 5 */}
        <motion.div variants={fadeIn("up", {motionDelay : 800})} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className='row_wrapper grid grid-rows-subgrid row-span-22'>
            <div className="bg-linear-to-t from-slate-800/20 to-slate-800/5 row-span-5 rounded-lg"></div>
            <div className="relative row-span-17 grid grid-rows-subgrid before:content-[''] before:absolute before:bottom-12 before:left-1/2 before:translate-x-1/2 before:w-[.8px] before:h-1/2 before:bg-linear-to-b before:from-slate-800/40 before:to-slate-700/0 before:-z-20">
            <img src={image7} className={`w-auto h-full row-start-1 row-span-6 rounded-lg`}></img>
            </div>
        </motion.div>

      {/* 6 */}
      <motion.div variants={fadeIn("down", {motionDelay : 650})} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className='row_wrapper grid grid-rows-subgrid row-span-22'>
        <div className="bg-linear-to-t from-slate-800/20 to-slate-800/5 row-span-3 rounded-lg"></div>
        <div className="relative row-span-19 grid grid-rows-subgrid before:content-[''] before:absolute before:bottom-20 before:left-1/2 before:translate-x-1/2 before:w-[.8px] before:h-1/2 before:bg-linear-to-b before:from-slate-800/40 before:to-slate-700/0 before:-z-20">
          <img src={image8} className={`w-auto h-full row-start-1 row-span-6 rounded-lg opacity-90`}></img>
        </div>
      </motion.div>
        
        {/* 7 */}
        <motion.div variants={fadeIn("up", {motionDelay : 500})} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className='row_wrapper grid grid-rows-subgrid row-span-22'>
            <div className="bg-linear-to-t from-slate-800/20 to-slate-800/5 row-span-5 rounded-lg"></div>
            <div className="relative row-span-17 grid grid-rows-subgrid before:content-[''] before:absolute before:bottom-14 before:left-1/2 before:translate-x-1/2 before:w-[.8px] before:h-1/2 before:bg-linear-to-b before:from-slate-800/40 before:to-slate-700/0 before:-z-20">
            <img src={image9} className={`w-auto h-full row-start-1 row-span-6 rounded-lg opacity-80`}></img>
            </div>
        </motion.div>

        {/* 8 */}
        <motion.div variants={fadeIn("down", {motionDelay : 350})} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className='row_wrapper grid grid-rows-subgrid row-span-22'>
            <div className="bg-linear-to-t from-slate-800/20 to-slate-800/5 row-span-3 rounded-lg"></div>
            <Card source={image10} backfaceText = {"EdTech Learning Architect"} opacity={'opacity-70'}/>
            <div className="relative row-span-11 grid grid-rows-subgrid before:content-[''] before:absolute before:-bottom-6 before:left-1/2 before:translate-x-1/2 before:w-[.8px] before:h-1/2 before:bg-linear-to-b before:from-slate-800/40 before:to-slate-700/0 before:-z-20">
            <img src={image11} className={`w-auto h-full row-start-1 row-span-6 rounded-lg opacity-70`}></img>
            </div>
        </motion.div>
        
        {/* 9 */}
        <motion.div variants={fadeIn("up", {motionDelay : 200})} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className='row_wrapper grid grid-rows-subgrid row-span-22'>
            <div className="bg-linear-to-t from-slate-800/20 to-slate-800/5 row-span-5 rounded-lg"></div>
            <Card source={image12} backfaceText = {"Neuro-Marketing Alchemist"} opacity={'opacity-70'}/>
            <div className="relative row-span-11 grid grid-rows-subgrid before:content-[''] before:absolute before:-bottom-6 before:left-1/2 before:translate-x-1/2 before:w-[.8px] before:h-1/2 before:bg-linear-to-b before:from-slate-800/40 before:to-slate-700/0 before:-z-20">
            <img src={image13} className={`w-auto h-full row-start-1 row-span-6 rounded-lg opacity-60`}></img>
            </div>
        </motion.div>
      </section>
  )
}

export default GridGallery
