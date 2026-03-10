import Protein from '../assets/Gemini_Generated_Image_sv8afqsv8afqsv8a 1.png'
import Vitamin from '../assets/Gemini_Generated_Image_sv8afqsv8afqsv8a 2.png'
import SmartBeverages from '../assets/Component 4.png'

function Mission() {
    return (
        <div className='my-[50px]'>
            <div className='flex flex-col items-center text-center mb-[30px]'>
                <h1 className='text-[46px] font-semibold'>Our Mission</h1>
                <p className='text-[28px] w-[1035px]'>A thoughtful blend of science, care, and consistency created to support real progress.</p>
            </div>
            <div className='flex gap-15 items-center justify-center'>
                <div className='flex flex-col'>
                    <img src={Protein} className='w-[430px] h-[580px] rounded-2xl' alt="" />
                    <p className='text-[21px] font-medium py-3'>Proteins</p>
                </div>
                <div className='flex flex-col'>
                    <img src={Vitamin} className='w-[430px] h-[580px] rounded-2xl' alt="" />
                    <p className='text-[21px] font-medium py-3'>Vitamin & Supplements</p>
                </div>
                <div className='flex flex-col'>
                    <img src={SmartBeverages} className='w-[430px] h-[580px] rounded-2xl' alt="" />
                    <p className='text-[21px] font-medium py-3'>Smart Beverages</p>
                </div>
            </div>
        </div>
    )
}

export default Mission