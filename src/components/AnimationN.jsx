import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimationN() {
  const [isVisible, setVisible] = useState(true);

  const rotateSection = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <motion.button
        onClick={rotateSection}
        className="p-4 px-8 font-bold text-2xl bg-slate-200 rounded text-slate-900"
        layout
      >
        Animate
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
          whileTap={{ scale: 0.5, rotate: 45 }}
            initial={{ rotate: 45, opacity: 0, scale:0 }}
            animate={{ rotate: 360, opacity:1, scale:1, y:[0,100, -80, 0, -60, 0] }}
            exit={{ rotate: 0, opacity: 0, scale:0 }}
            transition={{ duration: 1 }}
            className="bg-slate-400 size-[200px] rounded flex justify-center items-center"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
