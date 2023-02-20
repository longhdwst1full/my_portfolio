import React, { useState, useEffect, Fragment } from "react";
import { HiArrowUp } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";


const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    setIsVisible(scrollPosition > 300);
  }, [scrollPosition]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAnimationComplete = () => {
    setIsVisible(false);
  };

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.2 },
    },
  };

  return (
    <Fragment>
      {isVisible && (
        <motion.button
          className="fixed bottom-5 right-5 z-50 p-2 rounded-md bg-gray-600 dark:bg-gray-600 text-white shadow-lg focus:outline-none"
          onClick={handleClick}
          animate={controls}
          variants={variants}
          onAnimationComplete={handleAnimationComplete}
        >
          <HiArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </Fragment>
  );
};

export default BackToTop;
