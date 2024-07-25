"use client";
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import Image from 'next/image';
import image1 from '../../Assests/image1.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../app/Insight.css'


export default function CaseStudies() {
    useEffect(() => {
        Aos.init({
            duration: 900,
            once: false,
        });
    }, []);


    return (
        <div className='flex justify-center'>
            <div className="w-full my-8 max-w-[100rem] relative  p-24">
                <p className='themeColor font-semibold' data-aos="fade-right" data-aos-offset="300"
                    data-aos-easing="ease-in-sine">Case studies</p>
                <button className="absolute  swiper-button-prev3 text-black p-4 h-16 group duration-300 transition-all hover:bg-blue-500 rounded-full "><svg className="h-6 w-6 text-black group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg></button>
                <button className="absolute  swiper-button-next3 text-black p-4 h-16 group duration-300 transition-all hover:bg-blue-500 rounded-full"> <svg className="h-6 w-6 text-black group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg></button>

                <div className='flex justify-between mb-8'>
                    <h1 className='themetext text-4xl tracking-normal font-bold my-6 max-w-[50vw]' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">Our alumni number more than 34,000 & work in every business.</h1>
                    <button className='text-black text-lg font-bold'>View More</button>
                </div>
                <Swiper className="mySwiper relative" spaceBetween={28} slidesPerView={1} pagination={{
                    type: 'fraction',
                }}
                    navigation={{
                        nextEl: '.swiper-button-next3',
                        prevEl: '.swiper-button-prev3'
                    }}
                    modules={[Pagination, Navigation]}
                >

                    <SwiperSlide>
                        <div className='flex justify-end'>
                            <div className=''>
                                <Image src={image1} width={700} height={800} className='' />
                            </div>
                            <div className=' fixed top-10 left-10 sm:top-20 sm:left-20 md:top-20 md:left-20 lg:top-20 lg:left-20 xl:top-20 xl:left-40 2xl:left-80  z-50 bg-black max-w-lg p-10 ' data-aos="fade-down" data-aos-once="false">
                                <h1 className='text-3xl text-white font-bold  mb-5'>We take consistent approach to recruiting & skills for the development </h1>
                                <p className='text-sm leading-6 text-white'>New analytic tools help manufactures in labor intensive sectors boast productivity and earnings.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex justify-end'>
                            <div className=''>
                                <Image src={image1} width={700} height={800} className='' />
                            </div>
                            <div className=' fixed top-10 left-10 sm:top-20 sm:left-20 md:top-20 md:left-20 lg:top-20 lg:left-20 xl:top-20 xl:left-40 2xl:left-80  z-50 bg-black max-w-lg p-10 ' data-aos="fade-down">
                                <h1 className='text-3xl text-white font-bold  mb-5'>We take consistent approach to recruiting & skills for the development </h1>
                                <p className='text-sm leading-6 text-white'>New analytic tools help manufactures in labor intensive sectors boast productivity and earnings.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex justify-end'>
                            <div className=''>
                                <Image src={image1} width={700} height={800} className='' />
                            </div>
                            <div className=' fixed top-10 left-10 sm:top-20 sm:left-20 md:top-20 md:left-20 lg:top-20 lg:left-20 xl:top-20 xl:left-40 2xl:left-80  z-50 bg-black max-w-lg p-10 ' data-aos="fade-down">
                                <h1 className='text-3xl text-white font-bold  mb-5'>We take consistent approach to recruiting & skills for the development </h1>
                                <p className='text-sm leading-6 text-white'>New analytic tools help manufactures in labor intensive sectors boast productivity and earnings.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
