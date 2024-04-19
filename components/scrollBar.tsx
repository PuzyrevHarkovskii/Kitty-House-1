'use client'

import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const App: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const scrollListener = () => {
      controls.start({ scaleX: window.scrollY / (document.body.scrollHeight - window.innerHeight) });
    };

    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, [controls]);

  return (
    <>
      <motion.div
        className="progress-bar"
        animate={controls}
        style={{ originX: 0, scaleX: 0, height: 4, backgroundColor: "#0070f3" }}
      />
    </>
  );
};

export default App;
