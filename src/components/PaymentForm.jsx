import React, { useState } from 'react';

function PaymentForm() {
    const [ cardSelected, setCardSelected ] = useState("Credit Card");
    
    const card = [
        {
            icon: "/icons/Card.svg",
            name: "Credit Card",
        },
        {
            icon: "/icons/Paypal.svg",
            name: "Paypal",
        },
        {
            icon: "/icons/Wallet.svg",
            name: "Cash",
        },
    ];
    
    return (
        <div className=''>
            <form className="mt-6 space-y-4">
                <h1 className="font-bold text-xl">Payment Method</h1>
                <div className="grid grid-cols-3 gap-3">
                    { card.map((data, ind) => (
                        <div className={`${cardSelected === data.name ? "border-white" : "border-gray-600"} relative border rounded-md p-2 flex flex-col items-center justify-center cursor-pointer`}
                            onClick={() => setCardSelected(data.name)}
                        >
                            <img src={ data.icon } alt={ data.name } className={ `${ cardSelected === data.name ? "text-white" : "text-gray-600" }` } />
                            <span className={ `${ cardSelected === data.name ? "text-white" : "text-gray-600" }` }>{ data.name }</span>
                            { cardSelected === data.name && (
                                <div className="absolute top-2 right-2 w-4 h-4 flex items-center justify-center rounded-full bg-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="w-full flex flex-col gap-2">
                    <span className="">Cardholder Name</span>
                    <input type="text" placeholder='Levi Ackerman' className='bg-primary border border-gray-600 p-3 rounded-md focus:ring-secondary focus:outline-none focus-within:border-transparent' />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <span className="">Card Number</span>
                    <input type="text" placeholder='2564 1421 0897 1244' className='bg-primary border border-gray-600 p-3 rounded-md focus:ring-secondary focus:outline-none focus-within:border-transparent' />
                </div>
                <div className="flex items-center justify-between gap-3 pb-2">
                    <div className="w-full flex flex-col gap-2">
                        <span className="">Expiration Date</span>
                        <input type="date" placeholder='02/2022' className='bg-primary border border-gray-600 p-3 rounded-md focus:ring-secondary focus:outline-none focus-within:border-transparent' />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <span className="">CVV</span>
                        <input type="password" placeholder='244' className='bg-primary border border-gray-600 p-3 rounded-md focus:ring-secondary focus:outline-none focus-within:border-transparent' />
                    </div>
                </div>
                <hr className="bg-gray-400" />
                <div className="flex items-center justify-between gap-3">
                    <div className="w-full flex flex-col gap-2">
                        <span className="">Order Type</span>
                        <select name="" id="" className="bg-principal border border-gray-600 p-3 rounded-md focus:ring-secondary focus:outline-none focus-within:border-transparent">
                            <option value="Dine In" className="">Dine In</option>
                            <option value="Dine Out" className="">Dine In</option>
                            <option value="Cash" className="">Cash</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <span className="">Table No</span>
                        <input type="text" placeholder='140' className='bg-primary border border-gray-600 p-3 rounded-md focus:ring-secondary focus:outline-none focus-within:border-transparent' />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PaymentForm;