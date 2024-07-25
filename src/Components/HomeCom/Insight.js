"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import Image from 'next/image';
import blog1 from '../../Assests/blog1.jpg';
import '../../app/Insight.css'


export default function CaseStudies() {
    return (
        <div className='flex justify-center'>
            <div className="w-full my-8 max-w-[100rem] p-12">
                <p className='themeColor font-semibold'>Featured Insights</p>
                <div className='flex justify-between mb-8'>
                    <h1 className='themetext text-4xl tracking-normal font-bold my-6 max-w-[50vw]'>
                        Our latest thinking on the issues that matter most in business.</h1>
                    <div className='flex justify-center items-center'>
                        <div className='flex gap-3'>
                            <button className="swiper-button-prev2 text-black p-4 h-16 group duration-300 transition-all hover:bg-blue-500 rounded-full border-blue-400 "><svg className="h-6 w-6 text-black group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></button>
                            <button className="swiper-button-next2 text-black p-4 h-16 group duration-300 transition-all hover:bg-blue-500 rounded-full border-blue-400 "> <svg className="h-6 w-6 text-black group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></button>

                        </div>
                    </div>
                </div>
                <Swiper className="mySwiper" spaceBetween={28} slidesPerView={3}
                    navigation={{
                        nextEl: '.swiper-button-next2',
                        prevEl: '.swiper-button-prev2'
                    }}
                    modules={[Navigation]}
                >

                    <SwiperSlide>
                        <div className="flex flex-col overflow-hidden rounded-lg hover:shadow-xl mb-8">
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col overflow-hidden rounded-lg hover:shadow-xl mb-8">
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col overflow-hidden rounded-lg hover:shadow-xl mb-8">
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col overflow-hidden rounded-lg hover:shadow-xl mb-8">
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
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
