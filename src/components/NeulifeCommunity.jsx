import { MdArrowOutward } from "react-icons/md";
import community1 from '../assets/quinn_ud54eudhwl3dl758yq90vdnr.mp4'
import community2 from '../assets/quinn_q452fc8errrsvmdukpb19vrf.mp4'
import community3 from '../assets/quinn_vggpklbwyyvls5134wzpauyx.mp4'
import product from '../assets/mage 10.png'

function NeulifeCommunity() {
    return (
        <div className="p-16 pt-0 pb-15">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-[30px] font-normal">Loved by Neulife Community</h2>
                <button className="text-lg text-gray-500 cursor-pointer flex items-center ">
                    View All <div className="ml-3 border rounded-full w-8 h-8 cursor-pointer flex items-center justify-center font-bold"><MdArrowOutward /></div>
                </button>
            </div>

            <div className="flex justify-around">
                <div className="bg-[#F8F6F5] rounded-xl shadow-md w-[420px] h-[680px] relative">
                    <video src={community1} autoPlay loop muted className="rounded-t-xl w-full h-[88%] object-cover" />
                    <div>
                        <div className='flex items-end gap-4 absolute bottom-1 px-8'>
                            <img src={product} className='w-[100px] h-[125px]' alt="" />
                            <div className='mb-1'>
                                <h1 className='text-[17px] font-semibold leading-5'>Super Isolate WHEY Mango Chunky</h1>
                                <span className='text-[#656565] underline cursor-pointer'>Shop Now</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F8F6F5] rounded-xl shadow-md w-[420px] h-[680px] relative">
                    <video src={community2} autoPlay loop muted className="rounded-t-xl w-full h-[88%] object-cover" />
                    <div>
                        <div className='flex items-end gap-4 absolute bottom-1 px-8'>
                            <img src={product} className='w-[100px] h-[125px]' alt="" />
                            <div className='mb-1'>
                                <h1 className='text-[17px] font-semibold leading-5'>Super Isolate WHEY Mango Chunky</h1>
                                <span className='text-[#656565] underline cursor-pointer'>Shop Now</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F8F6F5] rounded-xl shadow-md w-[420px] h-[680px] relative">
                    <video src={community3} autoPlay loop muted className="rounded-t-xl w-full h-[88%] object-cover" />
                    <div>
                        <div className='flex items-end gap-4 absolute bottom-1 px-8'>
                            <img src={product} className='w-[100px] h-[125px]' alt="" />
                            <div className='mb-1'>
                                <h1 className='text-[17px] font-semibold leading-5'>Super Isolate WHEY Mango Chunky</h1>
                                <span className='text-[#656565] underline cursor-pointer'>Shop Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NeulifeCommunity