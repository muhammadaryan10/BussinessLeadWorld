import Image from 'next/image'
import React from 'react'
import contact3 from '../../Assests/contact3.png'

export default function page() {
    return (
        <>
        <div className=" overflow-hidden lg:h-[90vh] max-h-[55rem] flex justify-center items-start contactBanner">
                    <div className='w-full grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:p-12 p-5  max-w-[100rem]  lg:py-32 pt-32 '>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center lg:items-start items-center gap-8 flex">
                                <div className="flex-col justify-start items-start gap-4 flex">
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 className="themetext sm:text-5xl text-2xl font-bold font-manrope leading-normal lg:text-start text-start">
                                            MCA Live Transfer Leads</h2>
                                        <p className=" sm:text-base lighttext leading-relaxed tracking-normal lg:text-start text-start">Currently, MCA Live Transfer Leads offer the most effective way to increase your business revenue and get more returns. It is the quickest way to close a deal for an MCA lead. Business Leads World provides a complete service to brokers and lenders for finalizing deals to get more leads.</p>
                                    </div>
                                </div>
                                <button className='border-2 border-blue-600 p-3 rounded-full text-blue-600 hover:scale-105 px-8 hover:bg-blue-600 hover:text-white duration-300'>Get A Qoute</button>
                            </div>
                        </div>
                        <div className='flex lg:justify-end justify-center'>
                        </div>
                    </div>
                </div>
            <div className='flex justify-center bg-gray-100'>
                <div className="w-full my-8 max-w-[100rem] p-12 contact">
                    <p className='themeColor font-semibold text-xl text-center'>Contact Us</p>
                    <div className='flex justify-center mb-8 text-center'>
                        <h1 className='themetext text-5xl tracking-normal font-bold my-6 max-w-[60vw]'>
                            Needs Help? Let’s Get in Touch</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-8'>
                        <Image src={contact3} width={1000} height={1000} className='ml-12' />
                        <div className='flex flex-col justify-center gap-8 w-full pl-16'>
                            <div className='bg-white p-8 flex mr-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 rounded-full mr-3 text-white themeBackground p-3">
                                    <path fillRule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72h-2.69a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>

                                <div className='w-full'>
                                    <p className='text-xl font-bold'>Call Us for help!</p>
                                    <p className=''>+ (888) 452 1505</p>
                                </div>
                            </div>
                            <div className='bg-white p-8 flex mr-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 rounded-full mr-3 text-white themeBackground p-3">
                                    <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                                    <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                                </svg>

                                <div className='w-full'>
                                    <p className='text-xl font-bold'>Mail Us</p>
                                    <p className=''>help@gmail.com</p>
                                </div>
                            </div>
                            <div className='bg-white p-8 flex mr-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 rounded-full mr-3 text-white themeBackground p-3">
                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>

                                <div className='w-full'>
                                    <p className='text-xl font-bold'>Main Location</p>
                                    <p className=''>30 Commercial Road, Australia</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-center'>
                <div className="w-full my-8 max-w-[100rem] p-12">
                    <p className='themeColor font-semibold text-xl text-center'>Get In Touch</p>
                    <div className='flex justify-center mb-8 text-center'>
                        <h1 className='themetext text-5xl tracking-normal font-bold my-6 max-w-[50vw]'>
                        Feel free to contact with us any time.</h1>
                    </div>
                    <div className="container">
                        <div className="mx-auto">
                            <div className="-m-2 flex flex-wrap">

                                <div className="w-1/2 p-2">
                                    <div className="relative">
                                        <input type="text" id="name" name="name" className="peer w-full rounded-lg border border-gray-300 bg-gray-200 bg-opacity-40 py-2 px-3 text-base leading-8 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out " placeholder="Name" />
                                        <label for="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7  transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  ">Your Name</label>
                                    </div>
                                </div>
                                <div className="w-1/2 p-2">
                                    <div className="relative">
                                        <input type="email" id="email" name="email" className="peer w-full rounded-lg border border-gray-300 bg-gray-200 bg-opacity-40 py-2 px-3 text-base leading-8 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out " placeholder="Email" />
                                        <label for="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7  transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  ">Your Email</label>
                                    </div>
                                </div>
                                <div className="w-1/2 p-2">
                                    <div className="relative">
                                        <input type="text" id="name" name="name" className="peer w-full rounded-lg border border-gray-300 bg-gray-200 bg-opacity-40 py-2 px-3 text-base leading-8 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out " placeholder="Name" />
                                        <label for="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7  transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  ">Your Phone</label>
                                    </div>
                                </div>
                                <div className="w-1/2 p-2">
                                    <div className="relative">
                                        <input type="email" id="email" name="email" className="peer w-full rounded-lg border border-gray-300 bg-gray-200 bg-opacity-40 py-2 px-3 text-base leading-8 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out " placeholder="Email" />
                                        <label for="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7  transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  ">Your Subject</label>
                                    </div>
                                </div>
                                <div className="mt-4 w-full p-2">
                                    <div className="relative">
                                        <textarea id="message" name="message" className="peer h-32 w-full resize-none rounded-lg border border-gray-300 bg-gray-200 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out " placeholder="Message"></textarea>
                                        <label for="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7  transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  ">Message</label>
                                    </div>
                                </div>
                                <div className="w-full p-2 my-6">
                                    <button className="mx-auto flex rounded-full themeBackground py-3 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">Send Message</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
