import React from 'react'

export default function Contact() {
    return (
        <>
            <section>
                <div className='relative w-full  px-[1rem] mt-[5rem] md:mt-[8rem]'>
                    <img src="pexels-expect-best-323780 1.png" alt="img" className='w-[100%]' />
                    <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-1xl sm:text-5xl  font-semibold sm:font-bold' >Contact Us</h1>
                </div>

                
                <form className='py-[1rem] md:px-[4rem] px-3'>
                    <div className='mt-4'>
                        <h1 className='text-xl sm:text-2xl md:text-[1.5rem] font-semibold'>Submit Your Details</h1>
                    </div>
                    <div className="mb-6 mt-6">
                        <label for="name" className="block mb-1 text-[0.7rem] text-black font-medium">Your Name:</label>
                        <input type="text" id="name" className="border border-[#5927E5] text-sm rounded-lg focus:border-[#5927E5] outline-none block w-full p-2.5 max-w-[40rem]"/>
                    </div>
                    <div className="mb-6">
                        <label for="email" className="block mb-1 text-[0.7rem] font-medium text-gray-900">Your Email:</label>
                        <input type="email" id="email" className="border border-[#5927E5] text-sm rounded-lg focus:border-[#5927E5] outline-none block w-full p-2.5 max-w-[40rem]"/>
                    </div>
                    <div className="mb-6">
                        <label for="phone" className="block mb-1 text-[0.7rem] font-medium text-gray-900">Your Phone:</label>
                        <input type="tel" id="phone" className="border border-[#5927E5] text-sm rounded-lg focus:border-[#5927E5] outline-none block w-full p-2.5 max-w-[40rem]"/>
                    </div>
                    <div className="mb-6">
                        <label for="message" className="text-[0.7rem] font-medium">Your Message:</label>
                        <textarea id="message" rows="4" className="block w-full mt-1 sm:max-w-[40rem] border border-[#5927E5] text-[1rem] resize-none rounded outline-none p-3" required/>
                    </div>
                    
                    <button type="submit" className="text-white bg-[#5927E5] hover:bg-blue-800 outline-none text-[1rem] rounded w-full sm:w-auto px-8 py-2.5 text-center ">Submit</button>
                </form>

            </section>
        </>
    )

}
