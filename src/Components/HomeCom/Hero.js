"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from '../../Assests/hero1.png'
import hero2 from '../../Assests/hero2.png'
import Image from 'next/image'
import "@/app/Hero.css"
import MovingComponent from 'react-moving-text'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Hero() {
  const letters = 'Premium'.split('');
  const letters2 = 'Merchant'.split('');
  const letters3 = 'Cash'.split('');
  const letters4 = 'Advance'.split('');
  const letters5 = 'Leads'.split(''); // Replace with your actual text
  return (
    <div className='hero'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper max-h-[80rem]"
      >
        {/* <Image src={hero2} width={100} height={100} className='image2' /> */}
        <SwiperSlide className=' h-[80vh] '>
          {/* <Image src={hero1} width={100} height={100} className='image1' /> */}

          <div className='image h-[80vh]'>
            <div className='w-full  grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:p-12 p-5    max-w-[100rem]  lg:py-32 pt-32 '>
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center lg:items-start items-center gap-8 flex">
                  <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                      <h2 className="text-white sm:text-6xl text-2xl flex font-bold font-manrope leading-normal lg:text-start text-start z-50">
                        <> {letters.map((letter, index) => (
                          <MovingComponent
                            key={index}
                            type="flipToBottom"
                            duration="1000ms"
                            delay={`${index * 100}ms`}  // Corrected delay syntax
                            direction="reverse"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                          >
                            {letter}
                          </MovingComponent>
                        ))}
                          <span className="mr-4"></span> {/* Add space between words */}
                        </>
                        {letters2.map((letter, index) => (
                          <MovingComponent
                            key={index}
                            type="flipToBottom"
                            duration="1000ms"
                            delay={`${index * 100}ms`}  // Corrected delay syntax
                            direction="reverse"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                          >
                            {letter}
                          </MovingComponent>
                        ))}
                      </h2>
                      <h2 className="text-white sm:text-6xl text-2xl flex font-bold font-manrope leading-normal lg:text-start text-start z-50">
                        <> {letters3.map((letter, index) => (
                          <MovingComponent
                            key={index}
                            type="flipToBottom"
                            duration="1000ms"
                            delay={`${index * 100}ms`}  // Corrected delay syntax
                            direction="reverse"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                          >
                            {letter}
                          </MovingComponent>
                        ))}
                          <span className="mr-4"></span> {/* Add space between words */}
                        </>
                        <> {letters4.map((letter, index) => (
                          <MovingComponent
                            key={index}
                            type="flipToBottom"
                            duration="1000ms"
                            delay={`${index * 100}ms`}  // Corrected delay syntax
                            direction="reverse"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                          >
                            {letter}
                          </MovingComponent>
                        ))}
                          <span className="mr-4"></span> {/* Add space between words */}
                        </>
                        {letters5.map((letter, index) => (
                          <MovingComponent
                            key={index}
                            type="flipToBottom"
                            duration="1000ms"
                            delay={`${index * 100}ms`}  // Corrected delay syntax
                            direction="reverse"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                          >
                            {letter}
                          </MovingComponent>
                        ))}
                      </h2>
                      <p className="text-white sm:text-base font-normal text-xs  leading-relaxed lg:text-start text-start z-50">If you’re looking for pre-qualified Merchant Cash Advance leads to invest in for your lending business, you’ve come to the right place. In today’s dynamic business environment, Merchant Cash Advance Leads offer lenders a flexible funding solution, unlocking the potential for high returns on the purchased leads.</p>
                    </div>
                  </div>
                  <button className='p-3 rounded-full text-white hover:scale-105 px-8 themeButton duration-300 bg-blue-600 z-50'>BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='h-[80vh]'>
          {/* <Image src={hero1} width={100} height={100} className='image1' /> */}
          <div className='imagehero2  h-[80vh]'>
            <div className='w-full  grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:p-12 p-5    max-w-[100rem]  lg:py-32 pt-32 '>
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center lg:items-start items-center gap-8 flex">
                  <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                      <h2 className="text-white sm:text-6xl text-2xl flex font-bold font-manrope leading-normal lg:text-start text-start z-50">
                        <> {letters.map((letter, index) => (
                          <MovingComponent
                            key={index}
                            type="flipToBottom"
                            duration="1000ms"
                            delay={`${index * 100}ms`}  // Corrected delay syntax
                            direction="reverse"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                          >
                            {letter}
                          </MovingComponent>
                        ))}
                          <span className="mr-4"></span> {/* Add space between words */}
                        </>
                        {letters2.map((letter, index) => (
                          <MovingComponent
                            key={index}
                            type="flipToBottom"
                            duration="1000ms"
                            delay={`${index * 100}ms`}  // Corrected delay syntax
                            direction="reverse"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                          >
                            {letter}
                          </MovingComponent>
                        ))}
                      </h2>
                      <h2 className="text-white sm:text-6xl text-2xl flex font-bold font-manrope leading-normal lg:text-start text-start z-50">
                        <> {letters3.map((letter, index) => (
                          <MovingComponent
                            key={index}
                            type="flipToBottom"
                            duration="1000ms"
                            delay={`${index * 100}ms`}  // Corrected delay syntax
                            direction="reverse"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                          >
                            {letter}
                          </MovingComponent>
                        ))}
                          <span className="mr-4"></span> {/* Add space between words */}
                        </>
                        <> {letters4.map((letter, index) => (
                          <MovingComponent
                            key={index}
                            type="flipToBottom"
                            duration="1000ms"
                            delay={`${index * 100}ms`}  // Corrected delay syntax
                            direction="reverse"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                          >
                            {letter}
                          </MovingComponent>
                        ))}
                          <span className="mr-4"></span> {/* Add space between words */}
                        </>
                        {letters5.map((letter, index) => (
                          <MovingComponent
                            key={index}
                            type="flipToBottom"
                            duration="1000ms"
                            delay={`${index * 100}ms`}  // Corrected delay syntax
                            direction="reverse"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                          >
                            {letter}
                          </MovingComponent>
                        ))}
                      </h2>
                      <p className="text-white sm:text-base font-normal text-xs  leading-relaxed lg:text-start text-start z-50">If you’re looking for pre-qualified Merchant Cash Advance leads to invest in for your lending business, you’ve come to the right place. In today’s dynamic business environment, Merchant Cash Advance Leads offer lenders a flexible funding solution, unlocking the potential for high returns on the purchased leads.</p>
                    </div>
                  </div>
                  <button className='p-3 rounded-full text-white hover:scale-105 px-8 themeButton duration-300 bg-blue-600 z-50'>BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
