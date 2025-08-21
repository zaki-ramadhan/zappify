/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
// import { motion } from 'framer-motion';
// import { fadeIn } from '@animation';

const PricingCard = (props) => {
    const { delay, title, description, price, level, iconSrc } = props;
    const { scaleUp = false, gradientColor = 'from-slate-800/70 to-slate-800/0', features = [] } = props;
    return (
        // <motion.figure variants={fadeIn("up", { motionDelay: delay })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className={`card h-max relative bg-radial-[at_100%_-10%] ${gradientColor} ${scaleUp ? 'scale-120 z-50  border-emerald-900/80' : 'z-10  border-slate-800'} mx-2 from-0% to-65% rounded-2xl p-6 border flex flex-col gap-4 backdrop-blur-md`}>
        //     {scaleUp && <span className={`py-2 px-4 rounded-full bg-slate-600/40 border border-slate-500/60 scale-80 text-xs absolute top-6 right-6`}>Most popular</span>}
        //     <Icon icon={iconSrc} width="40" height="40" className='p-2 text-[#95c681] rounded-lg bg-[#95c681]/10' />
        //     <figcaption>
        //         <div className='title'>
        //             <h2 className='text-lg mb-2'>{title}</h2>
        //             <p className={`${scaleUp ? 'text-xs' : 'text-sm'} text-slate-500`}>{description}</p>
        //         </div>
        //         <p className={`price mt-3 ${scaleUp ? 'text-4xl font-medium' : 'text-3xl'} border-b border-slate-600 pb-4 after:content-['/\\0020month'] after:text-sm after:font-medium after:text-slate-600 after:ml-1`}>${price}</p>
        //         <ul className='features text-xs text-slate-500 flex flex-col justify-start gap-3 mt-3'>
        //             {level !== "basic" && (
        //                 <li className='text-slate-300'>
        //                     {level === "pro"
        //                         ? "Everything in personal, plus..."
        //                         : level === "vip"
        //                             ? "Everything in professional, plus..."
        //                             : null}
        //                 </li>
        //             )}
        //             {features.map((feature, index) => (
        //                 <li key={index} className={`flex items-center gap-2 ${feature.available ? 'text-slate-400/80' : 'text-slate-700'}`}>
        //                     <Icon icon={feature.available ? "entypo:check" : "entypo:cross"} width="14" height="14" className={feature.available ? 'text-[#95c681]' : 'text-slate-700'} />
        //                     {feature.name}
        //                 </li>
        //             ))}
        //         </ul>
                
        //         <button className={`w-full text-sm mt-4 ${scaleUp ? 'text-[#95c681] bg-[#95c6810d] hover:bg-[#95c6811e] text-xs' : 'text-slate-500 hover:text-slate-400 hover:bg-slate-800 bg-slate-800/70'} p-2 mt-2 rounded-full cursor-pointer transition-colors duration-300`}>Buy {title} License</button>
        //         {level === "basic" && (
        //             <button className="w-full bg-[#779d68] hover:bg-[#688a5b] text-xs p-2 mt-2 rounded-full cursor-pointer transition-colors duration-300">Free trial for 7 days</button>
        //         )}
        //         {level === 'vip' && <span className='additional-warning block mt-3 text-xs text-center text-slate-500'>or contact Sales</span>}
        //     </figcaption>
        // </motion.figure>

        <figure className={`card h-max relative bg-radial-[at_100%_-10%] ${gradientColor} ${scaleUp ? 'scale-120 z-50  border-emerald-900/80' : 'z-10  border-slate-800'} mx-2 from-0% to-65% rounded-2xl p-6 border flex flex-col gap-4 backdrop-blur-md`}>
            {scaleUp && <span className={`py-2 px-4 rounded-full bg-slate-600/40 border border-slate-500/60 scale-80 text-xs absolute top-6 right-6`}>Most popular</span>}
            <Icon icon={iconSrc} width="40" height="40" className='p-2 text-[#95c681] rounded-lg bg-[#95c681]/10' />
            <figcaption>
                <div className='title'>
                    <h2 className='text-lg mb-2'>{title}</h2>
                    <p className={`${scaleUp ? 'text-xs' : 'text-sm'} text-slate-500`}>{description}</p>
                </div>
                <p className={`price mt-3 ${scaleUp ? 'text-4xl font-medium' : 'text-3xl'} border-b border-slate-600 pb-4 after:content-['/\\0020month'] after:text-sm after:font-medium after:text-slate-600 after:ml-1`}>${price}</p>
                <ul className='features text-xs text-slate-500 flex flex-col justify-start gap-3 mt-3'>
                    {level !== "basic" && (
                        <li className='text-slate-300'>
                            {level === "pro"
                                ? "Everything in personal, plus..."
                                : level === "vip"
                                    ? "Everything in professional, plus..."
                                    : null}
                        </li>
                    )}
                    {features.map((feature, index) => (
                        <li key={index} className={`flex items-center gap-2 ${feature.available ? 'text-slate-400/80' : 'text-slate-700'}`}>
                            <Icon icon={feature.available ? "entypo:check" : "entypo:cross"} width="14" height="14" className={feature.available ? 'text-[#95c681]' : 'text-slate-700'} />
                            {feature.name}
                        </li>
                    ))}
                </ul>
                
                <button className={`w-full text-sm mt-4 ${scaleUp ? 'text-[#95c681] bg-[#95c6810d] hover:bg-[#95c6811e] text-xs' : 'text-slate-500 hover:text-slate-400 hover:bg-slate-800 bg-slate-800/70'} p-2 mt-2 rounded-full cursor-pointer transition-colors duration-300`}>Buy {title} License</button>
                {level === "basic" && (
                    <button className="w-full bg-[#779d68] hover:bg-[#688a5b] text-xs p-2 mt-2 rounded-full cursor-pointer transition-colors duration-300">Free trial for 7 days</button>
                )}
                {level === 'vip' && <span className='additional-warning block mt-3 text-xs text-center text-slate-500'>or contact Sales</span>}
            </figcaption>
        </figure>
    )
}

export default PricingCard;
