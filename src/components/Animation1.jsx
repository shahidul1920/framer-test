import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: .25 } },
};
const itemVariants = { hidden: { opacity: 0 }, show: { opacity: 1 }}
export default function Animation1() {
  return (
    <div className="animation1 flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        <motion.div
          variants={itemVariants}
          className="rounded-lg bg-slate-800 aspect-square justify-center flex items-center gap-10"
        >
            <motion.div initial={{opacity:0, y: 100}} animate={{opacity:1, y:0}} transition={{duration:1, ease: "easeInOut", delay: 0.2}} className="size-20 bg-stone-100 rounded-lg"></motion.div>
            <motion.div initial={{opacity:0, y: -100}} animate={{opacity:1, y:0}} transition={{duration:1, ease: "easeInOut", delay: 0.2}} className="size-20 bg-stone-100 rounded-full"></motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded-lg bg-slate-800 aspect-square justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded-lg bg-slate-800 aspect-square justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded-lg bg-slate-800 aspect-square justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded-lg bg-slate-800 aspect-square justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded-lg bg-slate-800 aspect-square justify-center flex items-center gap-10"
        ></motion.div>
        
      </motion.section>
    </div>
  );
}
