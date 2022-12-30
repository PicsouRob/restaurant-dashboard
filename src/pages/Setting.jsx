import React, { useState } from 'react';
import { homeData } from '../helpers/homeData';

import { settingData } from '../helpers/settingData';

function Setting() {
    const [ selected, setSelected ] = useState(2);
    const [ selectedProduct, setSelectedProduct ] = useState(0);
    
    const productSelected = [ "Hot Dishes", "Cold Dishes", "Soup", "Grill", "Appetizer", "Dessert" ];
    
    const onSelected = (ind) => {
        setSelected(ind);
    }
    
    return (
        <div className='relative text-white flex flex-col py-4 gap-y-6 pr-4 md:px-3 min-h-screen w-full overflow-hidden'>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Settings</h1>
            <div className="relative flex-1 h-full w-full block md:flex gap-6 lg:gap-8 overflow-y-hidden">
                <div className="bg-principal rounded-lg py-4 overflow-hidden">
                    { settingData.map((item, ind) => (
                        <div className={`${selected === ind && "bg-secondary/40 "} px-6 cursor-pointer hover:bg-secondary/40 py-7 flex items-start gap-2 relative`}
                            onClick={() => onSelected(ind)}
                        >
                            <img src={item.icon} alt={item.text} className="h-5 w-5" />
                            <div className="items-start p-0">
                                <h3 className="font-medium leading-0 -mt-1.5">{ item.title }</h3>
                                <span className="text-gray-400">{ item.text }</span>
                            </div>
                            <div className={`${selected === ind && "bg-secondary"} absolute right-0 h-1/2 w-1 rounded-md`}></div>
                        </div>
                    ))}
                </div>
                <div className="relative flex-1 space-y-6 bg-principal rounded-lg py-7 flex flex-col justify-between">
                    <div className="flex items-center gap-x-3 px-7 justify-between">
                        <h1 className="font-bold text-md md:text-2xl break-all">Products Management</h1>
                        <div className="rounded-lg flex items-center gap-1 md:gap-3 p-1 md:p-3 border border-gray-400">
                            <img src="/icons/Option.svg" alt="opttion" className="" />
                            <span className="text-sm md:text-lg">Manage Categories</span>
                        </div>
                    </div>
                    <div className="relative flex-1 overflow-y-scroll divide-y-2 divide-primary max-h-[550px]">
                        <div className="flex items-center flex-wrap gap-6 px-7 py-4">
                            { productSelected.map((data, index) => (
                                <div key={ index } className="cursor-pointer relative"
                                    onClick={() => setSelectedProduct(index)}
                                >
                                    <span className={`${selectedProduct === index && "text-secondary border-b-2 border-b-secondary transition-all duration-300"} py-4 font-semibold`}>{ data }</span>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-4 px-7 gap-6 mb-6 overflow-auto">
                            <div className="space-y-5 flex flex-col items-center justify-center border border-secondary border-dashed p-6 rounded-lg hover:bg-primary hover:text-white cursor-pointer text-secondary">
                                <img src="/icons/Add.svg" alt="add" className="" />
                                <span className="font-bold text-center">Add new dish</span>
                            </div>
                            { homeData.map((item, index) => (
                                <div className="rounded-lg border border-primary flex flex-col items-center justify-center pt-6 relative gap-y-4">
                                    <img src={ item.image } alt={ item.text } className="rounded-full" />
                                    <h1 className="text-center font-medium">{ item.text }</h1>
                                    <div className="flex items-center justify-center gap-x-3 text-gray-400">
                                        <span className="">{ item.price }</span>
                                        <span className='rounded-full border-2 mt-1' />
                                        <span className="">{ item.bowl }</span>
                                    </div>
                                    <div className="bg-secondary/40 flex items-center w-full justify-center py-2.5 cursor-pointer gap-x-3 rounded-b-lg">
                                        <img src="/icons/Edit.svg" alt="edit" className="" />
                                        <span className="">Edit dish</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <div className="px-7 flex items-center gap-4">
                            <button className='px-3 md:px-8 py-3 border border-secondary rounded-lg'>
                                Discard Changes
                            </button>
                            <button className='px-3 md:px-8 py-3 border border-secondary rounded-lg bg-secondary'>
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;