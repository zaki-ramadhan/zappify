// animation.js
export const fadeIn = (direction = "up", { motionDelay = 0 } = {}) => {
    return {
      hidden: {
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        opacity: 0, // tambahkan opacity: 0 pada state hidden
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 0.8,
          delay: motionDelay / 1000, // konversi ms ke detik
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };