import React from "react";
import { motion, useScroll } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: .25 } },
};
const itemVariants = { hidden: { opacity: 0 }, show: { opacity: 1 }}

const pathVariants = {
    hidden: { opacity:0, pathLength: 0, fill:'rgba(252, 211,77,0)' },
    visible: { opacity:1, pathLength: 1, fill:'rgba(252, 211,77,1)' }
}


export default function Animation1() {
    const {scrollYProgress: completionProgress} = useScroll()
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
        >
            <motion.div className="w-1/3 h-1/3 shadow-md bg-rose-400" animate={{scale:[1, 2, 2, 1], rotate:[0, 90, 90, 0], borderRadius:["10%", "25%", "50%", "10%"]}} transition={{duration:3, ease: "easeOut", repeat: Infinity, repeatDelay:.7}}></motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded-lg bg-slate-800 aspect-square justify-center flex items-center gap-10"
        >
            <motion.button whileTap={{scale:0.9}} whileHover={{scale:1.1, backgroundColor: "#d1d5db", color:"black"}} transition={{bounceDamping:10, bounceStiffness: 600}} className="bg-emerald-700 w-1/2 py-2 rounded-lg text-2xl text-gray-100 font-medium tracking-wide">Smash it!</motion.button>
        </motion.div>
        <motion.div
          variants={itemVariants} 
          className="rounded-lg bg-slate-800 aspect-square justify-center flex items-center gap-10 overflow-hidden"
        >
            <motion.div className="w-1/3 h-1/3 bg-orange-400 rounded-3xl cursor-grab" drag dragConstraints={{top:-125, left:-125, right:125, bottom:125}}></motion.div>
            
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded-lg bg-slate-800 aspect-square justify-center flex items-center gap-10"
        >
            <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl overflow-hidden">
                <motion.div className="w-full bg-gray-400 rounded-xl h-full origin-bottom" style={{scaleY: completionProgress}}></motion.div>
            </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded-lg bg-slate-800 aspect-square justify-center flex items-center gap-10"
        >
            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-1/2 stroke-amber-500 stroke-[0.5]">
                <motion.path d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" variants={pathVariants} initial='hidden' animate='visible' transition={{fill:{duration:2, ease: 'easeIn', repeat: Infinity, repeatType: "reverse"}}} />
            </motion.svg>
        </motion.div>
        
      </motion.section>
    </div>
  );
}
