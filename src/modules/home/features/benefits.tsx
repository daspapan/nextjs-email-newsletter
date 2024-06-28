import React from 'react'

const Benefits = () => {
    return (
        <div className='benefit-cover min-h-[60vh] relative flex items-center justify-center'>
            <div className="w-[70%] md:h-[350px] bg-[#F7F5FF] border-[2px] rounded border-blue-500 p-2">
                <h3 className="font-clashDisplay uppercase text-3xl md:text-7xl text-center">
                    Evenything you need to 
                    {" "}<span className='font-style'>success</span>{" "}
                    available in a single platform
                </h3>
                <p className="text-xl md:text-2xl text-center">
                    Add in your own website. No complex integrations.
                </p>
            </div>
        </div>
    )
}

export default Benefits