import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const FeatureHighlight = () => {
    return (
        <div className='w-full md:flex items-center bg-[#9399F4] py-5 text-center md:py-0 md:text-left md:min-h-[55vh]'> 
            <div className="w-full md:w-[50%]">
                <Image
                    src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Create.png"
                    alt=''
                    width={400}
                    height={400}
                    className='w-[85%] ml-5'
                />

            </div>
            <div className="md:w-[50%]">
                <h2 className="font-clashDisplay uppercase text-cyber-ink text-3xl md:text-5xl max-w-4xl mx-auto mb-2">
                    Create
                </h2>
                <br/>
                <h3 className="text-cyber-int text-xl md:text-3xl max-w-lg font-semibold">
                    The most powerful editing and design tools in email.
                </h3>
                <br/>
                <p className="text-cyber-ind">
                    Warning: A writing expreinc un line anything you ever exprienced.
                </p>
                <br/>
                <Button className='bg-white border-[2px] border-[#000] rounded text-2xl !p-7 !px-16'>
                    Start Building
                </Button>
            </div>
        </div>
    )
}

export default FeatureHighlight