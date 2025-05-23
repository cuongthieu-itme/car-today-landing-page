"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';

const navLinks = [
    {
        id: 1,
        url: '#',
        level: "Trang chủ"
    },
    {
        id: 2,
        url: '#',
        level: "Giới thiệu"
    },
    {
        id: 3,
        url: '#',
        level: "Loại xe"
    },
    {
        id: 4,
        url: '#',
        level: "Dịch vụ"
    },
    {
        id: 5,
        url: '#',
        level: "Blog"
    },
    {
        id: 6,
        url: '#',
        level: "Liên hệ"
    },
]

type Prop ={
    openNav : ()=> void
}



function Nav({openNav}:Prop) {
    const [navBg, setNavBg] = useState(false);
    useEffect(() =>{
        const handler = () => {
            setNavBg(window.scrollY >= 90);
        };

        // Add event listener
        window.addEventListener('scroll', handler);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handler);
        };
    },[])
    return (
        <div className={`fixed ${navBg ? "bg-[#4b86b4]" : "fixed"} transition-all w-full h-[12vh] duration-200 z-[1000]`}>
            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
                {/* Logo */}
                <Image src="/images/logo-xehomnay.png" width={160} height={120} alt="Logo" priority />

                {/* Nave link */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {
                        navLinks.map((link) => (
                            <Link key={link.id} href={link.url}>
                                <p className='nav__link'>{link.level}</p>
                            </Link>
                        ))
                    }
                </div>
                <div className='flex items-center space-x-4'>
                    <button className='md:PX-10 md:py-2 px-5 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg '>
                        Đăng ký ngay
                    </button>

                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
                </div>
            </div>
        </div>
    );
}

export default Nav;
