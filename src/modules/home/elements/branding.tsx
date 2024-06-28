import { partners } from '@/app/configs/constants'
import Image from 'next/image'
import React from 'react'

const Branding = () => {
    return (
        <div className='boarder-t border-b border-[#000] py-10'>
            <h3 className="uppercase text-xl md:text-2xl text-center max-w-3xl mx-auto front-[400] z-20 relative">
                CREATED BY THE EARLY MORNING BREW TEAM
            </h3>

            <div className="w-full text-center pt-1">
                <h3 className="uppercase bg-[#F091DD] rounded p-2 text-xl md:text-2xl text-center inline-block font-center">
                    NOW POWERING THE WORLD TOP NEWSLETTERS
                </h3>
            </div>

            {/* Marquee */}

            <div className="w-full flex">
                {partners.map((i:PartnersTypes, index: number) => (
                    <>
                        <Image 
                            key={index} 
                            src={i.url} 
                            width={200} 
                            height={200} 
                            alt="partner" 
                            className={`md:mx-8 w-[150px] md:w-[180px] mx-3`} 
                        />
                    </>
                ))}
            </div>
        </div>
    )
}

export default Branding