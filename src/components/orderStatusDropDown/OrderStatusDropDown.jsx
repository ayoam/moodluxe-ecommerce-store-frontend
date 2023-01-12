import React, {useEffect, useState} from 'react'
import {MdKeyboardArrowDown} from "react-icons/md";
import updateOrderStatus from "../../service/adminRequests/updateOrderStatus";

const OrderStatusDropDown = ({order}) => {
    const [active, setActive] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const [responseStatus,setResponseStatus]=useState(null);
    const [options, setOptions] = useState([
        {
            id: 1,
            name: "In Progress",
            selected: false
        },
        {
            id: 2,
            name: "Shipped",
            selected: true
        },
        {
            id: 3,
            name: "Delivered",
            selected: false
        }
    ])

    useEffect(() => {
        setOptions(prev => {
            return prev.map(x => {
                if (x.name.toLowerCase() === order?.status?.status.toLowerCase()) return {...x, selected: true}
                return {...x, selected: false}
            })
        })
    }, [])

    const handleOptionSelect = (item) => {
        setOptions(prev => {
            return prev.map(x => {
                if (x.id === item.id) return {...x, selected: true}
                return {...x, selected: false}
            })
        })
        setActive(false);
        setIsTouched(true);
    }

    const handleSaveBtnClick = () => {
        const data = {
            orderStatusId: options.find(item => item.selected).id
        }
        updateOrderStatus(order?.orderNumber, data)
            .then(response => {
                setIsTouched(false);
                setResponseStatus("SUCCESS");
                setTimeout(()=>setResponseStatus(null),3000);
            })
            .catch(error=>{
                setResponseStatus("FAILED");
            })
    }

    return (
        <>
            <div className={"flex gap-2 text-black"}>
                <div className={"relative transition-colors"}>
                    <div
                        className={"rounded-3xl bg-gray-50 py-2 px-6 w-64 text-black flex justify-between items-center cursor-pointer"}
                        onClick={() => setActive(prev => !prev)}>
                        <p className={""}>{options.find(item => item.selected).name}</p>
                        <MdKeyboardArrowDown className={`text-xl transition-all ${active ? "rotate-180" : ""}`}/>
                    </div>
                    <div>
                        <ul className={`bg-gray-50 w-full absolute top-[115%] left-0 text-black/70 rounded-xl shadow-md overflow-hidden opacity-1 transition-all ${!active ? "opacity-0" : ""}`}>
                            {options.map((item, index) => {
                                return <li
                                    className={`py-3 px-6 hover:bg-blue-100 cursor-pointer ${item.selected ? "bg-blue-100" : ""}`}
                                    key={item.id}
                                    onClick={() => handleOptionSelect(item)}>
                                    {item.name}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <button
                    className={`bg-blue-500 hover:bg-blue-600 transition-colors rounded-lg px-4 text-white text-sm disabled:bg-gray-400/50 disabled:hover:bg-gray-400/50 disabled:text-white/50`}
                    disabled={!isTouched}
                    onClick={handleSaveBtnClick}>
                    Save
                </button>
            </div>
            {responseStatus==="SUCCESS" && <p className={"text-sm mt-3 text-green-400"}>status updated successfully!</p>}
            {responseStatus==="FAILED" && <p className={"text-sm mt-3 text-red-400"}>status update failed!</p>}
        </>
    )
}

export default OrderStatusDropDown
