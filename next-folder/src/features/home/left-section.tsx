import React from 'react'
import WomanImg from '../../../public/img/left-woman-section.png'
import shape from '../../../public/img/left-section-shape.png'
import { TiStarFullOutline } from 'react-icons/ti'

export default function LeftSection() {
  return (
    <div className='relative lg:block hidden rounded-tl-[64px] bg-gradient-to-b from-[#C9D4FF] via-[#EDF1FF] to-[#EDF1FF]'>
        <img src={WomanImg.src} className='absolute bottom-0 left-0 max-h-[80vh]'/>
        <img src={shape.src} className='absolute top-8 right-0 '/>

        <div className='absolute bg-white py-4 px-12 rounded-3xl mx-auto right-0 left-0 w-fit bottom-12 shadow-lg'>
            <span className='font-bold text-lg block text-center'>برنامه‌نویس فرانت‌اند</span>
            <span className='text-[#5F6063] block text-center'>ملینا موسی‌خوانی</span>
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
