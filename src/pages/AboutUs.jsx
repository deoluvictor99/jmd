import React from 'react'

export default function AboutUs() {
    return (
        <>
            <section className='px-5 mt-[5rem] md:mt-[8rem]'>  
                <div 
                    className='relative w-full'
                >
                    <img src="src\assets\pexels-expect-best-323780 1.png" alt="img" className='w-[100%]' />
                    <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-1xl sm:text-5xl font-semibold sm:font-bold' >About Us</h1>
                </div>
                <div className='mt-4 sm:mt-10'>
                    <h2 className='font-semibold sm:text-xl'>Joshua Mayowa Deals (JMD) is a real estate company based in Lagos state, Nigeria</h2>
                    <p className='mt-4 text-[.8rem]'>JMD specializes in apartments, short-term rentals and Airbnb. We offer Real estate agency
                        services and expert advice on properties to both corporate and individual clients. 
                        In addition to its  focus on rentals, we also offer professional advice when it 
                        comes to property management and assist clients in buying and selling properties. 
                        JMD specializes in providing personalized 
                        attention to each client, ensuring their 
                        needs and preferences are met, JMD 
                        strives to exceed expectations and build 
                        long-term relationship with its clients.
                    </p>
                    <h3 className='font-semibold sm:font-bold mt-6'>Our values are</h3>
                    <div className='mt-2 px-5'>
                        <ul className='list-disc text-[.8rem] space-y-3'>
                            <li>Customer satisfaction</li>
                            <li>Excellence</li>
                            <li>Trust and integrity</li>
                            <li>Professionalism</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
