import React from 'react'
import Goal1 from '../assets/Frame 27.png'
import Goal2 from '../assets/goal2.jpg'
import Goal3 from '../assets/goal3.jpg'
import Goal4 from '../assets/goal4.jpg'

function Goals() {
    return (
        <div className='flex flex-col gap-5 h-[438px] justify-center px-23 bg-[#F8F6F5]'>
            <h1 className='text-[27px] font-semibold'>Explore By Goal</h1>
            <div className='flex items-center justify-between gap-10'>
                <div className='relative'>
                    <img src={Goal1} className='rounded-xl w-[320px] h-[274px] object-cover' alt="" />
                    <div class="absolute inset-0 bg-black/20 rounded-lg"></div>
                    <p className='absolute top-[43%] left-[30%] text-[24px] text-center leading-7 text-white w-[131px]'>Muscle Building</p>
                </div>
                <div className='w-[320px] h-[274px] relative'>
                    <img src={Goal2} className='rounded-xl w-[320px] h-[274px]' alt="" />
                    <div class="absolute inset-0 bg-black/20 rounded-lg"></div>
                    <p className='absolute top-[43%] left-[30%] text-[24px] text-center leading-7 text-white w-[131px]'>Health & Wellness</p>
                </div>
                <div className='w-[320px] h-[274px] relative'>
                    <img src={Goal3} className='rounded-xl w-[320px] h-[274px]' alt="" />
                    <div class="absolute inset-0 bg-black/20 rounded-lg"></div>
                    <p className='absolute top-[43%] left-[30%] text-[24px] text-center leading-7 text-white w-[131px]'>Productivity</p>
                </div>
                <div className='w-[320px] h-[274px] relative'>
                    <img src={Goal4} className='rounded-xl w-[320px] h-[274px]' alt="" />
                    <div class="absolute inset-0 bg-black/20 rounded-lg"></div>
                    <p className='absolute top-[43%] left-[30%] text-[24px] text-center leading-7 text-white w-[131px]'>Endurance & Recovery</p>
                </div>
            </div>
        </div>
    )
}

export default Goals