import React from 'react'

const NotificationToast = ({message})=>{
    return(
        <div className={"bottom-6 fixed right-[50%] translate-x-[50%] bg-green-600 text-white z-50 px-6 py-2 rounded-3xl shadow-lg"}>
            <p>{message}</p>
        </div>
    )
}

export default NotificationToast
