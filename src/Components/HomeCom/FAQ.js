"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import person from '../../Assests/person.jpg'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    
    return (
        <div className=' bg-white flex justify-center'>
            <div className=' p-16 pt-4 max-w-[100rem]'>
                <div className=' flex justify-center'>
                    <div className='py-20 text-center max-w-3xl  flex-col'>
                        <p className='themeColor text-lg font-bold'>Learn more according to needs</p>
                        <h1 className='themetext text-4xl font-bold my-6 '>Frequently Asked Questions.</h1>
                        <p className='lighttext leading-relaxed tracking-normal'>New analytic tools can help manufacturers inearnings by double-digit on It is a secure and simple on-demand, the total percentages.</p>
                    </div>
                </div>
                <div className="w-full max-w-[70rem] grid grid-cols-2 gap-16">
                    <ul className="basis-1/2">
                        {[
                            {
                                question: "How secure is my insurance information?",
                                answer: "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
                            },
                            {
                                question: "How can I customize my insurance coverage?",
                                answer: "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.",
                            },
                            {
                                question: "Is there a waiting period for insurance claims?",
                                answer: "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
                            },
                            
                        ].map((faq, index) => (
                            <li key={index}>
                                <button
                                    className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                                    aria-expanded={openIndex === index}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="flex-1 text-base-content">{faq.question}</span>
                                    <svg
                                        className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transform transition duration-200 ease-out ${openIndex === index ? 'rotate-90' : ''
                                            }`}
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect y="7" width="16" height="2" rx="1" />
                                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${openIndex === index ? 'rotate-90' : ''
                                            }`} />
                                    </svg>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                    style={{ transition: 'max-height 0.3s ease-in-out' }}
                                >
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 leading-relaxed">{faq.answer}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="basis-1/2">
                        {[
                            {
                                question: "How secure is my insurance information?",
                                answer: "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
                            },
                            {
                                question: "How can I customize my insurance coverage?",
                                answer: "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.",
                            },
                            {
                                question: "Is there a waiting period for insurance claims?",
                                answer: "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
                            },
                        ].map((faq, index) => (
                            <li key={index}>
                                <button
                                    className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                                    aria-expanded={openIndex === index}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="flex-1 text-base-content">{faq.question}</span>
                                    <svg
                                        className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transform transition duration-200 ease-out ${openIndex === index ? 'rotate-90' : ''
                                            }`}
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect y="7" width="16" height="2" rx="1" />
                                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${openIndex === index ? 'rotate-90' : ''
                                            }`} />
                                    </svg>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                    style={{ transition: 'max-height 0.3s ease-in-out' }}
                                >
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 leading-relaxed">{faq.answer}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
