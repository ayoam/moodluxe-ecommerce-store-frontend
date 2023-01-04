import React from 'react'

const StatsCountCard = ({icon,color,title,value})=>{
    const colors = {
        yellow:"!shadow-yellow-400/20 bg-yellow-400",
        green:"!shadow-green-400/20 bg-green-400",
        blue:"!shadow-blue-400/20 bg-blue-400",
        red:"!shadow-red-400/20 bg-red-400",
    }
    return(
        <div className={"bg-gradient-to-br from-white to-gray-100  text-black px-6 py-8 flex flex-col sm:flex-row gap-6 items-center rounded-md shadow-[2px_2px_1px_2px_rgba(255,255,255,0.25)]"}>
            <div className={`shadow-[0px_0px_0px_8px_rgba(0,0,0,0)] ${colors[color]} rounded-[100%] w-12 h-12  p-4 flex justify-center items-center text-white`}>
                {icon}
            </div>
            <div className={"text-center sm:text-left"}>
                <p className={"opacity-60 text-sm"}>{title}</p>
                <p className={"font-semibold text-lg"}>{value}</p>
            </div>
        </div>
    )
}

export default StatsCountCard
