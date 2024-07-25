import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Image1 from '../../Assests/liveTransferLead.jpg'
import Benifits from '@/Components/LiveTransferLeadComponents/Benifits'
import '../mca-live-transfer-leads/liveTransfer.css'
import WhyChooseUS from '@/Components/LiveTransferLeadComponents/WhyChooseUS'
import target from '../../Assests/target3.png'
import growth from '../../Assests/growth.png'

export default function page() {
    return (
        <div className='flex justify-center'>
            <div>
                <div className=" overflow-hidden lg:h-[90vh] max-h-[55rem] flex justify-center items-start servicesBanner">
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
                <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[100rem] p-10'>
                    <div className='sm:hidden md:hidden lg:block'>
                        <div className=''>
                            <p className='bg-gray-200 hover:border-blue-500 hover:pl-12 overflow-hidden duration-500 my-2 p-3 font-bold text-lg border-l-4 border-gray-400'>Agricultural Services</p>
                            <p className='bg-gray-200 hover:border-blue-500 hover:pl-12 overflow-hidden duration-500 my-2 p-3 font-bold text-lg border-l-4 border-gray-400'>Tax Consulting</p>
                            <p className='bg-gray-200 hover:border-blue-500 hover:pl-12 overflow-hidden duration-500 my-2 p-3 font-bold text-lg border-l-4 border-gray-400'>Finance Consulting</p>
                            <p className='bg-gray-200 hover:border-blue-500 hover:pl-12 overflow-hidden duration-500 my-2 p-3 font-bold text-lg border-l-4 border-gray-400'>Agricultural Services</p>
                            <p className='bg-gray-200 hover:border-blue-500 hover:pl-12 overflow-hidden duration-500 my-2 p-3 font-bold text-lg border-l-4 border-gray-400'>Tax Consulting</p>
                            <p className='bg-gray-200 hover:border-blue-500 hover:pl-12 overflow-hidden duration-500 my-2 p-3 font-bold text-lg border-l-4 border-gray-400'>Finance Consulting</p>
                        </div>
                        <div className='banner flex flex-col justify-center items-center h-full'>
                            <p className=" sm:text-base text-white leading-relaxed tracking-normal lg:text-start text-center">Contact Us Now.</p>
                            <h2 className="text-white sm:text-4xl text-xl my-5 pb-4 font-manrope leading-normal border-b text-center">
                                If  need help !</h2>
                            <p className="text-white leading-relaxed tracking-normal text-4xl mb-3">557-3452-234</p>
                            <p className="text-white leading-relaxed text-xl">or go to contact form</p>

                        </div>
                    </div>
                    <div className='col-span-2 w-full'>
                        <Image src={Image1} className='w-full' />
                        <h1 className='themetext text-3xl font-bold my-6 '>What Are MCA Live Transfer Leads?.</h1>
                        <p className='lighttext leading-relaxed tracking-normal'>MCA Live transfer leads refer to the exclusive leads that are generated through a process in which a potential merchant or a business owner, seeking capital and qualifying to avail the MCA service, is immediately connected to the MCA provider via live phone call. Since the merchant here is highly interested during this interaction and ready to go for a deal, a live transfer lead can increase the chances of conversion.</p>
                        <div className="cards grid sm:grid-cols-1  lg:grid-cols-3 md:grid-cols-2 my-4">
                            <div className="card  w-full md:w-1/4 pr-2 mb-8">
                                <div className="rounded-md bg-gray-200 shadow-md p-5" data-aos="fade-up">
                                    <div className="text-lg font-bold themeColor"> Step 01</div>
                                    <h3 className="text-2xl font-bold mb-4 themetext truncate ...">Prospecting</h3>
                                    <p className="text-gray-600 mb-4">The first step is finding the potential borrower who is seeking for the financing capital. Various marketing channels are utilized for prospecting this data. These channels may include online advertisements</p>
                                </div>
                            </div>
                            <div className="card white w-full md:w-1/4 px-2 mb-8">
                                <div className="rounded-md bg-gray-200 shadow-md p-5" data-aos="fade-up">
                                    <div className="text-lg font-bold themeColor">Step 02</div>
                                    <h3 className="text-2xl font-bold themetext mb-4 truncate ..." >Qualifying</h3>
                                    <p className="text-gray-600 mb-4">After the lead generation step, the next phase involves the qualification process. Live MCA Leads are qualified on the basis of their eligibility criteria. We examine the leads based on standards.</p>
                                </div>
                            </div>
                            <div className="card blue w-full md:w-1/4 px-2 mb-8">
                                <div className="rounded-md bg-gray-200 shadow-md p-5 " data-aos="fade-up">
                                    <div className="text-lg font-bold themeColor">Step 03</div>
                                    <h3 className="text-2xl font-bold mb-4 truncate ...">The Transfer Process</h3>
                                    <p className="text-gray-600 mb-4">After the qualification process, we transfer the leads using a three-way conference call. You can examine the merchant’s qualifications to ensure that it meets all the requirements .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[100rem] '>
                    <div className="contact ">

                        <div
                            className="items-center  px-8 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                            <div className="col-span-2 mb-8">
                                <p className="text-lg font-medium themeColor ">Trusted Worldwide</p>
                                <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
                                Target Audience For MCA Live Transfer Leads</h2>
                                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Business Leads World connects you with pre-qualified MCA Live Transfer leads who are ready and interested in securing funds. We can act as a bridge between you and the small companies looking for financing alternatives. We target the merchants, and after the complete verification, we generate the optimum MCA Live Leads for the money lenders.</p>
                                <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                                    <div>
                                        <a href="#"
                                            className="inline-flex items-center text-base font-medium themeColor ">
                                            Explore Legality Guide
                                            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            className="inline-flex items-center text-base font-medium themeColor ">
                                            Visit the Trust Center
                                            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                                <div>
                                    <svg className="w-10 h-10 mb-2 themeColor md:w-12 md:h-12 " fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <h3 className="mb-2 text-2xl font-bold dark:text-white">99.99% uptime</h3>
                                    <p className="font-light text-gray-500 dark:text-gray-400">For Landwind, with zero maintenance downtime</p>
                                </div>
                                <div>
                                    <svg className="w-10 h-10 mb-2 themeColor md:w-12 md:h-12 " fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z">
                                        </path>
                                    </svg>
                                    <h3 className="mb-2 text-2xl font-bold dark:text-white">600M+ Users</h3>
                                    <p className="font-light text-gray-500 dark:text-gray-400">Trusted by over 600 milion users around the world
                                    </p>
                                </div>
                                <div>
                                    <svg className="w-10 h-10 mb-2 themeColor md:w-12 md:h-12 " fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <h3 className="mb-2 text-2xl font-bold dark:text-white">100+ countries</h3>
                                    <p className="font-light text-gray-500 dark:text-gray-400">Have used Landwind to create functional websites
                                    </p>
                                </div>
                                <div>
                                    <svg className="w-10 h-10 mb-2 themeColor md:w-12 md:h-12 " fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                                        </path>
                                    </svg>
                                    <h3 className="mb-2 text-2xl font-bold dark:text-white">5+ Million</h3>
                                    <p className="font-light text-gray-500 dark:text-gray-400">Transactions per day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Benifits />
                <section className="growth max-w-[100rem]">
                    <div className="px-8 pt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                            <div className="max-w-lg">
                                <h2 className="text-xl font-bold sm:text-3xl">Live Transfers Give Predictable Growth</h2>
                                <p className="mt-4 lighttext leading-relaxed tracking-normal">MCA Live Transfer Leads can expand your business by offering you the finest quality leads. It is a cost-effective approach to grab potential leads by targeting the ideal merchants for your investments as a lender..</p>
                                <button className='mt-8  border-2 border-blue-600 p-3 rounded-full text-blue-600 hover:scale-105 px-8 hover:bg-blue-600 hover:text-white duration-300'>Get A Qoute</button>

                            </div>
                            <div className="">
                                <Image src={growth} height={1000} width={1000} alt="About Us Image" style={{ height: "100%" , width :"100%" }} />
                            </div>
                        </div>
                    </div>
                </section>
                <div className='bg-gray-100 max-w-[100rem]'>
                    <div className=" stepsBack p-12">
                        <h2 className="themetext text-3xl font-bold mb-4">How To Get Started With MCA Live Transfer Leads</h2>
                        <p className='lighttext leading-relaxed tracking-normal'>Business Leads World has made it quite simple to get started with MCA Live Transfer Leads.We will quickly respond to your request and generate the exemplary Live Lead for you.</p>

                        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                            <div className="flex md:contents flex-row-reverse">
                                <div
                                    className="relative p-0 rounded-xl my-6 text-gray-800  col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                                    <div className="flip-card ">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front p-4">
                                                <h3 className="text-lg font-semibold lg:text-xl">New Event 1</h3>
                                                <p className="mt-2 leading-6">Description of the first event.</p>
                                                <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 1</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div className="w-1 h-full  rounded-t-full bg-blue-600">
                                        </div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-blue-600 rounded-full top-1/2"></div>
                                </div>
                            </div>

                            <div className="flex md:contents">
                                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div className="w-1 h-full bg-blue-600"></div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-blue-600 rounded-full top-1/2"></div>
                                </div>
                                <div className="relative p-0 my-0 text-gray-800 rounded-xl col-start-6 col-end-10 mr-auto">
                                    <div className="flip-card ">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front p-4">
                                                <h3 className="text-lg font-semibold lg:text-xl">New Event 1</h3>
                                                <p className="mt-2 leading-6">Description of the first event.</p>
                                                <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex md:contents flex-row-reverse">
                                <div
                                    className="relative p-0 rounded-xl my-6 text-gray-800  col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                                    <div className="flip-card ">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front p-4">
                                                <h3 className="text-lg font-semibold lg:text-xl">New Event 3</h3>
                                                <p className="mt-2 leading-6">Description of the first event.</p>
                                                <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 1</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div className="w-1 h-full  rounded-t-full bg-blue-600">
                                        </div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-blue-600 rounded-full top-1/2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <WhyChooseUS />

            </div>
        </div>
    )
}
