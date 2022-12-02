import React, {useEffect, useRef, useState} from 'react'
// import Slider from '@material-ui/core/Slider';
import Slider from '@mui/material/Slider';
import {useRecoilValue} from "recoil"
import {defaultMinPriceState, defaultMaxPriceState, totalCountState} from "../../recoil/atoms/productListingAtom";

const PriceFilter = ({minMaxPrices,getminMaxPrice})=>{
    const defaultMinPrice = useRecoilValue(defaultMinPriceState);
    const defaultMaxPrice = useRecoilValue(defaultMaxPriceState);

    const [values, setValues] = useState([0,0]);

    useEffect(() => {
        getminMaxPrice(values);
    }, [values]);

    useEffect(() => {
        if(defaultMaxPrice && defaultMinPrice){
            setValues([defaultMinPrice,defaultMaxPrice])
        }
    }, [defaultMinPrice,defaultMaxPrice]);

    useEffect(() => {
        minMaxPrices.every(item=>item!=null) && setValues(minMaxPrices.map(item=>parseInt(item)));
    }, []);


    const rangeSelector = (event, newValue) => {
        setValues(newValue);
        // console.log(newValue)
    };

    const priceInputFormatter = (value)=>{
        let newValue=value;
        if(newValue=="")newValue=0;
        if(newValue.length >1 && newValue[0]==0)newValue=newValue.substring(1);
        return newValue;
    }


    return(
        <>
            <div className={"mx-auto pt-2 pb-4 px-1 border-t-[1px] border-white/40"}>
                <h1 className={"text-white font-playfair mb-2"}>Price</h1>
                <Slider
                    value={values}
                    onChange={rangeSelector}
                    valueLabelDisplay={"off"}
                    style={{color:"white"}}
                    step={100}
                    min={defaultMinPrice}
                    max={defaultMaxPrice}
                />
                <div className={"flex flex-row justify-between gap-2"}>
                    <div className={"flex flex-col border-white/30 border-[1px] p-2"}>
                        <p className={"text-xs font-light text-white font-playfair"}>MIN</p>
                        <span className={"flex gap-1 text-white"}>$<input type={"number"} value={values[0]} onChange={(e)=>{
                            e.target.value=priceInputFormatter(e.target.value);
                            setValues(prev=>[parseInt(e.target.value),prev[1]]);
                        }} className={"w-[70px] outline-0 bg-transparent text-white"}/></span>
                    </div>
                    <div className={"flex flex-col border-white/30 border-[1px] p-2"}>
                        <p className={"text-xs font-light text-white font-playfair"}>MAX</p>
                        <span className={"flex gap-1 text-white"}>$<input type={"number"} value={values[1]} onChange={(e)=>{
                            e.target.value=priceInputFormatter(e.target.value);
                            setValues(prev=>[prev[0],parseInt(e.target.value)]);
                        }}  className={"w-[70px] outline-0 bg-transparent text-white"}/></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceFilter
