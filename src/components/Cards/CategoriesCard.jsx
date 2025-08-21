/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { fadeIn } from '@animation';
import { Link } from 'react-router-dom';

const CategoriesCard = (props) => {
    const {delay, sourceImage, title, description, isFirst = false, label1, label2, duration, participan, reviews, isHot = false, isCertified = false, isLive = false} = props;
    const refreshPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <motion.figure variants={fadeIn("up", { motionDelay: delay })} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0 }} className={`card group min-w-84 rounded-2xl border bg-radial-[at_100%_-10%] from-0% to-65% backdrop-blur-xs ${isFirst ? "card--first from-green-400/15 to-slate-800/0 border-green-400/15" : "from-slate-800/70 to-slate-800/0 border-slate-800"}`}>
            <figcaption className="card-caption p-6 pt-8 flex flex-col gap-3 overflow-hidden">
                <div className="labels label__wrapper flex items-center gap-2 text-xs">
                    {isHot && (
                        <span className="label min-w-max flex items-center gap-1 bg-linear-to-r from-orange-500 to-red-600 ps-2 pe-3 py-1 rounded-full text-xs font-medium text-white shadow-lg shadow-orange-500/20">
                            <Icon icon="mdi:fire" className="text-base animate-pulse" />
                            <span>Hot Program</span>
                        </span>
                    )}
                    <span className="label min-w-max py-1 px-3 rounded-full bg-white/5 text-white border border-slate-700">{label1}</span>
                    <span className="label line-clamp-1 leading-relaxed py-1 px-3 rounded-full bg-white/5 text-white border border-slate-700">{label2}</span>
                </div>
                <h2 className={`title max-w-56 text-2xl font-medium ${isFirst ? '' : 'text-white' }`}>{title}</h2>
                <p className={`description text-wrap text-sm line-clamp-2 ${isFirst ? 'text-slate-500' : 'text-slate-500'}`}>{description}</p>
                <div className='labels label__wrp flex flex-wrap gap-y-3 gap-x-5 mt-2 text-slate-400'>
                    <span className="label flex items-center gap-1">
                        <Icon icon="mdi:clock-outline" className="text-lg" />
                        <span className="text-xs">{duration} Hours</span>
                    </span>
                    <span className="label flex items-center gap-2">
                        <Icon icon="mdi:account-group" className="text-lg text-blue-400" />
                        <div className="flex">
                            <span className="text-xs font-semibold mr-1">
                                {participan}+
                            </span>
                            <span className="text-[0.6rem] uppercase tracking-wide text-slate-500">
                                Enrolled
                            </span>
                        </div>
                    </span>
                    { isCertified &&  (
                        <div className="label flex items-center gap-2">
                        <Icon icon="mdi:certificate-outline" className="text-lg text-emerald-300" />
                        <span className="text-xs font-medium">Certified Program</span>
                    </div> 
                    )}
                    {isLive && (
                        <div className="label flex items-center gap-1">
                            <Icon icon="mdi:video-wireless-outline" className="text-lg text-red-400 -mt-1" />
                            <span className="text-xs">Live Sessions</span>
                        </div>
                    )}
                    <div className="label flex items-center gap-1">
                        <Icon icon="mdi:star" className="text-yellow-300 text-sm" />
                        <span className="text-xs">{reviews} reviews</span>
                    </div>
                </div>
            </figcaption>
            <div className='image-avatar-button__wrp'>
                <img src={sourceImage} alt={sourceImage} className="w-96 h-auto aspect-video rounded-2xl" />
                <Link to='/categories/entertainment' onClick={refreshPage} className='hidden font-light group-hover:flex text-xs items-center ps-3 pe-1 py-[.4rem] gap-2 rounded-full absolute bottom-3 right-3 bg-black/25 hover:bg-black/30 backdrop-blur-[3px] transition-colors duration-200 ease-in-out cursor-pointer'>
                    Read more <Icon icon="ri:arrow-right-s-line" width="22" height="22" className={`-mt-0.5 group-hover:ms-1 ${isHot ? 'bg-emerald-700' : 'bg-slate-700'} rounded-full animate-pulse`}/>
                </Link>
            </div>
        </motion.figure>
    )
}

export default CategoriesCard
