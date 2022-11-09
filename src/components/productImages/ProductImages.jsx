import React, {useState} from 'react'

const ProductImages = ({images})=>{
    const [currentImage,setCurrentImage] = useState(images[0]);
    return(
        <>
            <div className={"flex flex-col-reverse sm:flex-row gap-2 justify-center items-center"}>
                <div className={"flex flex-row sm:flex-col gap-1"}>
                    {images.map((item,index)=>{
                        return <div
                                    className={`w-[55px] sm:w-[80px] h-[55px] sm:h-[80px] cursor-pointer  ${currentImage.photoId===item.photoId?"border-yellow-600  border-2":""}`}
                                    onClick={()=>{setCurrentImage(item)}}
                                    key={index}
                                >
                                <img
                                    src={`data:image/${item.extension};base64,${item.photo}`}
                                    alt={'image photo'}
                                    className={"w-full h-full object-cover"}
                                />
                            </div>
                    })}
                </div>
                <div className={"w-[350px] sm:w-[500px] h-[350px] sm:h-[500px]"}>
                    <img
                        src={`data:image/${currentImage.extension};base64,${currentImage.photo}`}
                        alt={'image photo'}
                        className={"w-full h-full object-cover"}
                    />
                </div>
            </div>

        </>
    )
}

export default ProductImages
