import React, {useEffect, useState} from 'react'
import CustomCheckbox from "../ui/customCheckBox/CustomCheckbox";
import getAllBrands from "../../service/productRequests/GetAllBrands";

const BrandFilter = ({selectedBrands,getSelectedBrands})=>{
   /* const [brandsState,setBrandsState] = useState([
        {value:"Rolex",checked:false},
        {value:"Swatch",checked:false},
        {value:"Guess",checked:false},
        {value:"Casio",checked:false},
        {value:"Hugo",checked:false},
        {value:"Cartier",checked:false},
        {value:"Fossil",checked:false},
    ]);*/

    const [brandsState, setBrandsState] = useState([]);
    useEffect( () => {
        try{
            getAllBrands()
                .then(response =>{
                     console.log(response);
                     let data = response.data.data.map((item)=>{return {value:item.name,checked:false}});
                    console.log(data)
                    setBrandsState(data);
                });
        }catch (error){console.log(error)}
    },[]);

    useEffect(() => {
        getSelectedBrands(brandsState.filter((item)=>item.checked).map((item)=>item.value.toLowerCase()))
    }, [brandsState]);

    useEffect(()=>{
        selectedBrands && setBrandsState(prev=>{
            const newState = prev.map(item=>{
                if(selectedBrands.includes(item.value.toLowerCase())){
                    return {...item,checked:true};
                }
                return {...item,checked:false};
            })
            // console.log(newState);
            return newState;
        })
    },[])


    const handleChangeChecked = (value)=>{
       setBrandsState(prev=>{
            return prev.map((item)=>{
                if(item.value==value){
                    return {...item,checked:!item.checked}
                }
                return item
            });
        })
    }
    return(
        <>
            <div className={"mx-auto pt-2 pb-4 px-1 border-t-[1px] border-white/40"}>
                <h1 className={"text-white font-playfair mb-2"}>Brand</h1>
                <div className={"scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-100 max-h-[150px]"}>
                    {brandsState.map((item,index)=>{
                        return <span key={index} className={"flex items-center gap-2 text-white"}>
                            <CustomCheckbox item={item} changeChecked={handleChangeChecked}/> <p className={"font-light"}>{item.value.charAt(0).toUpperCase()+item.value.slice(1)}</p>
                        </span>
                    })}

                </div>
            </div>
        </>
    )
}

export default BrandFilter
