import React from 'react'

const AdminFooter = ()=>{
    return(
        <footer>
            <div className={"text-center font-medium  text-red-500 bg-mainBgColor py-6"}>
                <p>© {new Date().getFullYear()} MOODLUXE All Rights Reserved. </p>
            </div>
        </footer>
    )
}

export default AdminFooter
