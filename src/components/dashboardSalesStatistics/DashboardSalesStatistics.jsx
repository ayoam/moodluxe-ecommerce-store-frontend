import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
            text: 'Sales statistics 2022',
        },
    },
    maintainAspectRatio: false,
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

const DashboardSalesStatistics = ({statsData})=>{

    const data = {
        labels,
        datasets: [
            {
                // data: [2500, 4900, 2600, 5900, 1400, 3870,2500, 4900, 2600, 2900, 0, 1400],
                data:statsData,
                borderColor: 'rgb(15, 10, 222)',
                backgroundColor: 'rgba(15, 10, 222, 0.2)',
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 10,
                pointBackgroundColor:'rgb(255, 255, 255)',
                fill: true,
                cubicInterpolationMode: 'monotone',
                tension: 0.4
            }
        ],
    };

    return(
        <div className={"lg:col-span-2 bg-gradient-to-br from-white to-gray-100 rounded-md shadow-[2px_2px_1px_2px_rgba(255,255,255,0.25)] h-[400px] p-4"}>
            <h1 className={"font-semibold text-base text-black/80"}>Sales statistics</h1>
            <div className={"h-[320px] mt-4"}>
                {statsData && <Line options={options} data={data}/>}
            </div>
        </div>
    )
}

export default DashboardSalesStatistics
