import React from 'react'
import {motion} from 'framer-motion'

export const Card = ({ image, title = 'title', description}) => {
    const container = {
        hidden: { opacity: 1, scale: 0 },
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
    };
        
    return (
        <>
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                whileHover={{scale:1.1}}
            className="shadow-md px-[1rem] pt-[2rem] pb-[4rem] md:pb-[1rem] text-left rounded-[0.32rem] md:max-w-[27vw] lg:max-w-[23vw] flex flex-col ">
                <img src={image} alt={title} />
                <div className='w-full'>
                    <h2 className='font-bold mt-[0.3rem] '>{title}</h2>
                    <p className='mt-[1.3rem]'>{description}</p>
                </div>
            </motion.div>
        </>
    )
}

