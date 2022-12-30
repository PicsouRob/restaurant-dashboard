import React, { useState } from 'react';

import { currentDate } from '../helpers/data';
import { homeData } from '../helpers/homeData';

function Home({ setIsModal }) {
    const [ selectedProduct, setSelectedProduct ] = useState(0);
    const [ orderType, setOrderType ] = useState("Dine In");
    
    const productSelected = [ "Hot Dishes", "Cold Dishes", "Soup", "Grill", "Appetizer", "Dessert" ];
    
    return (
        <div className="relative text-white flex flex-col gap-y-6 min-h-screen min-w-screen w-full overflow-hidden">
            <div className="relative w-full block md:flex gap-6 lg:gap-8 flex-1 p-4">
                <div className="flex-1 flex flex-col space-y-6 divide-y-2 divide-gray-600">
                    <div className="">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Picsou Resto</h1>
                        <h3 className="">{ currentDate }</h3>
                    </div>
                    <div className="space-y-7">
                        <div className="flex items-center flex-wrap gap-6 pt-7 py-4">
                            { productSelected.map((data, index) => (
                                <div key={ index } className="cursor-pointer relative"
                                    onClick={() => setSelectedProduct(index)}
                                >
                                    <span className={`${selectedProduct === index && "text-secondary border-b-2 border-b-secondary transition-all duration-300"} py-4 font-semibold`}>{ data }</span>
                                </div>
                            ))}
                        </div>
                        <div className=" flex items-center justify-between">
                            <h1 className="text-2xl font-semibold">Picsou Resto</h1>
                            <div className="rounded-lg flex items-center gap-2 md:gap-3 p-1 px-3 border border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                <span className="text-sm md:text-lg">Dine In</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-4 gap-6 mb-6 overflow-auto">
                            { homeData.map((item, index) => (
                                <div className="rounded-lg border border-primary flex flex-col items-center justify-center py-6 relative gap-y-2 bg-principal">
                                    <img src={ item.image } alt={ item.text } className="rounded-full transform -mt-10 mb-3" />
                                    <h1 className="text-center font-medium px-12">{ item.text }</h1>
                                    <span className="text-gray-400">{ item.price }</span>
                                    <span className="text-gray-400">{ item.available } Bolws available</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative w-full md:w-[400px] lg:w-[450px] min-h-screen">
                    <div className="relative md:fixed top-0 bottom-0 right-0 rounded-md bg-principal">
                        <div className="p-4 md:p-6 divide-y divide-gray-600 h-full relative">
                            <div className="space-y-6">
                                <h2 className="font-bold text-2xl">Orders #34562</h2>
                                <div className="flex flex-wrap items-center gap-3">
                                    {
                                        [ "Dine In", "To Go", "Delivery" ].map((item, ind) => (
                                            <div className={`${orderType === item ? "bg-secondary" : "border border-gray-600"} py-1.5 px-3 rounded-lg cursor-pointer`}
                                                onClick={() => setOrderType(item)}
                                            >
                                                <span className="">{ item }</span>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="flex items-center justify-between pb-6">
                                    <span className="">Item</span>
                                    <div className="flex items-center space-x-6 text-white">
                                        <span className="">Qty</span>
                                        <span className="">Price</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-between space-y-3 divide-y divide-gray-600 overflow-scrol">
                                <div className="pt-6 flex-1 space-y-7 w-full">
                                    { homeData.map((item, ind) => (
                                        <div key={ind} className="flex flex-col items-start justify-between gap-5 w-full">
                                            <div className="flex flex-wrap items-center justify-between gap-8 w-full">
                                                <div className="flex items-center gap-3 w-full">
                                                    <div className="flex items-center w-full gap-x-3">
                                                        <img src={ item.image } alt={ item.bowl } className="h-12 w-12 rounded-full" />
                                                        <div className="">
                                                            <h3 className="text-[16px] text-ellipsis">{ item.text.substring(0, 20) } ...</h3>
                                                            <span className="">{ item.price }</span>
                                                        </div>
                                                    </div>
                                                    <div className="border bg-primary border-gray-700 rounded-md py-3 px-5">2</div>
                                                </div>
                                                <span className="font-semibold hidden md:flex">{ item.price.slice(1, 4) * 2 }</span>
                                            </div>
                                            <div className="flex items-center justify-between gap-6 w-full">
                                                <div className="bg-primary rounded-lg p-3 border border-gray-700 w-full">Order Note.</div>
                                                <div className="flex items-center justify-center border p-3 border-[#FF7CA3] rounded-md">
                                                    <img src="/icons/Trash.svg" alt="trash" className="h-6 w-6" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 space-y-6 bg-principal p-6 w-full">
                            <div className="flex items-start justify-between">
                                <span className="text-gray-400">Discount</span>
                                <span className="font-semibold">$ 0</span>
                            </div>
                            <div className="flex items-start justify-between">
                                <span className="text-gray-400">Sub Total</span>
                                <span className="font-semibold">$ 21,03</span>
                            </div>
                            <button className='rounded-lg bg-secondary text-center w-full py-2 text-white font-semibold hover:bg-secondary/80 transition-all duration-300'
                                onClick={() => setIsModal(true)}
                            >
                                Continue to Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;