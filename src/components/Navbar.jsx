import React, { useState } from 'react';
import { motion } from "framer-motion";


const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#5927E5] shadow-md w-full fixed top-0 left-0 md:px-[5rem] md:py-0 z-50">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 ">
                    <a href="/" className="px-[1.1rem] py-1  rounded-tl-[1.45rem] rounded-br-[1rem] text-[white] bg-black">
                        <span className="text-[1.3rem] md:text-[1.8rem] font-bold">JMD</span>
                    </a>

                    <motion.button 
                        type="button" 
                        className="text-white text-[2.7rem] flex justify-center items-center rounded-lg md:hidden "
                        onClick={()=>setIsOpen(!isOpen)}
                        whileTap={{scale:1.2}}
                    >
                        <ion-icon name={`${isOpen? 'close' : 'menu'}-outline`}></ion-icon>
                    </motion.button>


                    <motion.ul
                        
                        className={`bg-[#5927E5] text-white 
                                        md:flex md:items-center py-4 md:pt-0 pl-9 md:pb-0 
                                        absolute top-[4.5rem] md:static z-[-10] md:z-auto   
                                        w-full md:w-auto md:pl-0 space-y-4 sm:space-y-0 md:space-y-0 left-0
                                        ${isOpen? "": "left-[200%]"}
                                    `}
                        >
                            <li>
                                <a href="/" className="inline-block hover:bg-black hover:text-white px-6 py-3 ">Home</a>
                            </li>
                            <li>
                                <a href="/AboutUs" className="inline-block hover:bg-black hover:text-white px-6 py-3 ">About Us</a>
                            </li>
                            <li>
                                <a href="/Contact" className="inline-block hover:bg-black hover:text-white px-6 py-3 ">Contact Us</a>
                            </li>
                    </motion.ul>
            </div>
        </nav>
    )
}

export default Nav
