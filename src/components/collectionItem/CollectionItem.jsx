import React from 'react'
import { useNavigate } from "react-router-dom";

const CollectionItem = ({classes,collection,brand})=>{
    const otherClasses = classes?classes:" ";
    const navigate = useNavigate();

    return(
        <>
            <div className={"relative text-white bg-white/20 cursor-pointer overflow-hidden "+otherClasses}
                 onClick={()=>{navigate(`/collections/${collection.name.toLowerCase()}-watches${brand?`?brand=`+brand:""}`)}}>
                {collection?.image &&
                    <img
                        src={require(`../../assets/img/${collection.image}`)}
                        alt={"img"}
                        className={"w-full h-full object-cover mix-blend-overlay hover:scale-110 transition-all duration-200"}
                    />
                }
                <p className={"font-playfair absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl sm:text-3xl font-semibold"}>
                    {collection?collection.name:"test"}
                </p>
            </div>
        </>
    )
}

export default CollectionItem
