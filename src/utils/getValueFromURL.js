export const getValueFromURL = (urlKey,searchParams)=>{
    let param = null;
    for (let [key, value] of searchParams.entries()) {
        if(key===urlKey){
            param = value;
        }
    }
    return param;
}