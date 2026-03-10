import React from "react";
import product1 from '../assets/image 4.png';
import product2 from '../assets/image 10.png';
import product3 from '../assets/image 1.png';
import { MdArrowOutward } from "react-icons/md";

const ProductCards = () => {
    return (
        <div className="p-16 py-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-[30px] font-normal">Backed by Science Formulation</h2>
                <button className="text-lg text-gray-500 cursor-pointer flex items-center ">
                    View All <div className="ml-3 border rounded-full w-8 h-8 cursor-pointer flex items-center justify-center font-bold"><MdArrowOutward /></div>
                </button>
            </div>

            <div className="flex justify-around">
                <div className="bg-[#F8F6F5] rounded-xl shadow-md p-4 w-[420px] h-[680px] relative">
                    <span className="bg-green-100 text-green-700 w-23 text-center text-xs px-2 py-1 rounded-r-full absolute top-3 left-0">
                        Best Seller
                    </span>
                    <div className="flex items-center justify-center my-5">
                        <img
                            src={product1}
                            alt="Super Isolate Whey Strawberry Chunky"
                            className="w-[198px] h-[274px] object-contain mb-4"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <svg
                                    key={i}
                                    className={`w-7 h-7 ${i <= 4 ? "text-black" : "text-gray-300"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-md ml-2">256 Reviews</span>
                    </div>
                    <h3 className="font-semibold text-[22px] leading-6 mb-2 h-13 flex items-center">Super Isolate Whey Strawberry Chunky</h3>
                    <hr className="border-1 text-[#0000004F] my-4" />
                    <div className="mb-2 text-sm">
                        <div className="flex gap-12">
                            <span className="font-semibold text-[20px]">22 g</span>
                            <span className="text-[16px]">Whey Isolate Protein</span>
                        </div>
                        <div className="flex gap-10">
                            <span className="font-semibold text-[20px]">100%</span>
                            <span className="text-[16px]">Gut Optimized</span>
                        </div>
                    </div>
                    <hr className="border-1 text-[#0000004F] my-4" />
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <span className="font-bold text-[30px]">₹ 1899 /-</span>{" "}
                            <span className="line-through text-gray-400 text-[19px] ml-1">₹ 2491</span>
                        </div>
                        <span className="text-green-500 font-semibold text-[18px]">24% Off</span>
                    </div>
                    <button className="bg-black text-white text-[20px] py-2 rounded-full w-full hover:bg-gray-800 transition">
                        Shop Now
                    </button>
                </div>

                <div className="bg-[#F8F6F5] rounded-xl shadow-md p-4 w-[420px] h-[680px] relative">

                    <div className="flex items-center justify-center my-5">
                        <img
                            src={product2}
                            alt="Super Isolate WHEY Mango Chunky"
                            className="w-[198px] h-[274px] object-contain mb-4"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <svg
                                    key={i}
                                    className={`w-7 h-7 ${i <= 4 ? "text-black" : "text-gray-300"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-md ml-2">256 Reviews</span>
                    </div>
                    <h3 className="font-semibold text-[22px] leading-6 mb-2 h-13 flex items-center">Super Isolate WHEY Mango Chunky</h3>
                    <hr className="border-1 text-[#0000004F] my-4" />
                    <div className="mb-2 text-sm">
                        <div className="flex gap-12">
                            <span className="font-semibold text-[20px]">22 g</span>
                            <span className="text-[16px]">Whey Isolate Protein</span>
                        </div>
                        <div className="flex gap-10">
                            <span className="font-semibold text-[20px]">100%</span>
                            <span className="text-[16px]">Gut Optimized</span>
                        </div>
                    </div>
                    <hr className="border-1 text-[#0000004F] my-4" />
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <span className="font-bold text-[30px]">₹ 1899 /-</span>{" "}
                            <span className="line-through text-gray-400 text-[19px] ml-1">₹ 2491</span>
                        </div>
                        <span className="text-green-500 font-semibold text-[18px]">24% Off</span>
                    </div>
                    <button className="bg-black text-white text-[20px] py-2 rounded-full w-full hover:bg-gray-800 transition">
                        Shop Now
                    </button>
                </div>

                <div className="bg-[#F8F6F5] rounded-xl shadow-md p-4 w-[420px] h-[680px] relative">
                    <span className="bg-green-100 w-23 text-center text-green-700 text-xs px-2 py-1 rounded-r-full absolute top-3 left-0">
                        Best Seller
                    </span>
                    <div className="flex items-center justify-center my-5">
                        <img
                            src={product3}
                            alt="PRO STANDARD WHEY Coffee"
                            className="w-[198px] h-[274px] object-contain mb-4"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <svg
                                    key={i}
                                    className={`w-7 h-7 ${i <= 4 ? "text-black" : "text-gray-300"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-md ml-2">256 Reviews</span>
                    </div>
                    <h3 className="font-semibold text-[22px] leading-6 mb-2 h-13 flex items-center">PRO STANDARD WHEY Coffee</h3>
                    <hr className="border-1 text-[#0000004F] my-4" />
                    <div className="mb-2 text-sm">
                        <div className="flex gap-12">
                            <span className="font-semibold text-[20px]">25 g</span>
                            <span className="text-[16px]">Isolate + Hydrolysates</span>
                        </div>
                        <div className="flex gap-10">
                            <span className="font-semibold text-[20px]">30%</span>
                            <span className="text-[16px]">Extra Leucine for Elite Athletes</span>
                        </div>
                    </div>
                    <hr className="border-1 text-[#0000004F] my-4" />
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <span className="font-bold text-[30px]">₹ 1899 /-</span>{" "}
                            <span className="line-through text-gray-400 text-[19px] ml-1">₹ 2491</span>
                        </div>
                        <span className="text-green-500 font-semibold text-[18px]">24% Off</span>
                    </div>
                    <button className="bg-black text-white text-[20px] py-2 rounded-full w-full hover:bg-gray-800 transition">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCards;