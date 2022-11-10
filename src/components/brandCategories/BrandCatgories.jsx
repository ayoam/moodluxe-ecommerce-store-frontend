import React from 'react'
import CollectionItem from "../collectionItem/CollectionItem";

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

const BrandCatgories = ({brand})=>{
    return(
            <div className={"max-w-6xl mx-auto grid sm:grid-rows-2 md:grid-rows-2 px-4 sm:px-0 gap-4  sm:grid-cols-2 md:grid-cols-3 "}>
                <CollectionItem  classes={"sm:row-span-2 sm:col-span-2 md:col-span-1"} collection={collections[0]} brand={brand}/>
                {collections.slice(1).map((item,index)=>{
                    return <CollectionItem key={index} collection={item} brand={brand}/>
                })}
            </div>
    )
}

export default BrandCatgories
