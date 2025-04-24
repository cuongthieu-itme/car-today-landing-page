import { coursesData } from "@/data/data"
import Image from 'next/image'
import CourseCard from './CourseCard'

const Course = () => {
  return (
    <div className='pt-16 pb-12 relative bg-[#e7eff6]'>
        <Image src="/images/cb.png" alt='image' width={800} height={800} className='absolute to-[30%] animate-bounce'/>
        <div className='w-[80%] pt-8 mx-auto'>
            <h1 className='text-4xl md:text-5xl text-gray-900 font-bold'>Popular Course</h1>
            <div className='md:mt-16 mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                {coursesData.map((course) => {
                  return <div key={course.id} className=''>
                      <CourseCard course={course}/>
                  </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Course
