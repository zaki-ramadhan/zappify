/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";

const ListSkills = ({icon, iconColor, title, content, showLine}) => {
    const Line = showLine ? "relative after:content-[''] after:absolute after:-bottom-12 after:left-1/2 after:translate-x-1/2 after:w-[.8px] after:h-10 after:bg-slate-500" : null;

    return (
        <>
            <div className="skill__wrapper flex  gap-3 items-start justify-start ">
                <div className={`icon__wrapper ${Line}`}>
                    <Icon icon={icon} width="42" height="42" className={`p-3 rounded-full ${iconColor} shadow-md dark:bg-slate-200 dark:shadow-[#374151]/70 bg-white shadow-slate-200/40`}/>
                </div>
                <div className="texts flex flex-col gap-2">
                    <h2 className=" font-medium">{title}</h2>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{content}</p>
                </div>
            </div>
        </>
    )
}

export default ListSkills;