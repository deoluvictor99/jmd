import React from 'react'
import {motion} from 'framer-motion'

export default function About() {
    const container = {
        hidden: { opacity: 1, scale: 1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
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
            <motion.div 
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{once:true}}
            className='bg-[#5927E5] text-white text-center py-5 md:py-[3rem] space-y-5 px-4 md:px-[4rem] lg:flex lg:justify-between'>
                <motion.section 
                variants={item}
            
                className= 'lg:max-w-[50vw] md:max-w-[80vw] md:mx-[auto]'>
                    <h1 className='text-[1.37rem] md:text-[3.5rem] font-semibold mb-[0.5rem]'>About us</h1>
                    <h2 className='text-[1rem] md:text-[2rem] font-medium mb-[1rem]'>Searching for the perfect property can be very overwhelming</h2>
                    <p className='text-[0.7rem] md:text-[1.2rem] text-left md:mt-[3rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </motion.section>

                <motion.section 
                variants={item}
                className='sm:justify-center sm:flex sm:w-full '>
                    <img src="src/assets/pexels-pnw-production-8276360 1.png" alt=""  className='lg:w-[22rem] md:w-[70vw]'/>
                </motion.section>
            </motion.div>
        </>
    )
}
