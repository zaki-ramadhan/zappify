import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { fadeIn } from '@animation';
import Avatar from '@common/Avatar'

import image1 from '@images/profile-5.jpg'
import image2 from '@images/profile-2.jpg'
import image3 from '@images/profile-3.jpg'
import image4 from '@images/profile-4.jpg'
import image5 from '@images/profile-6.jpg'

const UserRatings = () => {
  return (
    <div className='user-rating__wrp flex items-center justify-center gap-3'>
        <motion.div variants={fadeIn("up", {motionDelay : 600})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className='avatars avatar__wrp flex flex-row-reverse justify-center'>
            <Avatar source={image1}></Avatar>
            <Avatar source={image2}></Avatar>
            <Avatar source={image3}></Avatar>
            <Avatar source={image4}></Avatar>
            <Avatar source={image5}></Avatar>
        </motion.div>
        
        <div className='stars-text__wrp flex flex-col gap-2'>
            <motion.div variants={fadeIn("up", {motionDelay : 800})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className='stars flex gap-1 text-[#e8e166]'>
                <Icon icon="solar:star-bold" width="18" height="18" />
                <Icon icon="solar:star-bold" width="18" height="18" />
                <Icon icon="solar:star-bold" width="18" height="18" />
                <Icon icon="solar:star-bold" width="18" height="18" />
                <Icon icon="solar:star-bold" width="18" height="18" />
            </motion.div>  
            <motion.p variants={fadeIn("up", {motionDelay : 900})} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.5}} className='text-slate-500 text-xs'>from 300+ happy customers</motion.p>
        </div>
    </div>
  )
}

export default UserRatings
