// import React from 'react';
// import Image from 'next/image';
// import CSK from '../assots/4338.webp';
// import Anroid from '../assots/play-store.png'
// import Ios from '../assots/ios.png'
// import Qr from '../assots/qrcode.png'


// function Crichome() {
//   return (
//     <div className="flex items-center pl-5  lg:justify-between justify-center lg:pl-24 ">
//       <div className="text-white font-bold text-[20px]  lg:py-20 lg:text-[40px]">
          
//         <h1>Play Online Games &</h1>
//         <h1>Win Upto ₹5 Crores Daily</h1>
//         <p className="text-gray-400 text-sm lg:text-2xl lg:font-normal  lg:pt-3">
//           Play on India’s Best Gaming App
//         </p>
//         <div className="flex py-3 space-x-2 lg:space-x-4 lg:pt-4 lg:pb-10 ">
//           <Image src={Anroid} className='w-[83px] h-9 lg:w-40 lg:h-14 rounded-md cursor-pointer' />
//           <Image src={Ios} className=' w-[90px] h-9 lg:w-40 lg:h-14 rounded-md cursor-pointer' />
//         </div>
//         {/* <div className='flex '>

//           <Image src={Qr} className=' w-24 h-24 rounded-md cursor-pointer flex ' />
//           <div className='mt-4'>
//             <p className=' text-sm  text- font-medium pl-4'>Scan The QR Code To </p>
//             <p className=' text-sm  text- font-medium pl-4'>Download The Official </p>
//             <p className=' text-sm  text- font-medium pl-4'><span className=' animate-pulse text-xl font-bold text-customBlue-pink space-x-1'>Wicket</span> App
//             </p>
//           </div>
//         </div> */}
//       </div>

//       <div className="flex items-end mr-20">
//         <Image src={CSK} className=" text-center lg:block w-[530px] h-[540px] hidden  " />
//       </div>

//     </div>
//   );
// }

// export default Crichome;



import React from 'react';
import Image from 'next/image';
import CSK from '../assots/4338.webp';
import Anroid from '../assots/play-store.png';
import Ios from '../assots/ios.png';
import Qr from '../assots/qrcode.png';

function Crichome() {
  return (
    <div className="flex flex-col items-center  justify-center pl-5 lg:flex-row lg:justify-between lg:pl-24 ">
      <div className="text-white mr-2 font-bold text-[29px] flex-col justify-center items-center py-[140px] lg:text-left lg:py-20 lg:text-[40px]">
        <h1>Play Online Games &</h1>
        <h1>Win Upto ₹5 Crores Daily</h1>
        <p className="text-gray-400 text-base lg:text-2xl lg:font-normal lg:pt-3">
          Play on India’s Best Gaming App
        </p>
        <div className="flex   lg:justify-start py-3 space-x-2 lg:space-x-4 lg:pt-4 lg:pb-10">
          <Image src={Anroid} className='w-[100px] h-9 lg:w-40 lg:h-14 rounded-md cursor-pointer' />
          <Image src={Ios} className='w-[100px] h-9 lg:w-40 lg:h-14 rounded-md cursor-pointer' />
        </div>
        {/* Uncomment this block if needed */}
        {/* <div className='flex justify-center lg:justify-start'>
          <Image src={Qr} className='w-24 h-24 rounded-md cursor-pointer' />
          <div className='mt-4'>
            <p className='text-sm font-medium'>Scan The QR Code To</p>
            <p className='text-sm font-medium'>Download The Official</p>
            <p className='text-sm font-medium'>
              <span className='animate-pulse text-xl font-bold text-customBlue-pink'>Wicket</span> App
            </p>
          </div>
        </div> */}
      </div>

      <div className="flex items-end justify-center lg:justify-end mt-8 lg:mt-0 lg:mr-20">
        <Image src={CSK} className="w-[530px] h-[540px] hidden lg:block" />
      </div>
    </div>
  );
}

export default Crichome;

