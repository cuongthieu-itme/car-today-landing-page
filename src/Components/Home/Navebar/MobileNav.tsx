"use client"
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

const navLinks = [
  {
    id: 1,
    url: '#',
    level: "Home"
  },
  {
    id: 2,
    url: '#',
    level: "About"
  },
  {
    id: 3,
    url: '#',
    level: "Courses"
  },
  {
    id: 4,
    url: '#',
    level: "Testimonial"
  },
  {
    id: 5,
    url: '#',
    level: "Blog"
  },
  {
    id: 6,
    url: '#',
    level: "Contact"
  },
]


type Prop ={
  showNav : boolean;
  closeNav : ()=> void
}


function MobileNav({showNav,closeNav}:Prop) {

  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
  return (
    <div>
      {/* overlay */}
      <div className={`fixed ${navOpen} top-0 transition-all transform duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-full h-[100vh]`} />
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-950 space-y-6 z-[100006]`}>
        {
          navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className='nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>{link.level}</p>
            </Link>
          ))
        }

        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white"/>
      </div>
    </div>
  )
}

export default MobileNav