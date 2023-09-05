import React from 'react'
import {motion} from'framer-motion'

export default function Property({image, alt = 'image', title, description, btn = 'Shop Now'}) {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
            delayChildren: 0.5,
            staggerChildren: 1.3
            }
        }
    };
    return (
        <>
            <motion.section 
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{once:true}}
            className='md:flex mt-9  md:min-w-[45%] md:w-auto'>
                <div>
                    <img src={image} alt={alt} className='w-full md:w-auto rounded-t-sm'/>
                </div>
                <div className='bg-white shadow-lg text-black pt-8 px-2 pb-4 text-center md:space-y-8 md:px-3 md:max-w-[15rem] md:flex md:flex-col md:justify-center rounded-b-sm'>
                    <h2 className='font-semibold text-[1.3rem] '>{title}</h2>
                    <p className='text-[1.1rem] mt-2 '>{description}</p>
                    <motion.button 
                    whileTap={{scale:1.1}}
                    type='button' className='mt-[1rem] bg-black text-white px-8 py-3 cursor-pointer '>{btn}</motion.button>
                </div>
            </motion.section>
        </>
    )
}
