import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20'>
            <div>
                <Image src="/images/logo.png" alt='logo' width={100} height={100}/>
                <p className='text-white text-opacity-50'>Lorem ipsum dolor sit.</p>
                <div className='flex items-center space-x-4 mt-6'>
                    <FaFacebook className='w-6 h-6 text-blue-600'/>
                    <FaTwitter className='w-6 h-6 text-sky-500'/>
                    <FaYoutube className='w-6 h-6 text-red-700'/>
                    <FaInstagram className='w-6 h-6 text-pink-600 '/>
                </div>
            </div>

            <div>
                <h1 className='text-lg text-white font-bold mb-4'>Popular</h1>
                <p className='text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit'>Web development</p>
                <p className='text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit'>Hacking</p>
                <p className='text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit'>UI/UX</p>
                <p className='text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit'>App Development</p>
                <p className='text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit'>Desktop Development</p>
                <p className='text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit'>Digital Marketing</p>
            </div>

            <div>
                <h1 className='text-lg text-white font-bold mb-4'>Quick Link</h1>
                <p className='text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit'>Home</p>
                <p className='text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit'>About</p>
                <p className='text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit'>Courses</p>
                <p className='text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit'>Instructor</p>
                <p className='text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit'>Profile</p>
                <p className='text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit'>Privacy Policy</p>
            </div>


            <div>
                <h1 className='text-lg text-white font-bold mb-4'>Subscribe our Newsletter</h1>
                <input placeholder='Enter your email' type="text" className='px-6 py-2 rounded-lg outline-none bg-gray-700 w-full text-white' />
                <button className='px-6 py-2 mt-4 rounded-lg outline-none bg-rose-700 w-full text-white'>Subscribe</button>
            </div>
        </div>
        <p className="text-center mt-4 text-base text-white">@Copyright 2025 by webdev warriors</p>
    </div>
  )
}

export default Footer