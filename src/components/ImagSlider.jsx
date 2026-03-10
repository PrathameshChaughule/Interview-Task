import React from 'react'
import Product1 from '../assets/Frame 23.png'
import Product2 from '../assets/Frame 24.png'
import Product3 from '../assets/Frame 25.png'
import Product4 from '../assets/Frame 26.png'

function ImagSlider() {
    return (
        <div className='h-[450px] w-full flex items-center my-20'>
            <img src={Product1} className='h-130 w-140' alt="" />
            <img src={Product2} className='h-130 w-140'  alt="" />
            <img src={Product3} className='h-130 w-140'  alt="" />
            <img src={Product4} className='h-130 w-55'  alt="" />
        </div>
    )
}

export default ImagSlider