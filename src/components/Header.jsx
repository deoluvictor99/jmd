import React from 'react';
import {motion} from 'framer-motion'
export default function Header() {
    const container = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
            }
        }
        };
        
        const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
        }
    return (
        <>
            <motion.div 
                className='lg:flex lg:justify-between bg-[#5927E5] pt-[8rem] pb-[5.5rem] px-[1rem] md:px-[3rem]   w-full text-white'
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                
                >
                <section className='space-y-[1rem] md:space-y-[1.5rem] lg:w-[50vw]'>
                    <motion.h1
                        className='text-[2.5rem]  md:text-[4rem] font-Montserrat font-semibold '
                        variants={item}
                    >We have got you covered.</motion.h1>
                    <motion.p
                    variants={item}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquid mollitia magni repellat commodi, 
                        voluptatem asperiores dignissimos veniam sint ab sapiente ut inventore rem 
                        consequatur at dolorum voluptate error delectus vitae impedit dicta alias? Omnis, modi architecto? Eligendi non animi praesentium eveniet
                        saepe, delectus recusandae quod placeat molestiae aperiam ex maiores laboriosam sequi nostrum dolorum atque, cum, dolores quibusdam 
                    </motion.p>
                    <motion.button
                        variants={item}
                        type='button'
                        className='bg-black text-white text-[1.1rem] md:text-[1.5rem] px-[2rem] py-[0.6rem] '>
                        Sign Up
                    </motion.button>
                </section>

                <motion.section className='mt-[1rem] lg:w-[35vw] sm:mb-[3rem]'
                variants={item}
                >
                    <div className='relative z-[1]'>
                        <motion.img src="src/assets/Ellipse 1.png" alt="img" className='w-[75%]'/>
                        <motion.img src="src/assets/Ellipse 2.png" alt="img" className='absolute top-[45%] left-[40%] w-[55%]'/>
                    </div>
                </motion.section>
            </motion.div>
        </>
    )
}
