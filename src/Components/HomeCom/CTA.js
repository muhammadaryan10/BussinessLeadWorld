import React from 'react'


export default function CTA() {
    return (
        <div className='flex justify-center'>
            <div className='w-full flex justify-between p-12 max-w-[100rem] bg-blue-800 text-white CTA' >
              
                <p className='max-w-xl text-lg'>
                    Stay ahead in a rapidly world. Subscribe to Prysm Insights, our monthly look at the critical issues facing global business.
                </p>
                <div className="block lg:max-w-md">
                    <div
                        className="lg:bg-gray-100 lg:rounded-full lg:h-14 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
                        <input type="text" name="email"
                            className="py-2 px-4 bg-gray-100 rounded-full text-gray-900 placeholder:text-gray-500 focus:outline-none flex-1 w-full max-w-xl mx-auto lg:w-auto lg:py-5 lg:px-7 lg:bg-transparent"
                            placeholder="Your email here..." />
                        <button type="submit"
                            className="py-3.5 px-7 bg-blue-600 shadow-md rounded-full text-white font-semibold hover:bg-blue-700">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
