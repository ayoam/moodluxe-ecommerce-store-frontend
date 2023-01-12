import React, {useEffect, useState} from 'react'
import {TablePagination} from "@mui/material";
import useUrlSearchParams from "../../hooks/useUrlSearchParams";
import {useSearchParams} from "react-router-dom";
import {getValueFromURL} from "../../utils/getValueFromURL";

const tablePaginationStyle={
    ".MuiTablePagination-selectLabel":{
        fontFamily:"Poppins,sans-serif",
        fontWeight:"600"
    },
    ".MuiTablePagination-displayedRows ":{
        fontFamily:"Poppins,sans-serif!important"
    },
    ".MuiTablePagination-select":{
        fontFamily:"Poppins,sans-serif!important",
        padding:0
    },
    ".MuiTablePagination-toolbar":{
        paddingRight:"10px",
        paddingLeft:"5px"
    }
};

const MaterialTablePagination = ({count})=>{
    const { page } = useUrlSearchParams();
    let [searchParams, setSearchParams] = useSearchParams();
    const [limit,setLimit] = useState(5);

    useEffect(() => {
        const urlLimit =  getValueFromURL("limit",searchParams);
        urlLimit && setLimit(parseInt(urlLimit));
    }, [searchParams]);

    const handlePageClick = (e,data)=>{
        searchParams.set("page", data+1);
        setSearchParams(searchParams);
    }

    const handleLimitChange = (e,data)=>{
        setLimit(data.props.children);
        searchParams.set("limit", data.props.children);
        setSearchParams(searchParams);
    }

    return(
        <TablePagination
            count={count}
            onPageChange={handlePageClick}
            onRowsPerPageChange={handleLimitChange}
            page={page-1}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            sx={tablePaginationStyle}
        />
    )
}

export default MaterialTablePagination
