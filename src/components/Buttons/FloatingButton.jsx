import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', checkScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <button ref={buttonRef} onClick={handleScroll} className={`button fixed bottom-10 right-10 p-3 rounded-full bg-slate-800 animate-pulse hover:animate-none hover:bg-slate-700 transition-colors duration-150 ease-in-out text-white cursor-pointer z-99 ${isVisible ? 'block' : 'hidden'}`}>
      <Icon icon="akar-icons:arrow-up" width="24" height="24" />
    </button>
  );
};

export default FloatingButton;