"use client"
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

const HeroImage = () => {
  return <Tilt>
    <div className='hidden lg:block z-0'>
      <Image src="/images/hero-car.png" width={800} height={600} alt='Hero'/>
    </div>
  </Tilt>
}

export default HeroImage
