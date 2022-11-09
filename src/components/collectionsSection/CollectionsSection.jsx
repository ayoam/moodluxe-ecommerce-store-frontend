import React from 'react'
import CollectionItem from "../collectionItem/CollectionItem";
import img from "../../assets/img/bg1.jpg"

const collections = [
    {
        "name":"Chronograph",
        "image":"chronograph-bg.jpg"
    },
    {
        "name":"Digital",
        "image":"digital-bg.jpg"
    },
    {
        "name":"Quartz",
        "image":"quartz-bg.jpg"
    },
    {
        "name":"Automatic",
        "image":"automatic-bg.jpg"
    },
    {
        "name":"Skeleton",
        "image":"skeleton-bg.jpg"
    },
];

const CollectionsSection = ()=>{
    return(
        <div className={"bg-mainBgColor py-16"}>
            <h1 className={"text-white text-center text-4xl font-semibold mb-12"}>Collections</h1>
            <div className={"max-w-6xl mx-auto grid sm:grid-rows-2 md:grid-rows-2 px-4 sm:px-0 gap-4 sm:gap-0 sm:grid-cols-2 md:grid-cols-3 "}>
                <CollectionItem  classes={"sm:row-span-2 sm:col-span-2 md:col-span-1"} collection={collections[0]}/>
                {collections.slice(1).map((item,index)=>{
                    return <CollectionItem key={index} collection={item}/>
                })}
            </div>
        </div>
    )
}

export default CollectionsSection
