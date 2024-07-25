import Image from 'next/image'
import React from 'react'
import partner1 from '../../Assests/partner1.png'

export default function Partner() {
    return (
        <div className='partner'>
            <div className=' flex justify-center'>
                <div className='py-20 text-center max-w-3xl  flex-col' data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-offset="200">
                    <p className='themeColor font-semibold'>Our Partner</p>
                    <h1 className='text-white text-4xl font-bold my-6 '>Processed Payments 196,000 Customers, 1M Users and Growing.</h1>
                    <p className='text-white leading-relaxed tracking-normal'>Our consultants include medical doctors, engineers, designers, data scientists, business managers, civil servants, entrepreneurs, and research scientists.</p>
                </div>
            </div>
            <div className='flex justify-center'>
            <div className='w-full max-w-[100rem] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                <div className='p-3 flex justify-center text-white border border-gray-700'>
                    <Image src={partner1} width={120} height={120} className='my-2' />
                </div>
                <div className='p-3 flex justify-center text-white border border-gray-700'>
                    <Image src={partner1} width={120} height={120} className='my-2' />
                </div>
                <div className='p-3 flex justify-center text-white border border-gray-700'>
                    <Image src={partner1} width={120} height={120} className='my-2' />
                </div>
                <div className='p-3 flex justify-center text-white border border-gray-700'>
                    <Image src={partner1} width={120} height={120} className='my-2' />
                </div>
            </div>
            </div>
        </div>
    )
}
