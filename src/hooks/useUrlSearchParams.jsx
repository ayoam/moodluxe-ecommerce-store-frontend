import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useUrlSearchParams = ()=>{
    const location = useLocation();
    const [page, setPage] = useState(1);
    const [urlSearchParams, setUrlSearchParams] = useState(null);
    useEffect(() => {
        let newUrlSearchParams = new URLSearchParams(location.search);
        console.log(Object.fromEntries(newUrlSearchParams));
        if (newUrlSearchParams.get("page")) {
            setPage(parseInt(newUrlSearchParams.get("page")));
            newUrlSearchParams.set("page", newUrlSearchParams.get("page")-1);
        } else {
            setPage(1);
            newUrlSearchParams.set("page", 0);
        }
        setUrlSearchParams(Object.fromEntries(newUrlSearchParams));
    }, [location]);

    return {
        urlSearchParams,
        setUrlSearchParams,
        page,
        setPage,
    };
}

export default useUrlSearchParams
