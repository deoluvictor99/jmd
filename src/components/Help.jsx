import React from 'react'
import {motion} from 'framer-motion'

export default function Help() {
    const container = {
        hidden: { opacity: 1, scale: 1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
            delayChildren: 0.5,
            staggerChildren: 0.3
            }
        }
    };
        
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (
        <>
            <div
                variants={container}
                initial= 'hidden'
                whileInView= 'visible'
                className="w-full bg-blue-500 relative"  
            >
                <div className='w-[100%] bg-blue-900'>
                    <img 
                        src="pexels-jeffrey-czum-2904142 1.png" 
                        className='w-full '
                    />
                </div>

                <motion.div
                variants={container}
                initial='hidden'
                whileInView='visible'
                viewport={{once:true}}
                className='absolute top-0 px-5'>
                    <motion.h1 
                    variants={item}
                    className='text-black text-[1rem] md:text-[1.3rem] lg:text-[2.5rem] font-semibold  sm:font-bold pt-4 md:pt-12'>Let's help you find your perfect property at affordable prices with ease</motion.h1>
                    <motion.button 
                    whileTap={{scale:1.1}}
                    variants={item}
                    type='button' className='text-white  bg-black px-3 md:px-12 py-1 md:py-4 mt-2 md:mt-5 text-[0.7rem] md:text-[1rem] cursor-pointer'>
                        Contact Us
                    </motion.button>
                </motion.div>
                
            </div>
        </>
    )
}



