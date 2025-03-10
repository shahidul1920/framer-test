import React from 'react'
import { motion, useAnimationControls } from 'motion/react'

export default function AnimationControl() {
    const flipControls = useAnimationControls()
    const flip = () => {
        flipControls.start({
            opacity: 1,
            scale: 1,
        })
    }
  return (
    <div className='flex justify-center items-center gap-4 h-screen bg-slate-900 flex-col'>
      <button onClick={flip} className='p-4 px-8 font-medium text-[18px] bg-slate-400'>flip it</button>
      <motion.div initial={{opacity:0, scale:0}} animate={flipControls} className='size-[200px] bg-slate-400 rounded flex justify-center items-center'>

      </motion.div>
    </div>
  )
}
