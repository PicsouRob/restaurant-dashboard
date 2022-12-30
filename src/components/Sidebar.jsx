import React from 'react';

import { sidebarData } from '../helpers/sidebarData';

function Sidebar({ selected, setSelected }) {
    const onSelected = (ind) => {
        setSelected(ind);
    }
    
    return (
        <div className='sticky min-h-screen bg-principal flex flex-col items-center justify-between'>
            <div className="flex-1 flex items-center justify-center p-5 cursor-pointer ">
                <img src="/icons/Restaurant.svg" alt="logo" className="text-white w-24 md:h-[56px] md:w-[56px] p-2 bg-[#EB966A] rounded-lg" />
            </div>
            { sidebarData.map((data, ind) => (
                <div key={ ind } className={`${selected === ind && "bg-primary rounded-l-xl"} p-8 flex-1 flex items-center justify-center w-full cursor-pointer`}
                    onClick={() => onSelected(ind)}
                >
                    <img src={data} alt={data} className="text-white" />
                </div>
            ))}
        </div>
    );
}

export default Sidebar;