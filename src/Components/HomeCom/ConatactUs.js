import React from 'react'

export default function ConatactUs() {
    return (
        <div className='flex justify-center'>
        <div className=' max-h-[50rem] max-w-[100rem] contact bg-gray-100 flex py-24 px-12'>
            <div className=''>
                <div className=''>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14473.976763919587!2d67.03261105!3d24.91522925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fbd469d9bcd%3A0x749325c6e39952f3!2sNazimabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1721396186416!5m2!1sen!2s"  height="450" allowfullscreen className='border-8 border-white mt-12 w-full' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='grid grid-cols-3 py-4'>
                    <div className='pr-4'>
                        <h1 className='themetext text-2xl font-bold'>Office Address:</h1>
                        <p className='lighttext my-3 border-r-2 mt-4'>380 St Kilda Road, Melbourne VIC 3004, Australia</p>
                    </div>
                    <div className='pr-4'>
                        <h1 className='themetext text-2xl font-bold'>Phone Number :</h1>
                        <p className='lighttext my-3 border-r-2 mt-4'>+123 (4567) 890</p>
                        <p className='lighttext my-3 border-r'>+123 (4567) 890</p>
                    </div>
                    <div className='pr-4'>
                        <h1 className='themetext text-2xl font-bold'>Mail Address:</h1>
                        <p className='lighttext my-3 mt-4'>evato@gmail.com

                            help@support.com</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end pr-4'>  
                <div className=' p-12 text-center w-md bg-white'>
                    <h1 className='themetext text-2xl font-bold'>Contact us</h1>
                    <p className='lighttext my-3'>We work with ambitious leaders who want to define the future, not hide from it.</p>
                    <div className="text-start mb-3 relative mt-5">
                        <label for="name" className="mb-3 block text-sm font-medium lighttext absolute top-3 left-5 ">
                            Name *
                        </label>
                        <input type="text" name="name" id="name" placeholder="Write Name ..."
                            className="w-full rounded-md placeholder:text-black placeholder:font-bold   border border-[#e0e0e0] bg-white pl-5 p-6 pt-8 pb-4 text-base font-medium text-[#6B7280] outline-none" />
                    </div>
                    <div className="text-start mb-3 relative">
                        <label for="name" className="mb-3 block text-sm font-medium lighttext absolute top-3 left-5 ">
                            Mobile number *
                        </label>
                        <input type="text" name="name" id="name" placeholder="Write number ..."
                            className="w-full rounded-md placeholder:text-black placeholder:font-bold   border border-[#e0e0e0] bg-white pl-5 p-6 pt-8 pb-4 text-base font-medium text-[#6B7280] outline-none" />
                    </div>
                    <div className="text-start mb-3 relative">
                        <label for="name" className="mb-3 block text-sm font-medium lighttext absolute top-3 left-5 ">
                            Email address *
                        </label>
                        <input type="text" name="name" id="name" placeholder="Write Email ..."
                            className="w-full rounded-md placeholder:text-black placeholder:font-bold   border border-[#e0e0e0] bg-white pl-5 p-6 pt-8 pb-4 text-base font-medium text-[#6B7280] outline-none" />
                    </div>
                    <div className='flex justify-start mt-8'>
                        <button className=
                            'bg-blue-500 p-4 rounded-full'>Lets Go to work </button>

                    </div>
                    <div className="md:flex md:items-center mt-8">
                        <label className="block text-gray-500 font-bold text-start">
                            <input className="mr-2 leading-tight" type="checkbox" />
                            <span className="text-sm">
                                *I have read the Privacy Policy and agree to its terms.
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
         </div>
    )
}
