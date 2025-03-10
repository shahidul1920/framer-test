import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AnimationView() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const animeControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      animeControls.start('show')
    }
  }, [isInView]);

  return (
    <div className="bg-slate-700 text-white p-10 h-screen grid place-items-center">
      <motion.div
        ref={containerRef}
        initial="hidden"
        variants={{ hidden: { opacity: 0, x:-100 }, show: { opacity: 1, x:0 }} }
        animate={animeControls}
        transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
        className="size-30 bg-stone-100 rounded-lg"
      ></motion.div>
    </div>
  );
}
