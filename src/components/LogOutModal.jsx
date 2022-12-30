import React from 'react';

function LogOutModal({ setSelected }) {
    
    return (
        <div className='min-h-screen w-full flex items-center justify-center'>
            <div className="p-6 bg-principal rounded-lg space-y-8 text-white flex flex-col items-center justify-center">
                <div className="p-2 bg-secondary/20 rounded-full -mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                </div>
                <h1 className="font-semibold text-center">Are you sure you want to log out ?</h1>
                <div className="px-7 font-semibold flex items-center gap-4">
                    <button className='px-3 w-28 md:px-8 py-3 border border-secondary rounded-lg flex items-center justify-center hover:bg-secondary' onClick={() => setSelected(0)}>
                        Cancle
                    </button>
                    <button className='px-3 w-28 md:px-8 py-3 border border-green-900 rounded-lg hover:bg-green-900 flex items-center justify-center' onClick={() => setSelected(0)}>
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LogOutModal;