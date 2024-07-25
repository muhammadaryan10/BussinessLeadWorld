"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import team from '../../Assests/team1.jpg'
import '@/app/leaderShip.css'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

export default function LeaderShip() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <div className='flex justify-center bg-gray-100'>
                <div className="w-full mt-8  max-w-[100rem] p-14 pb-0">
                    <p className='themeColor font-semibold'>Our Leadership and People</p>
                    <div className='flex justify-between mb-8'>
                        <h1 className='themetext text-4xl tracking-normal font-bold my-6 mb-16 max-w-[50vw]'>We hear over and over again that it feels different to work with us.</h1>
                    </div>
                    <div className='flex flex-row-reverse h-[60vh] max-h-[40rem]'>
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2 bg-black"
                        >
                              <div className="swiper-button-next z-50 absolute left-100 text-black p-8 rounded-full border-blue-400 border-4"></div>
                              <div className="swiper-button-prev z-50 absolute left-100 text-black p-8 rounded-full border-blue-400 border-4 "></div>
                            <SwiperSlide className='bg-white'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='h-full w-full'>
                                        <Image src={team} className='h-100' />
                                    </div>
                                    <div className='p-8 pr-12 my-8'>
                                        <h1 className='themetext text-3xl font-bold'>Natalia Zox</h1>
                                        <p className='themeColor font-semibold my-8 '>Worldwide Managing Partner,
                                            San Francisco</p>
                                        <p className='lighttext'>Natalia Zox is the worldwide managing partner of Prysm. He is responsible for all aspects of the firm's strategy, team and operations across Our’s global network of 50+ offices in world wide.</p>
                                        <ul className="wrapper">
                                            <li className="icon facebook">
                                                <span className="tooltip">Facebook</span>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </li>
                                            <li className="icon twitter">
                                                <span className="tooltip">Twitter</span>
                                                <svg
                                                    height="1.8em"
                                                    fill="currentColor"
                                                    viewBox="0 0 48 48"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="twitter"
                                                >
                                                    <path
                                                        d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                                                    ></path>
                                                </svg>
                                            </li>
                                            <li className="icon instagram">
                                                <span className="tooltip">Instagram</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    className="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </ul>

                                        <button className='themeBackground w-40 p-4 mt-2 rounded-full text-white font-semibold'>Read More</button>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='bg-white'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='h-full w-full'>
                                        <Image src={team} className='h-100' />
                                    </div>
                                    <div className='p-8 pr-12 my-8'>
                                        <h1 className='themetext text-3xl font-bold'>Natalia Zox</h1>
                                        <p className='themeColor font-semibold my-8 '>Worldwide Managing Partner,
                                            San Francisco</p>
                                        <p className='lighttext'>Natalia Zox is the worldwide managing partner of Prysm. He is responsible for all aspects of the firm's strategy, team and operations across Our’s global network of 50+ offices in world wide.</p>
                                        <ul className="wrapper">
                                            <li className="icon facebook">
                                                <span className="tooltip">Facebook</span>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </li>
                                            <li className="icon twitter">
                                                <span className="tooltip">Twitter</span>
                                                <svg
                                                    height="1.8em"
                                                    fill="currentColor"
                                                    viewBox="0 0 48 48"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="twitter"
                                                >
                                                    <path
                                                        d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                                                    ></path>
                                                </svg>
                                            </li>
                                            <li className="icon instagram">
                                                <span className="tooltip">Instagram</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    className="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </ul>

                                        <button className='themeBackground w-40 p-4 mt-2 rounded-full text-white font-semibold'>Read More</button>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='bg-white'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='h-full w-full'>
                                        <Image src={team} className='h-100' />
                                    </div>
                                    <div className='p-8 pr-12 my-8'>
                                        <h1 className='themetext text-3xl font-bold'>Natalia Zox</h1>
                                        <p className='themeColor font-semibold my-8 '>Worldwide Managing Partner,
                                            San Francisco</p>
                                        <p className='lighttext'>Natalia Zox is the worldwide managing partner of Prysm. He is responsible for all aspects of the firm's strategy, team and operations across Our’s global network of 50+ offices in world wide.</p>
                                        <ul className="wrapper">
                                            <li className="icon facebook">
                                                <span className="tooltip">Facebook</span>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </li>
                                            <li className="icon twitter">
                                                <span className="tooltip">Twitter</span>
                                                <svg
                                                    height="1.8em"
                                                    fill="currentColor"
                                                    viewBox="0 0 48 48"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="twitter"
                                                >
                                                    <path
                                                        d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                                                    ></path>
                                                </svg>
                                            </li>
                                            <li className="icon instagram">
                                                <span className="tooltip">Instagram</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    className="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </ul>

                                        <button className='themeBackground w-40 p-4 mt-2 rounded-full text-white font-semibold'>Read More</button>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='bg-white'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='h-full w-full'>
                                        <Image src={team} className='h-100' />
                                    </div>
                                    <div className='p-8 pr-12 my-8'>
                                        <h1 className='themetext text-3xl font-bold'>Natalia Zox</h1>
                                        <p className='themeColor font-semibold my-8 '>Worldwide Managing Partner,
                                            San Francisco</p>
                                        <p className='lighttext'>Natalia Zox is the worldwide managing partner of Prysm. He is responsible for all aspects of the firm's strategy, team and operations across Our’s global network of 50+ offices in world wide.</p>
                                        <ul className="wrapper">
                                            <li className="icon facebook">
                                                <span className="tooltip">Facebook</span>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </li>
                                            <li className="icon twitter">
                                                <span className="tooltip">Twitter</span>
                                                <svg
                                                    height="1.8em"
                                                    fill="currentColor"
                                                    viewBox="0 0 48 48"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="twitter"
                                                >
                                                    <path
                                                        d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                                                    ></path>
                                                </svg>
                                            </li>
                                            <li className="icon instagram">
                                                <span className="tooltip">Instagram</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    className="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </ul>

                                        <button className='themeBackground w-40 p-4 mt-2 rounded-full text-white font-semibold'>Read More</button>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='bg-white'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='h-full w-full'>
                                        <Image src={team} className='h-100' />
                                    </div>
                                    <div className='p-8 pr-12 my-8'>
                                        <h1 className='themetext text-3xl font-bold'>Natalia Zox</h1>
                                        <p className='themeColor font-semibold my-8 '>Worldwide Managing Partner,
                                            San Francisco</p>
                                        <p className='lighttext'>Natalia Zox is the worldwide managing partner of Prysm. He is responsible for all aspects of the firm's strategy, team and operations across Our’s global network of 50+ offices in world wide.</p>
                                        <ul className="wrapper">
                                            <li className="icon facebook">
                                                <span className="tooltip">Facebook</span>
                                                <svg
                                                    viewBox="0 0 320 512"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    ></path>
                                                </svg>
                                            </li>
                                            <li className="icon twitter">
                                                <span className="tooltip">Twitter</span>
                                                <svg
                                                    height="1.8em"
                                                    fill="currentColor"
                                                    viewBox="0 0 48 48"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="twitter"
                                                >
                                                    <path
                                                        d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                                                    ></path>
                                                </svg>
                                            </li>
                                            <li className="icon instagram">
                                                <span className="tooltip">Instagram</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    fill="currentColor"
                                                    className="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </ul>

                                        <button className='themeBackground w-40 p-4 mt-2 rounded-full text-white font-semibold'>Read More</button>

                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            direction={'vertical'}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper mySwiperScroll" style={{width:"70%"}}
                        >
                            <SwiperSlide className=''>
                            <Image src={team} className='rounded-full h-24 w-24 border-3 border-black' />
                                <p className="themetext text-md font-bold mt-3">Natalia Zox</p>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                            <Image src={team} className='rounded-full h-24 w-24 border-3 border-black' />
                                <p className="themetext text-md font-bold mt-3">Natalia Zox</p>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                            <Image src={team} className='rounded-full h-24 w-24 border-3 border-black' />
                                <p className="themetext text-md font-bold mt-3">Natalia Zox</p>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                            <Image src={team} className='rounded-full h-24 w-24 border-3 border-black' />
                                <p className="themetext text-md font-bold mt-3">Natalia Zox</p>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                            <Image src={team} className='rounded-full h-24 w-24 border-3 border-black' />
                                <p className="themetext text-md font-bold mt-3">Natalia Zox</p>
                            </SwiperSlide>      
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    )
}
