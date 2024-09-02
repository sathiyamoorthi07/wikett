import React from 'react';
import Image from "next/image";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { GiReturnArrow } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import Secure from '../assots/protection (1).png'
import Support from '../assots/support.png'
import Moneyback from '../assots/money-back-guarantee.png'
import Updates from '../assots/security.png'



function Cricustomer() {
    return (

<div className=''>
    
<h1 className=' text-center text-customBlue-primblue text-2xl font-bold pt-10 '>Considerables & Avoidables</h1>
        <div className='grid lg:grid-cols-4   lg:px-20 md:grid-cols-2 pl-4'>


            <div className='w-[15rem] flex flex-col mx-[65px] mb-3 md:my-0  md:border-none text-center md:text-start py-5 mg:py-0'> 
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-[35px] h-[35px]text-xl md:ml-[-7px] font-bold md:w-[50px] md:h-[50px]  ml-[100px] lg:ml-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg> */}
                <Image src={Secure} alt='' className='w-[35px] h-[35px]text-xl md:ml-[-7px] font-bold md:w-[50px] md:h-[50px]  ml-[100px] lg:ml-0'/>

                <h1 className='text-2xl  font-[600] font-mono mt-3 '>Secure</h1>
                <div className='text-base text-gray-500 font-light pt-2'>
                    <p>We value your privacy</p>
                    <p>and protect your</p>
                    <p>financial/personal info</p>
                    <p>with advanced</p>
                    <p>encryption and</p>
                    <p>advanced fraud</p>
                    <p>protection.</p>
                </div>
            </div>
        

            <div className='w-[15rem] flex flex-col mx-[65px] my-3 md:my-0 md:border-none text-center md:text-start py-5 mg:py-0'>
                {/* <RiCustomerService2Fill className=' text-3xl md:text-5xl font-semibold ml-[100px] lg:ml-0  md:ml-[-7px]' /> */}
                <Image src={Support} alt='' className='w-[35px] h-[35px]text-xl md:ml-[-7px] font-bold md:w-[50px] md:h-[50px]  ml-[100px] lg:ml-0'/>

                <h1 className='text-2xl  font-[600] font-mono mt-3'>Support service</h1>
                <div className='text-base text-gray-500 font-light pt-2'>
                    <p>Knowledgeable</p>
                    <p>representatives</p>
                    <p>available to assist you</p>
                    <p>through instant live</p>
                    <p>chat and email</p>
                    <p>response within 24</p>
                    <p>hours.</p>
                </div>
            </div>


            <div className='w-[15rem] flex flex-col mx-[65px]  my-3 md:my-0  md:border-none text-center md:text-start py-5 mg:py-0'>
            <Image src={Moneyback} alt='' className='w-[35px] h-[35px]text-xl md:ml-[-7px] font-bold md:w-[50px] md:h-[50px]  ml-[100px] lg:ml-0'/>
                {/* <GiReturnArrow className='  text-3xl md:text-5xl font-bold ml-[100px] lg:ml-0 md:ml-[-7px] ' /> */}
                <h1 className='text-2xl  font-[600] font-mono mt-3'>Money-back guarantee</h1>
                <div className='text-base text-gray-500 font-light pt-2'>
                    <p>All of our products</p>
                    <p>come with a 30-day</p>
                    <p>money-back</p>
                    <p>guarantee.</p>
                  
                </div>
            </div>


            <div className='w-[15rem] flex flex-col mx-[65px]  my-3 md:my-0  md:border-none text-center md:text-start py-5 mg:py-0'>
                {/* <GrUpdate className=' text-3xl md:text-4xl font-bold ml-[100px] lg:ml-0  md:ml-[-7px]' /> */}
                <Image src={Updates} alt='' className='w-[35px] h-[35px]text-xl md:ml-[-7px] font-bold md:w-[50px] md:h-[50px]  ml-[100px] lg:ml-0'/>
                <h1 className='text-2xl  font-[600] font-mono mt-3'>Updates</h1>
                <div className='text-base text-gray-500 font-light pt-2'>
                    <p>Free software update</p>
                    <p>within the valid period</p>
                    <p>of the software.</p>
               
                </div>
            </div>

            </div>
        </div>
    );
}

export default Cricustomer;
