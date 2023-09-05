import React from 'react'
import {motion} from 'framer-motion'

export default function Info({ svg, title, description}) {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5
            }
        }
    };

    return (
        <>
            <motion.div 
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{once:true}}
            className='sm:flex sm:justify-center'>
                <section className='px-8 mt-12 sm:max-w-[70vw] md:max-w-[60vw] lg:max-w-[30vw] md:space-y-6'>
                    <div className='flex justify-center mb-4'>
                        {svg}
                    </div>

                    <h2 className='text-center text-[1.35rem] md:text-[1.6rem] font-semibold'>
                        {title}
                    </h2>

                    <p className='text-left'>
                        {description}
                    </p>
                </section>
            </motion.div>
        </>
    )
}
