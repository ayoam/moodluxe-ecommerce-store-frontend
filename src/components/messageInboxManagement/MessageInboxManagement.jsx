import React, {useState} from 'react';
import {BsSearch, BsThreeDotsVertical} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";
import {HiReply} from "react-icons/hi";
import {useNavigate} from "react-router-dom";
import {IoClose} from "react-icons/io5";


const MessageInboxManagement = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            name: 'Maverick Grizemann',
            email: 'maverickgrizemann@gmail.com',
            text: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit. Debitis, doloribus?'
        },
        {
            id: 2,
            name: 'john D',
            email: 'johnd@gmail.com',
            text: 'How are you?'
        },
        {
            id: 3,
            name: 'Sara l',
            email: 'Saral@gmail.com',
            text: 'Nice to meet you.'
        }
    ]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [activeItem, setActiveItem] = useState(-1);
    const navigate = useNavigate();
    const handleSelect = (message, itemIndex) => {
        setSelectedMessage(message)
        setActiveItem(itemIndex)
    }


    return (
        <div>
            <h1 className={"text-2xl sm:text-3xl font-semibold text-white mb-8"}>Message Management</h1>
            <div
                className={"bg-gradient-to-br from-white to-gray-100 rounded-md shadow-[2px_2px_1px_2px_rgba(255,255,255,0.25)] overflow-hidden"}>
                <div className="flex flex-row h-screen  antialiased text-gray-800 ">
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

                                    {messages.map((message, index) =>
                                        (<div
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

                            <div className="h-full overflow-hidden relative pt-2">

                                <div className="absolute bottom-0 right-0 mr-2">
                                    <button
                                        className="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
                                        <AiOutlinePlus/>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>


                    {selectedMessage && <div
                        className="flex flex-col absolute sm:relative h-[830px] sm:h-full sm:w-full w-96 mt-16 sm:mt-0  bg-white px-4 py-6">
                        <button className={"absolute top-1 right-1 border-none"} onClick={() => navigate(0)}><IoClose
                            className={"text-2xl"}/></button>
                        <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
                            <div
                                className="flex items-center justify-center h-6 sm:h-10 w-6 sm:w-10 rounded-full bg-pink-500 text-pink-100">
                                {selectedMessage.name.slice(0, 1).toUpperCase()}
                            </div>
                            <div className="flex flex-col ml-3">
                                <div className="font-semibold text-sm">
                                    {selectedMessage.email}</div>
                                <div className="text-xs text-gray-500">To me</div>
                            </div>
                            <div
                                className="ml-auto flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-6 sm:h-10 w-6 sm:w-10 rounded-full">

                                <BsThreeDotsVertical/>
                            </div>
                        </div>

                        <div className="h-full overflow-hidden py-12">
                            {/*<div className="h-full overflow-y-auto">*/}

                                {/*<div className="col-auto p-36 mx-auto rounded-lg">*/}
                                {/*    <div className="flex flex-row items-center">*/}

                                        <div className="relative ml-3 text-sm text-center bg-white py-20 px-36 shadow rounded-xl">


                                            {selectedMessage.text}
                                        </div>
                                {/*    </div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="flex flex-row items-center ml-14">
                            <div className="flex flex-row items-center  border rounded-3xl border-gray-600 h-12 px-2">

                                <div>

                                    <button type="submit"
                                            className="border border-transparent focus:outline-none text-sm text-gray-600 h-10 flex items-center mr-3"
                                    ><HiReply className={"mx-2"}/>reply
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>}


                </div>


            </div>

        </div>
    );

}

export default MessageInboxManagement;