import {BsSearch} from "react-icons/bs";
import React from "react";

<div className="flex flex-row  w-96 flex-shrink-0  bg-gray-100 p-4">
    <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
        <div className="flex flex-col">
            <div className="flex flex-row items-center">
                <div className="text-xl font-semibold">Messages</div>
                <div
                    className="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">5
                </div>
            </div>

            <div className={"flex rounded-lg overflow-hidden mt-5"}>
                <input type={"text"}
                       className={"border-[1px] py-1 px-2 sm:p-2 w-full rounded-bl-md rounded-tl-md placeholder:font-light placeholder:text-sm outline-0 shadow-inner shadow-lg"}
                       placeholder={"Search Messages"}/>
                <button
                    className={"hover:bg-gray-100 transition-colors flex items-center justify-center py-2 px-4 rounded-br-md rounded-tr-md border-[1px] border-l-0"}>
                    <BsSearch/>
                </button>
            </div>
        </div>

        <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4">
            <div className="mt-2 ">

                {messages.map((message, index) => (<div
                    className={`${activeItem === index ? "flex flex-row items-center p-4 relative bg-gradient-to-r from-red-100 to-transparent border-l-2 border-l-red-500" : "flex flex-row items-center p-4 relative hover:bg-gradient-to-r from-red-100 to-transparent hover:border-l-2 hover:border-l-red-500"}`}
                    key={message.id} onClick={() => handleSelect(message, index)}>
                    <div
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                        {message.name.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="flex flex-col flex-grow ml-3">
                        <div className="flex items-center">
                            <div className="text-sm font-medium">{message.name}</div>
                        </div>
                        <div className="text-xs truncate w-40">{message.text}
                        </div>
                    </div>
                </div>))}

            </div>


        </div>
    </div>
</div>