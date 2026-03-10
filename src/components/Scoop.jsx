import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import scoop from "../assets/Property 1=Frame 69.png"

function Scoop() {
    return (
        <div className='flex justify-between py-10 px-35 bg-[#F8F6F5] items-center my-5 mb-14'>
            <div className='flex flex-col gap-7'>
                <div className='flex items-center'>
                    <BiSolidQuoteSingleLeft className='text-[95px] text-[#D4C0AF96] -mx-5' />
                    <BiSolidQuoteSingleLeft className='text-[95px] text-[#D4C0AF96] -mx-5' />
                </div>
                <h1 className='text-[60px] w-[500px] leading-16 font-bold'>What Goes into Every Scoop <span className='text-[#795646]'>Strength</span></h1>
                <div className='text-[20px] text-white bg-[#000000] w-[160px] h-[45px] rounded-2xl flex items-center justify-center'>
                    <span>Shop Now</span>
                </div>
            </div>
            <div>
                <img src={scoop} className='w-[369px] h-[458px] rounded-3xl' alt="" />
            </div>
        </div>
    )
}

export default Scoop