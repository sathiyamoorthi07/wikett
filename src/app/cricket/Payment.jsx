import React from 'react'
import Image from 'next/image';
import Amount from '../assots/payment.webp';
import bank from '../assots/bank.png'
import upi from '../assots/upi.png'
function Payment() {
  return (
    <div>
        {/* <div className='mt-10 '>
            <h1 className=' text-center text-customBlue-primblue text-2xl font-bold pt-10  '>We Support a Variety of Payment Methods</h1>
            <div className='w-[50rem] mx-auto '>
        <marquee behavior="" direction=""> <Image src={Amount} alt=''className='w-[50rem] ml-[19rem] pt-10' /></marquee>   
        </div>
        </div> */}

        <div className='flex px-52 justify-between'>
          <h1 className='md:w-[200px]   md:text-xl text-sm font-medium text-customBlue-primblue '>Withdraw winnings directly to your</h1>
          <p>
            
            <div className='flex pr-20'><Image src={bank} alt='' className='mr-10 w-[150px]' />
          <Image src={bank} alt='' className=''/>
          
          </div></p>
        </div>
    </div>
  )
}

export default Payment