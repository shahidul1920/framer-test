import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimationN() {
  const [isVisible, setVisible] = useState(true);

  const rotateSection = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <button
        onClick={rotateSection}
        className="p-4 px-8 font-bold text-2xl bg-slate-200 rounded text-slate-900"
      >
        Animate
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 360, scale: 1.5 }}
            exit={{ rotate: 0, scale: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="bg-slate-400 size-[200px] rounded flex justify-center items-center"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
