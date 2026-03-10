import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";

import logo from "../assets/logo.png"

function Navbar() {
    return (
        <div className='text-white flex items-center justify-between pt-[19px] pb-[19px] px-[60px] py-[60px]'>
            <div>
                <img src={logo} className='w-[133px] h-[68px]' alt="" />
            </div>
            <div className=''>
                <ul className='flex items-center justify-between text-[24px] font-semibold gap-[60px]'>
                    <li className="flex items-center justify-center">Shop <FaAngleDown className="mt-2" /></li>
                    <li>Science</li>
                    <li>Quality</li>
                    <li>Rewards</li>
                </ul>
            </div>
            <div className='flex items-center justify-between gap-[24px] '>
                <div><IoSearch className='text-[26px]' /></div>
                <div><FaRegUser className='text-[26px]' /></div>
                <div><BsHandbag className='text-[26px]' /></div>
            </div>
        </div>
    )
}

export default Navbar