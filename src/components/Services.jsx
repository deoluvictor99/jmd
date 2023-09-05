import React from 'react';
import { Card } from './Card';


export default function Services() {



    return (
        <>
            <section className=' py-[2rem] bg-[#FEF6FF]'>
                <h1 className='text-center text-[1.5rem] font-bold mb-[1rem] md:text-[2rem] '>Our Services</h1>
                <div 
                className='px-[2rem] space-y-10 md:space-y-0 md:flex md:justify-between md:px-[3rem]'>
                    <Card
                        
                        image = 'alejandra-cifre-gonzalez-ylyn5r4vxcA-unsplash 1.png' 
                        title='REAL-ESTATE'
                        description='Buy, sell houses and lands across Nigeria'
                    />
                    <Card 
                        image = 'joey-banks-YApiWyp0lqo-unsplash 1.png' 
                        title='AUTOMIBILE'
                        description='Buy, sell and swap cars anywhere across Nigeria'
                    />
                    <Card 
                        image = 'Untitled.png' 
                        title='SHORTLET APPARTMENTS'
                        description='Shortlet appartments at Abuja and Lagos ,Nigeria.'
                    />
                </div>
            </section>
        </>
    )
}
