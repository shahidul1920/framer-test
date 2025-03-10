import React from 'react'
import { motion } from 'framer-motion'

export default function AnimationView() {
  return (
    <div className='bg-slate-700 text-white p-10 h-screen grid place-items-center'>
      <motion.div initial={{x:-400, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.2}} className='size-30 bg-stone-100 rounded-lg'>

      </motion.div>
    </div>
  )
}
