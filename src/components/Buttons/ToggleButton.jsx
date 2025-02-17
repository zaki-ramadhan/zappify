/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion } from 'framer-motion';

const ToggleButton = (props) => {
  const {children} = props;
  const [isOn, setIsOn] = useState(true  );
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  const changeToMonthly = () => {
    setIsOn(false);
  };

  const changeToAnnually = () => {
    setIsOn(true);
  };

  return (
    <div className="flex items-center gap-4 select-none">
      <p className={`text-sm ${isOn ? 'text-slate-600' : 'text-gray-300'}`} onClick={changeToMonthly}>Monthly</p>
      <div className="relative" onClick={handleToggle}>
        <input type="checkbox" checked={isOn} onChange={handleToggle} className="sr-only"/>
        <div className={`block w-14 h-8 rounded-full ${ isOn ? 'bg-[#96ca81] shadow-glow-green' : 'bg-gray-300'}`}></div>
        <motion.div layout className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md ${isOn ? 'transform translate-x-full' : '' }`} initial={{ x: 0 }} animate={{ x: isOn ? 0 : 0 }} transition={{ type: 'spring', stiffness: 700, damping: 30 }}></motion.div>
      </div>
      <p className={`text-sm relative ${!isOn ? 'text-slate-600' : 'text-[#96ca81] text-glow'}`} onClick={changeToAnnually}>Annually{children}</p>
    </div>
  );
};

export default ToggleButton;
