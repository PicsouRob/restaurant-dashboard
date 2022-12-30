import React from 'react';

import { dashData, dashHeaderData,  } from '../helpers/dashData';
import { currentDate } from '../helpers/data';
import { homeData } from '../helpers/homeData';

function Dashboard() {
    return (
        <div className='relative text-white flex flex-col py-4 gap-y-6 pr-4 md:px-3 min-h-screen min-w-screen w-full overflow-hidden'>
            <div className="relative w-full block md:flex gap-6 lg:gap-8 flex-1">
                <div className="flex-1 flex flex-col space-y-6 divide-y-2 divide-gray-600">
                    <div className="">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Settings</h1>
                        <h3 className="">{ currentDate }</h3>
                    </div>
                    <div className="pt-6 space-y-6 flex-1 flex flex-col">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            { dashHeaderData.map((item, ind) => (
                                <div key={ ind } className="p-4 bg-principal text-white space-y-3 rounded-lg">
                                    <div className="flex items-center gap-x-4">
                                        <img src={ item.icon } alt={ item.text } className="p-2 bg-primary rounded-lg" />
                                        <span className={ `${ item.color }` }>{ item.purcent }</span>
                                        <div className={`${ind === 0 || ind === 2 ? "bg-green-500" : "bg-red-400"} p-1 rounded-full`}>
                                            <img src={`/icons/Arrow - ${ind === 0 || ind === 2 ? "Up" : "Down"}.svg`} alt="" className="w-3 h-3" />
                                        </div>
                                    </div>
                                    <h1 className="font-bold text-2xl">{ item.amount }</h1>
                                    <span className="text-gray-400">{ item.text }</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-principal flex flex-col items-start justify-between flex-1 w-full p-6 md:p-8 rounded-lg overflow-y-hidden">
                            <table className="w-full mt-4">
                                <tr className="text-left">
                                    <th className="">Customer</th>
                                    <th className="">Menu</th>
                                    <th className="">Total Payment</th>
                                    <th className="">Status</th>
                                </tr>
                                { dashData.map((data, ind) => (
                                    <tr key={ind} className="">
                                        <td className="space-x-3 py-4 flex items-center">
                                            <img src={data.image} alt={data.name} className={`${data.color} p-2 bg-primary rounded-full`} />
                                            <span className="text-gray-400">{ data.name }</span>
                                        </td>  
                                        <td className="text-gray-400">{ data.text }</td>  
                                        <td className="text-gray-400">{ data.amount }</td>
                                        <div className="">
                                            <td className={`${data.status.includes("Completed") ? "text-green-800" : data.status.includes("Preparing") ? "text-orange-600" : "text-violet-700"} ${data.status.includes("Completed") ? "bg-green-300" : data.status.includes("Preparing") ? "bg-orange-200" : "bg-violet-300"} rounded-full px-2`}>{ data.status }</td>  
                                        </div>  
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 flex flex-col justify-between">
                    <div className="rounded-lg bg-principal flex flex-col items-start justify-between p-6 md:p-8 relative gap-y-6 flex-1 divide-y-2 divide-primary">
                        <div className="w-full">
                            <Header title="Most Ordered" />
                        </div>
                        <div className="flex-1 flex items-start flex-col justify-between pt-6 w-full">
                            <div className="space-y-4 w-full">
                                { homeData.slice(0, 4).map((item, index) => (
                                    <div key={ index } className="flex items-center gap-x-4">
                                        <img src={item.image} alt={item.text} className="rounded-full w-16 h-16" />
                                        <div className="">
                                            <h1 className="">{ item.text }</h1>
                                            <span className="text-gray-400">{ item.available } dishes ordered</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full py-3 mt-4 border border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white hover:border-white">
                                View All
                            </button>
                        </div>
                    </div>
                    <div className="rounded-lg bg-principal flex flex-col items-center justify-center p-6 md:p-8 relative gap-y-4 divide-y-2 divide-primary">
                        <div className="w-full">
                            <Header title="Most Type of Ordered" />
                        </div>
                        <img src="/icons/Chart.svg" alt="chart" className="pt-4 px-6" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const Header = ({ title }) => {
    return (
        <div className="flex items-center justify-between gapx-x-4 w-full gap-x-5">
            <h1 className="">{ title }</h1>
            <div className="rounded-lg flex items-center gap-2 md:gap-3 p-1 px-3 border border-gray-400">
                <span className="text-sm md:text-lg">Today</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>  
    );
}

export default Dashboard;