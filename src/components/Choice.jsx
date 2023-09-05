import React from 'react'
import Property from './Property'

export default function Choice() {
    return (
        <>
            <section className='bg-[#5927E5] text-white px-4 py-8 md:flex md:flex-col'>
                <div className='mb-[1rem] md:mb-0 md:ml-32 sm:ml-8 '>
                    <h2 className='font-bold opacity-[0.8] text-[1.4rem] sm:text-[1.8rem]'>Best Choice</h2>
                    <h3 className='font-semibold text-[1.2rem] sm:text-[1.5rem]'>Popular Demand.</h3>
                </div>
                <div className='sm:max-w-[85vw] sm:mx-[auto] md:flex md:flex-wrap justify-center md:gap-x-[2rem]'>
                    <div>
                        <Property
                            image='pexels-expect-best-323775 1.png'
                            title = 'Lekki, Lagos Nigeria'
                            description = '4 bedroom and 5 bathroom duplex'
                        />
                    </div>
                    <div>
                        <Property
                            image='pexels-vecislavas-popa-1643383 1.png'
                            title = 'Ikeja, Lagos Nigeria'
                            description = '2 bedroom and 3 bathroom Flat'
                            
                        />
                    </div>
                    <div>
                        <Property
                            image='pexels-jonathan-borba-5563472 1.png'
                            title = 'Ikoyi, Lagos Nigeria'
                            description = '5 bedroom and 6 bathroom duplex'
                            
                        />
                    </div>
                    <div>
                        <Property
                            image='pexels-pixabay-276554 1.png'
                            title = 'Lekki, Lagos Nigeria'
                            description = '4 bedroom and 5 bathroom duplex'
                            
                        />
                    </div>
                </div>
            </section>
            
        </>
    )
}
