import React from 'react'
import Navbar from './Navbar'
import hero from '../assets/hero.png'
import { VscStarEmpty } from "react-icons/vsc";

function Hero() {
    return (
        <div className='bg-[#BCA894] w-full h-[820px] flex flex-col'>
            <Navbar />
            <div className='relative h-fit'>
                <div className='flex items-center justify-center'>
                    <div>
                        <img src={hero} className='w-[1050px] h-[735px]' alt="" />
                    </div>
                    <div className='w-[549px] flex flex-col items-center gap-10'>
                        <div>
                            <p className='text-[65px] font-bold text-white text-center leading-18'>Where Science Meets Everyday Strength.</p>
                        </div>
                        <div className='w-[140px] h-[45px] cursor-pointer rounded-2xl text-[20px] text-[#000000] font-semibold bg-[#FFFFFF] flex items-center justify-center'>
                            <span>Shop Now</span>
                        </div>
                    </div>
                </div>
                <div className='absolute w-full bottom-0 text-[18px] text-white flex items-center gap-10 p-2 bg-[#795646]'>
                    <p>Community First</p>
                    <VscStarEmpty className='text-[25px]' />
                    <p>Science Backed</p>
                    <VscStarEmpty className='text-[25px]' />
                    <p>Clean Ingredients</p>
                    <VscStarEmpty className='text-[25px]' />
                    <p>Quality Tested</p>
                    <VscStarEmpty className='text-[25px]' />
                    <p>Performance Focused</p>
                    <VscStarEmpty className='text-[25px]' />
                    <p>Rooted in Wellness</p>
                    <VscStarEmpty className='text-[25px]' />
                    <p>Results Oriented</p>
                    <VscStarEmpty className='text-[25px]' />
                </div>
            </div>
        </div>
    )
}

export default Hero