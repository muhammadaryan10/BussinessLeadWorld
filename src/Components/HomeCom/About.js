import Image from 'next/image'
import React from 'react'
import about from '../../Assests/ab2.png'
import value from '../../Assests/value.jpg'



export default function About() {

    return (
        <div className='flex justify-center my-8 overflow-x-hidden'>
            <div className='grid sm:grid-cols-2 grid-cols-1 max-w-[100rem] max-h-[100rem] gap-4 p-12'>

                <div className=''>
                    <p className='themeColor font-semibold'>About our Company</p>
                    <h1 className='themetext text-5xl font-bold my-6 '>Building competitive business sectors.</h1>
                    <p className='lighttext leading-relaxed tracking-normal'>New analytic tools can help manufacturers in labor-intensive sectors boost productivity and earnings by double-digit on It is a secure and simple on-demand, the total percentages.</p>
                    <div className='h-[280px] w-full overflow-y-scroll my-8'>
                        <div className='flex my-8'>
                            <Image src={value} className='h-24 mx-6 p-4 border-4 rounded-full w-24'  />
                            <div className=''>
                                <p className=' text-2xl mb-2 font-bold themetext'>
                                    Company Values
                                </p>
                                <p className='lighttext leading-relaxed tracking-normal pr-5'>
                                    We help organizations across private, public, and social sectors create on the Change that Matters most to them.
                                </p>
                            </div>
                        </div>
                        <div className='flex my-8'>
                            <Image src={value} className='h-24 mx-6 p-4 border-4 rounded-full w-24' />
                            <div className=''>
                                <p className=' text-2xl mb-2 font-bold themetext'>
                                    Our Mission
                                </p>
                                <p className='lighttext leading-relaxed tracking-normal pr-5'>
                                    We help organizations across private, public, and social sectors create on the Change that Matters most to them.
                                </p>
                            </div>
                        </div>
                        <div className='flex my-8'>
                            <Image src={value} className='h-24 mx-6 p-4 border-4 rounded-full w-24' />
                            <div className=''>
                                <p className=' text-2xl mb-2 font-bold themetext'>
                                    Company Values
                                </p>
                                <p className='lighttext leading-relaxed tracking-normal pr-5'>
                                    We help organizations across private, public, and social sectors create on the Change that Matters most to them.
                                </p>
                            </div>
                        </div>
                        <div className='flex my-8'>
                            <Image src={value} className='h-24 mx-6 p-4 border-4 rounded-full w-24' />
                            <div className=''>
                                <p className=' text-2xl mb-2 font-bold themetext'>
                                    Company Values
                                </p>
                                <p className='lighttext leading-relaxed tracking-normal pr-5'>
                                    We help organizations across private, public, and social sectors create on the Change that Matters most to them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='' data-aos="fade-left">
                    <Image src={about} width={550} height={630} className='h-full p-16'  />
                </div>
            </div>
        </div>
    )
}
