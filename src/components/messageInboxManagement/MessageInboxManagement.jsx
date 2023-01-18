import React, {useEffect, useState} from 'react';
import {BsSearch} from "react-icons/bs";
import {HiReply} from "react-icons/hi";
import {MdOutlineArrowBackIos} from "react-icons/md";
import GetUnreadMessagesCount from "../../service/contactRequests/GetUnreadMessagesCount";
import GetAllContacts from "../../service/contactRequests/GetAllContacts";
import UpdateUnreadMessages from "../../service/contactRequests/UpdateUnreadMessages";



const MessageInboxManagement = () => {
    // const [messages, setMessages] = useState([{
    //     id: 1,
    //     name: 'Maverick Grizemann',
    //     email: 'maverickgrizemann@gmail.com',
    //     text: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit. Debitis, doloribus?'
    // }, {
    //     id: 2, name: 'john D', email: 'johnd@gmail.com', text: 'How are you?'
    // }, {
    //     id: 3, name: 'Sara l', email: 'Saral@gmail.com', text: 'Nice to meet you.'
    // }]);
    const [messages, setMessages] = useState([{}])
    const [unreadCount, setUnreadCount] = useState(0);
    const [messageId, setMessageId] = useState(null);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [activeItem, setActiveItem] = useState(-1);
    const handleSelect = (id,message, itemIndex) => {
        setSelectedMessage(message)
        setActiveItem(itemIndex)
        setMessageId(id);
    }

    const handleReturnbackBtn = ()=>{
        setSelectedMessage(null)
        setActiveItem(-1)
    }
    useEffect(() => {
         GetAllContacts().then(
            (response ) => {
                setMessages(response.data.data);
            }
            )

         GetUnreadMessagesCount().then (
               (res ) => {
                   setUnreadCount(res.data);
               }
        ).catch((error) => console.log(error));


    }, [selectedMessage]);


    const markAsRead = (id) => {
        UpdateUnreadMessages(id)
           .then(res => {
               setUnreadCount(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        console.log(messageId)
        if (messageId) {
            markAsRead(messageId);
        }
    }, [messageId]);
    return (<div>
        <div
            className={"bg-gradient-to-br from-white to-gray-100 rounded-md shadow-[2px_2px_1px_2px_rgba(255,255,255,0.25)] overflow-hidden"}>
            <div className="flex flex-row h-[700px] text-gray-800 relative">

                <div className="w-full lg:w-96 bg-gray-100 py-6 px-4 sm:p-6">
                    <div className="flex flex-row items-center">
                        <div className="text-xl font-semibold">Messages</div>
                        <div
                            className={unreadCount > 0 ?"flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium":"hidden"}>{unreadCount}
                        </div>
                    </div>

                    <MessageSearchInput/>

                    <div className="flex flex-col mt-4 overflow-y-auto">
                        {messages.map((message, index) => {
                                return <MessageSideBarItem
                                    key={index}
                                    id={message.idc}
                                    message={message}
                                    index={index}
                                    activeItem={activeItem}
                                    handleSelect={handleSelect}/>
                            }
                        )}
                    </div>
                </div>

                {selectedMessage && <FullMessage message={selectedMessage} handleReturnbackBtn={handleReturnbackBtn}/>}

            </div>
        </div>
    </div>);

}

export const FullMessage = ({message,handleReturnbackBtn}) => {
    return (
        <>
            <div
                className="w-full h-full lg:h-auto lg:flex-1 bg-white p-5 lg:p-8 absolute lg:relative flex flex-col justify-between gap-6">
                <div className={"block lg:hidden"}>
                    <button className={"bg-gray-200 p-4 rounded-xl shadow-inner hover:bg-gray-300 transition-colors"} onClick={handleReturnbackBtn}><MdOutlineArrowBackIos/></button>
                </div>
                <div className="flex flex-row items-center px-6 py-5 rounded-2xl shadow-lg border-[1px] border-black/5">
                    <div
                        className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-pink-500 text-pink-100">
                        {message?.username?.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="flex flex-col ml-3 gap-1">
                        <div className="font-semibold text-xs sm:text-sm">
                            {message.email}
                        </div>
                        <div className="text-xs text-gray-500">To me</div>
                    </div>
                </div>

                <div className="relative text-xs sm:text-sm bg-white flex-1 p-6 lg:p-10 shadow-lg rounded-xl border-[1px] border-black/5">
                    {message.message}
                </div>

                <div className="flex flex-row items-center mx-3 lg:mx-5">
                    <div
                        className="flex flex-row items-center border rounded-3xl border-gray-600 text-gray-600  h-12 px-2 hover:bg-gray-500 hover:text-white hover:border-transparent transition-colors cursor-pointer">
                        <div>
                            <button className="text-sm h-10 flex items-center mr-3">
                                <HiReply className={"mx-2"}/>
                                reply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export const MessageSideBarItem = ({id,activeItem, index, message, handleSelect}) => {
    return (
        <div
            className={`cursor-pointer ${activeItem === index ? "flex flex-row items-center p-4 relative bg-gradient-to-r from-red-100 to-transparent border-l-2 border-l-red-500" : "flex flex-row items-center p-4 relative hover:bg-gradient-to-r from-red-100 to-transparent border-l-2 border-l-transparent hover:border-l-red-500 border border-b-gray-200"} ${!message.read ? ' bg-gradient-to-r from-gray-300 to-transparent' : ''}`}
            onClick={() => handleSelect(id,message, index)}>
            <div
                className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100  flex-shrink-0">
                {message?.username?.slice(0, 1).toUpperCase()}
            </div>
            <div className="flex flex-col flex-grow ml-3">
                <div className="flex items-center">
                    <div className="text-sm font-medium">{message.username}</div>
                </div>
                <div className="text-xs truncate w-40">{message.message}
                </div>
            </div>
        </div>
    );
}

export const MessageSearchInput = () => {
    return (
        <div className={"flex rounded-lg overflow-hidden mt-5"}>
            <input type={"text"}
                   className={"border-[1px] py-1 px-2 sm:p-2 w-full rounded-bl-md rounded-tl-md placeholder:font-light placeholder:text-sm outline-0 shadow-inner shadow-lg"}
                   placeholder={"Search Messages"}/>
            <button
                className={"hover:bg-gray-100 transition-colors flex items-center justify-center py-2 px-4 rounded-br-md rounded-tr-md border-[1px] border-l-0"}>
                <BsSearch/>
            </button>
        </div>
    );
}

export default MessageInboxManagement;