import React from 'react';
import { currentDate } from '../helpers/data';

function Loading({ title }) {
    return (
        <div className='relative text-white flex flex-col py-4 gap-y-6 pr-4 md:px-3 md:pr-6 min-h-screen w-full overflow-hidden'>
            <div className="relative w-full block md:flex gap-6 lg:gap-8 flex-1 ">
                <div className="flex-1 flex flex-col space-y-6 divide-y-2 divide-gray-600 w-full">
                    <div className="">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{ title }</h1>
                        <h3 className="">{ currentDate }</h3>
                    </div>
                    <div className="h-full flex items-center justify-center">
                        <button type="button" class="bg-principal flex space-x-4 items-center font-semibold rounded-lg py-2 px-4" disabled>
                            <img src="/icons/ring.svg" alt="ring" className="" />
                            <span className="">Processing...</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;