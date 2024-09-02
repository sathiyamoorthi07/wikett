import React from 'react'
import Image from 'next/image'
import Cutomer from '../assots/win.jpg'
import Rating from '../assots/rating.webp'

function Ratng() {
    return (
        <div className='h-screen bg-slate-50 px-40'>
            
            <h1 className='text-center text-customBlue-primblue text-2xl font-semi py-10 font-semibold'>RATINGS & TESTMONIALS</h1>
            <div className='flex '>
            <Image src={Rating} alt='' className=' w-[31rem] h-[31rem]' />
          
            <div className='  w-[30rem] h-[30rem]  bg-white p-5 pb-32 ml-10 rounded mt-2 shadow-lg border border-c'>
                <div className='flex  justify-center'>
                    <Image src={Cutomer} alt='' className='w-40 h-40 rounded-full' />
                </div>
                <div className='text-center   mt-5 text-base'>
                    <h1>Hari krishnan</h1>
                    <h1 className='text-xl font-bold text-customBlue-pink mt-2'>Won ₹25 Lakhs</h1>
                </div>
                <div className='text-center bg-purple-400 rounded mt-7 text-sm '>
                    <p className='py-5'>
                        Could you clarify what you mean by "fantay app"? Are you referring to a specific fantasy sports app, a mobile app</p>
                </div>
                <p className='text-center pt-5 text-sm font-bold text-gray-600'>Mega Content Winner</p>
            </div>
        </div>
        </div>
    )
}

export default Ratng