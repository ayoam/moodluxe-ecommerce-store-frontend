export const orderDateFormatter = (textDate)=>{
    let formattedDate= "";
    const date = new Date(textDate);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    formattedDate+=monthNames[date.getMonth()]+" ";
    formattedDate+=date.getUTCDate()+", ";
    formattedDate+=date.getUTCFullYear()+" ";
    formattedDate+="at "+date.getHours() + ':' + date.getMinutes();

    return formattedDate;
}