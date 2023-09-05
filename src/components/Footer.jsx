import React from 'react'
import {motion} from 'framer-motion';
export default function Footer() {
    const container = {
        hidden: { opacity: 1, scale: 1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
            delayChildren: 0.3,
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
            <footer className='pt-[1.5rem] sm:pt-[4rem] sm:px-8 lg:px-[7rem] pb-12 bg-[#5927E5] text-white'>
                <div 
                
                className='lg:flex px-6 sm:px-0'>
                    <motion.div 
                    variants={container}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='space-y-4 sm:space-y-4  lg:space-y-12 sm:pr-4'>
                        <motion.p 
                        variants={item}
                        className="px-[1.1rem] py-1  rounded-tl-[1.45rem] rounded-br-[1rem] text-[white] bg-black inline-block">
                            <span className="text-[1rem] sm:text-[1.8rem] font-bold">JMD</span>
                        </motion.p>
                        <motion.p 
                        variants={item}
                        className='pr-[1rem] sm:leading-8'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lollit anim id est laborum.
                        </motion.p>
                    </motion.div>
                    <motion.div 
                    variants={container}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='mt-10 lg:mt-0 md:mt-[3rem] sm:mt-10  flex flex-wrap gap-12 sm:justify-between sm:min-w-[65%]'>
                        <motion.div 
                        variants={item}
                        className='space-y-3 sm:space-y-4'>
                            <p className='font-semibold text-[1.1rem]'>Menu</p>
                            <a href="#" className='block'>Home</a>
                            <a href="#" className='block'>Management</a>
                            <a href="#" className='block'>Pricing</a>
                        </motion.div>

                        <motion.div 
                        variants={item}
                        className='space-y-3 sm:space-y-4'>
                            <p className='font-semibold text-[1.1rem]'>Best Choice</p>
                            <a href="#" className='block'>Minimalist</a>
                            <a href="#" className='block'>Classic</a>
                            <a href="#" className='block'>Traditional</a>
                        </motion.div>

                        <motion.div 
                        variants={item}
                        className='space-y-3 sm:space-y-4'>
                            <p className='font-semibold text-[1.1rem]'>Services</p>
                            <a href="#" className='block'>FAQ</a>
                            <a href="#" className='block'>How We Work</a>
                            <a href="#" className='block'>Security</a>
                        </motion.div>

                        <motion.div 
                        variants={item}
                        className='space-y-3 sm:space-y-4'>
                            <p className='font-semibold text-[1.1rem]'>About Us</p>
                            <a href="#" className='block'>Career</a>
                            <a href="#" className='block'>Features</a>
                            <a href="#" className='block'>News & Blog</a>
                        </motion.div>

                        <motion.div 
                        variants={item}
                        className='space-y-3 sm:space-y-4'>
                            <p className='font-semibold text-[1.1rem]'>Social Media</p>
                            <a href="#" className='block'>Facebook</a>
                            <a href="#" className='block'>Insatgram</a>
                            <a href="#" className='block'>Whatsapp</a>
                        </motion.div>
                    </motion.div>
                </div>
                <p className='text-center pt-10 sm:text-[1.3rem]'>2023 @ JMD Productions</p>
            </footer>
        </>
    )
}
