import Image from 'next/image'
import React from 'react'
import blog1 from '../../Assests/blog1.jpg';


export default function page() {
    return (
        <div className='flex justify-center'>
            <div className="w-full my-8 max-w-[100rem] p-12 ">
                <p className='themeColor font-semibold text-xl text-center'>Featured Insights</p>
                <div className='flex justify-center mb-8 text-center'>
                    <h1 className='themetext text-5xl tracking-normal font-bold my-6 max-w-[60vw]'>
                        Our latest thinking on the issues that matter most in business.</h1>
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    <div className="flex flex-col overflow-hidden rounded-lg hover:shadow-2xl shadow-md mb-8">
                        <div className="flex-shrink-0">
                            <Image src={blog1} width={300} height={100} className=" w-full " alt="" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-black">
                                    <a href="#" className="hover:underline">Article</a>
                                </p>
                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                                    <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                                </a>
                            </div>
                            <div className='flex justify-between pt-6'>
                                <div className=" flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#">
                                            <span className="sr-only">Roel Aufderehar</span>
                                            <Image width={100} height={100} className="h-10 w-10 rounded-full" src={blog1} alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-md font-bold themetext">
                                            <a href="#" className="hover:underline">Roel Aufderehar</a>
                                        </p>

                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <a href='' className='themetext hover:text-blue-500 font-medium text-md'>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg hover:shadow-2xl shadow-md mb-8">
                        <div className="flex-shrink-0">
                            <Image src={blog1} width={300} height={100} className=" w-full " alt="" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-black">
                                    <a href="#" className="hover:underline">Article</a>
                                </p>
                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                                    <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                                </a>
                            </div>
                            <div className='flex justify-between pt-6'>
                                <div className=" flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#">
                                            <span className="sr-only">Roel Aufderehar</span>
                                            <Image width={100} height={100} className="h-10 w-10 rounded-full" src={blog1} alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-md font-bold themetext">
                                            <a href="#" className="hover:underline">Roel Aufderehar</a>
                                        </p>

                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <a href='' className='themetext hover:text-blue-500 font-medium text-md'>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg hover:shadow-2xl shadow-md mb-8">
                        <div className="flex-shrink-0">
                            <Image src={blog1} width={300} height={100} className=" w-full " alt="" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-black">
                                    <a href="#" className="hover:underline">Article</a>
                                </p>
                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                                    <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                                </a>
                            </div>
                            <div className='flex justify-between pt-6'>
                                <div className=" flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#">
                                            <span className="sr-only">Roel Aufderehar</span>
                                            <Image width={100} height={100} className="h-10 w-10 rounded-full" src={blog1} alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-md font-bold themetext">
                                            <a href="#" className="hover:underline">Roel Aufderehar</a>
                                        </p>

                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <a href='' className='themetext hover:text-blue-500 font-medium text-md'>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg hover:shadow-2xl shadow-md mb-8">
                        <div className="flex-shrink-0">
                            <Image src={blog1} width={300} height={100} className=" w-full " alt="" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-black">
                                    <a href="#" className="hover:underline">Article</a>
                                </p>
                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                                    <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                                </a>
                            </div>
                            <div className='flex justify-between pt-6'>
                                <div className=" flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#">
                                            <span className="sr-only">Roel Aufderehar</span>
                                            <Image width={100} height={100} className="h-10 w-10 rounded-full" src={blog1} alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-md font-bold themetext">
                                            <a href="#" className="hover:underline">Roel Aufderehar</a>
                                        </p>

                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <a href='' className='themetext hover:text-blue-500 font-medium text-md'>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg hover:shadow-2xl shadow-md mb-8">
                        <div className="flex-shrink-0">
                            <Image src={blog1} width={300} height={100} className=" w-full " alt="" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-black">
                                    <a href="#" className="hover:underline">Article</a>
                                </p>
                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                                    <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                                </a>
                            </div>
                            <div className='flex justify-between pt-6'>
                                <div className=" flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#">
                                            <span className="sr-only">Roel Aufderehar</span>
                                            <Image width={100} height={100} className="h-10 w-10 rounded-full" src={blog1} alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-md font-bold themetext">
                                            <a href="#" className="hover:underline">Roel Aufderehar</a>
                                        </p>

                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <a href='' className='themetext hover:text-blue-500 font-medium text-md'>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg hover:shadow-2xl shadow-md mb-8">
                        <div className="flex-shrink-0">
                            <Image src={blog1} width={300} height={100} className=" w-full " alt="" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-black">
                                    <a href="#" className="hover:underline">Article</a>
                                </p>
                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                                    <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                                </a>
                            </div>
                            <div className='flex justify-between pt-6'>
                                <div className=" flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#">
                                            <span className="sr-only">Roel Aufderehar</span>
                                            <Image width={100} height={100} className="h-10 w-10 rounded-full" src={blog1} alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-md font-bold themetext">
                                            <a href="#" className="hover:underline">Roel Aufderehar</a>
                                        </p>

                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <a href='' className='themetext hover:text-blue-500 font-medium text-md'>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
