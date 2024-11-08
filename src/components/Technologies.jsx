import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVariant = (duration) => ({
    initial:{ y: -10},
    animate:{
        y: [10,-10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

export default function Technologies() {
  return (
    <>
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-3xl">Technologies</motion.h1>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                variants={iconVariant(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPhp className="text-4xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                 variants={iconVariant(3)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaLaravel className="text-4xl text-red-500" />
                </motion.div>
                <motion.div 
                 variants={iconVariant(5)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaVuejs className="text-4xl text-green-500"/>
                </motion.div>
                <motion.div 
                 variants={iconVariant(2)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJs className="text-4xl text-yellow-400"/>
                </motion.div>
                <motion.div 
                 variants={iconVariant(6)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMysql className="text-4xl text-blue-600"/>
                </motion.div>
                <motion.div 
                 variants={iconVariant(6)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPostman className="text-4xl text-orange-600"/>
                </motion.div>
            </motion.div>
        </div>
    </>
  )
}

