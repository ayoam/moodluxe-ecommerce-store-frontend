import React, {useEffect, useState} from 'react';
import {BsSearch} from "react-icons/bs";
import {HiReply} from "react-icons/hi";
import {MdOutlineArrowBackIos} from "react-icons/md";
import GetUnreadMessagesCount from "../../service/contactRequests/GetUnreadMessagesCount";
import GetAllContacts from "../../service/contactRequests/GetAllContacts";
import UpdateUnreadMessages from "../../service/contactRequests/UpdateUnreadMessages";

const formatDate = (d)=>{
    const date = new Date(d);
    return (('0' + date.getDate()).slice(-2) + '/'
        + ('0' + (date.getMonth()+1)).slice(-2) + '/'
        + date.getFullYear());
}

const formatTime = (d)=>{
    const date = new Date(d);
    let hr = date.getHours();
    let min = date.getMinutes();
    if(min < 10 ) min = "0" + min;

    let ampm = "AM";
    if( hr > 12 ) {
        hr -= 12;
        ampm = "PM";
    }
    return `${hr}:${min} ${ampm}`;
}

const MessageInboxManagement = () => {
    const [messages, setMessages] = useState([{}])
    const [unreadCount, setUnreadCount] = useState(0);
    const [messageId, setMessageId] = useState(null);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [activeItem, setActiveItem] = useState(-1);
    const handleSelect = (id, message, itemIndex) => {
        if(activeItem>=0){
            setSelectedMessage(null)
            setActiveItem(-1)
            setMessageId(null);
        }
        else{
            setSelectedMessage(message)
            setActiveItem(itemIndex)
            setMessageId(id);
        }

    }

    const handleReturnbackBtn = () => {
        setSelectedMessage(null)
        setActiveItem(-1)
    }


    useEffect(() => {
        GetAllContacts().then(
            (response) => {
                setMessages(response.data.data);
            }
        )

        GetUnreadMessagesCount().then(
            (res) => {
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
            className={"bg-gradient-to-br from-white to-gray-100 sm:rounded-md sm:shadow-[2px_2px_1px_2px_rgba(255,255,255,0.25)] overflow-hidden"}>
            <div className="flex flex-row h-[700px] text-gray-800 relative">

                <div className="w-full lg:w-96 bg-gray-100 py-6 px-4 sm:p-6">
                    <div className="flex flex-row items-center">
                        <div className="text-xl font-semibold">Messages</div>
                        <div
                            className={unreadCount > 0 ? "flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium" : "hidden"}>{unreadCount}
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

export const FullMessage = ({message, handleReturnbackBtn}) => {

    // useEffect(()=>{
    //     console.log(message);
    // },[message])

    return (
        <>
            <div
                className="w-full h-full lg:h-auto lg:flex-1 bg-white p-5 lg:p-8 absolute lg:relative flex flex-col justify-between gap-6">
                <div className={"block lg:hidden"}>
                    <button className={"bg-gray-200 p-4 rounded-xl shadow-inner hover:bg-gray-300 transition-colors"}
                            onClick={handleReturnbackBtn}><MdOutlineArrowBackIos/></button>
                </div>
                <div className="flex flex-row items-center px-6 py-5 rounded-2xl shadow-lg border-[1px] border-black/5">
                    <div
                        className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-pink-500 text-pink-100">
                        {message?.username?.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="flex flex-col ml-3 gap-1">
                        <div className={"flex sm:flex-row flex-col sm:gap-2 gap-1"}>
                            <p className="font-semibold text-xs sm:text-sm">
                                {message?.username}
                            </p>
                            <p className={"text-xs sm:text-sm text-gray-700"}>{`<${message.email}>`}</p>
                        </div>

                        <p className={"text-xs text-gray-500"}>{formatDate(message?.date)} {formatTime(message?.date)}</p>
                    </div>
                </div>

                <div
                    className="relative text-xs sm:text-sm bg-white flex-1 p-6 lg:p-10 shadow-lg rounded-xl border-[1px] border-black/5 ">
                    {message.message}
                </div>

                <div className="flex flex-row items-center mx-3 lg:mx-5">
                    <div
                        className="flex flex-row items-center border rounded-3xl border-gray-600 text-gray-600  h-12 px-2 hover:bg-gray-300 hover:text-black hover:border-transparent transition-colors cursor-pointer">
                        <div>
                            <a href={`mailto: ${message?.email}`}>
                                <button className="text-sm h-10 flex items-center mr-3">
                                    <HiReply className={"mx-2"}/>
                                    reply
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export const MessageSideBarItem = ({id, activeItem, index, message, handleSelect}) => {
    return (
        <div
            className={`cursor-pointer flex flex-row items-center p-4 relative from-red-100 to-transparent border-l-2 transition-colors
                ${activeItem === index ? "bg-gradient-to-r border-l-red-500" : "hover:bg-gradient-to-r border-l-transparent hover:border-l-red-500"} 
                ${!message.read ? ' bg-gray-200' : ''}`}
            onClick={() => handleSelect(id, message, index)}>
            <div
                className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100  flex-shrink-0">
                {message?.username?.slice(0, 1).toUpperCase()}
            </div>
            <div className={`flex flex-col flex-grow ml-3`}>
                <div className="flex items-center">
                    <div
                        className={`text-sm ${!message.read ? 'font-semibold' : 'font-medium '}`}>{message.username}</div>
                </div>
                <div className={`text-xs truncate w-40 ${!message.read ? 'font-medium' : ''}`}>{message.message}
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