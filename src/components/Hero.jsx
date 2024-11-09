import { HERO_CONTENT } from '../constants';
import  profile  from '../assets/girl1.jpeg';
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100 , opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay}
    }
})

export default function Hero() {
  return (
    <>
        <div id='hero' className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                           May Myo Pwint 
                        </motion.h1>
                        <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Junior Web Developer
                        </motion.span>
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center lg:mt-16 lg:mx-4'>
                        <motion.img
                        initial={{ x:100 , opacity: 0}}
                        animate={{ x:0 , opacity: 1}}
                        transition={{duration:1 , delay:1.2}}
                        src={profile} alt="Profile" width={500} height={400} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
