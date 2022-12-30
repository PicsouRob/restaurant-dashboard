import React from 'react';
import { homeData } from '../helpers/homeData';
import PaymentForm from './PaymentForm';

function ModalPaymentConfirm({ setIsModal }) {
    const cancleModal = () => {
        setIsModal(false);
    }
    
    return (
        <div className='fixed inset-0 bg-black/70 text-white overflow-auto'>
            <div className="w-full md:w-[95%] lg:w-[80%] xl:w-[60%] bg-principal absolute right-0 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-x-2 divide-gray-600 h-full">
                    <div className="h-full p-6 text-white space-y-5 flex flex-col justify-between divide-y divide-gray-600 bg-principal">
                        <div className="space-y-5">
                            <div className="" onClick={() => cancleModal()}>
                                <img src="/icons/Back.svg" alt="back" className="cursor-pointer" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <h1 className="font-bold text-2xl lg:text-3xl">Confirmattion</h1>
                                    <span className="font-semibold">Orders #34562</span>
                                </div>
                                <div className="p-3 rounded-lg bg-secondary/50 cursor-pointer">
                                    <img src="/icons/Add.svg" alt="add" className="cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-between space-y-3 divide-y divide-gray-600">
                            <div className="pt-6 flex-1 space-y-7 w-full">
                                { homeData.slice(0, 4).map((item, ind) => (
                                    <div key={ind} className="flex flex-col items-start justify-between gap-5 w-full">
                                        <div className="flex items-center justify-between gap-8 w-full">
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
                                            <span className="font-semibold">{ item.price.slice(1, 4) * 2 }</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-6 w-full">
                                            <div className="bg-primary rounded-lg p-3 border border-gray-700 w-full">Please, justt a little bit spicy only.</div>
                                            <div className="flex items-center justify-center border p-3 border-[#FF7CA3] rounded-md">
                                                <img src="/icons/Trash.svg" alt="trash" className="h-6 w-6" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-start justify-between">
                                <span className="text-gray-400">Discount</span>
                                <span className="font-semibold">$ 0</span>
                            </div>
                            <div className="flex items-start justify-between">
                                <span className="text-gray-400">Sub Total</span>
                                <span className="font-semibold">$ 21,03</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-full p-6 divide-y divide-gray-600 flex flex-col justify-between bg-principal">
                        <div className="mb-6">
                            <div className="mt-4" />
                            <h1 className="font-bold text-2xl lg:text-3xl">Payment</h1>
                            <span className="font-semibold">3 payment method available</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-between space-y-4">
                            <PaymentForm />
                            <div className="pt-6">
                                <div className="w-full grid grid-cols-2 gap-4">
                                    <button className='py-3 border border-secondary rounded-lg' 
                                        onClick={() => cancleModal()}
                                    >
                                        Cancle
                                    </button>
                                    <button className='py-3 border border-secondary rounded-lg bg-secondary' 
                                        onClick={() => cancleModal()}
                                    >
                                        Confirm Payment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPaymentConfirm;