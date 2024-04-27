import React from 'react'
import ManImg from '../../../public/img/right-man-section.png'
import shape from '../../../public/img/right-section-shape.png'
import { TiStarFullOutline } from 'react-icons/ti'

export default function RightSection() {
  return (
    <div className='relative lg:block hidden rounded-tr-[64px] bg-gradient-to-b from-[#C9D4FF] via-[#EDF1FF] to-[#EDF1FF]'>
        <img src={ManImg.src} className='absolute bottom-0 right-0'/>
        <img src={shape.src} className='absolute top-8 left-0'/>

        <div className='absolute bg-white py-4 px-12 rounded-3xl mx-auto right-0 left-0 w-fit bottom-12 shadow-lg'>
            <span className='font-bold text-lg block text-center'>طراح رابط کاربری</span>
            <span className='text-[#5F6063] block text-center'>میثم جعفری</span>
            <div className='flex justify-center items-center gap-1 mt-2'>
                <TiStarFullOutline color='#FFDB4A'/>
                <TiStarFullOutline color='#FFDB4A'/>
                <TiStarFullOutline color='#FFDB4A'/>
                <TiStarFullOutline color='#FFDB4A'/>
                <TiStarFullOutline color='#FFDB4A'/>
            </div>
        </div>
    </div>
  )
}
