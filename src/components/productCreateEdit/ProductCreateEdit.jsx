import React, {useEffect, useRef, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AdminLayout from "../../layouts/adminLayout/AdminLayout";
import CustomSelect from "../../components/customSelect/CustomSelect";
import {IoClose} from "react-icons/io5";
import {IoMdCloseCircle} from "react-icons/io";
import {Controller, useForm} from "react-hook-form";
import getBrands from "../../service/dataRequests/getBrands";
import getCollections from "../../service/dataRequests/getCollections";
import postCreateProduct from "../../service/adminRequests/postCreateProduct";
import loadingSpinner from "../../assets/img/loading2.svg";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {getValueFromURL} from "../../utils/getValueFromURL";
import {BsCheckCircleFill} from "react-icons/bs";
import GetProductById from "../../service/productRequests/GetProductById";
import putUpdateProduct from "../../service/adminRequests/putUpdateProduct";
import NotificationToast from "../notificationToast/NotificationToast";
import {MdOutlineArrowBackIos} from "react-icons/md";

const cardStyle = "bg-white rounded-md shadow-[2px_2px_1px_2px_rgba(255,255,255,0.25)] px-5 py-6"

const ProductCreateEdit = ({pageType}) => {
    const [allFormsData, setAllFormsData] = useState({
        title: null,
        description: null,
        photos: null,
        status: null,
        brand: null,
        collections: null,
        price: null,
        compareToPrice: null,
        stock: null
    });
    const [saveBtnClicked, setSaveBtnClicked] = useState(false);
    const isFirstRender = useRef(true);
    const titleDescriptionFormRef = useRef();
    const productDetailsFormRef = useRef();
    const [validateImageUpload, setValidateImageUpload] = useState(false);
    const [pageIsLoading, setPageIsLoading] = useState(false);
    const [saveError, setSaveError] = useState(null);
    const navigate = useNavigate();
    const {productId} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isNewlyCreated, setNewlyCreated] = useState(false);
    const [productEditData, setProductEditData] = useState(null);
    const [showNotifToast, setShowNotifToast] = useState(false)

    //check if a product is newly created
    useEffect(() => {
        if (pageType === "edit") {
            const newlyCreated = getValueFromURL("newlyCreated", searchParams);
            if (newlyCreated) {
                setNewlyCreated(true);
                setTimeout(() => {
                    setNewlyCreated(false)
                    searchParams.delete("newlyCreated");
                    setSearchParams(searchParams);
                }, 10000)
            } else {
                setNewlyCreated(false)
            }

        }
    }, [searchParams]);

    useEffect(() => {
        if (pageType === "edit") {
            GetProductById(productId)
                .then(response => {
                    // console.log(response?.data);
                    setProductEditData(response?.data);
                })
                .catch(error => console.log(error));
        }
    }, []);

    //triggers when save btn clicked and all fields validated
    useEffect(() => {
        const checkAllFields = Object.keys(allFormsData).filter(x => x !== "compareToPrice").every(x => allFormsData[x] != null);
        // console.log(checkAllFields,"*********",saveBtnClicked)
        if (isFirstRender.current && checkAllFields && saveBtnClicked) {
            const productInfo = {
                "libelle": allFormsData.title,
                "description": allFormsData.description,
                "originalPrice": allFormsData.price,
                "discountPrice": allFormsData.compareToPrice,
                "quantity": allFormsData.stock,
                "active": allFormsData.status === "active",
                "categoriesIdList": allFormsData.collections.map(x => x.idc),
                "idBrand": allFormsData.brand
            }

            const bodyFormData = new FormData();
            const blob = new Blob([JSON.stringify(productInfo)], {
                type: "application/json"
            });
            bodyFormData.append("productInfo", blob);
            allFormsData.photos.forEach(item => {
                bodyFormData.append("photo", item.file);
            })

            if (pageType === "create") {
                handleCreateProduct(bodyFormData);
            } else if (pageType === "edit") {
                handleEditProduct(bodyFormData);
            }
            isFirstRender.current = false;
        } else {
            setSaveBtnClicked(false);
        }
    }, [allFormsData, saveBtnClicked])

    const handleCreateProduct = (bodyFormData) => {
        setPageIsLoading(true);
        postCreateProduct(bodyFormData)
            .then(response => {
                const productId = response?.data.idp;
                navigate("/admin/products/" + productId + "/edit" + "?newlyCreated=true");
            })
            .catch(error => {
                console.log(error);
                setSaveError("An error occurred while saving the product");
            })
            .finally(() => setPageIsLoading(false));
    }

    const handleEditProduct = (bodyFormData) => {
        setPageIsLoading(true);
        putUpdateProduct(bodyFormData, productId)
            .then(response => {
                // alert("product updated!");
                setShowNotifToast(true);
                // window.scrollTo(0, 0);
                window.scrollTo({top: 0, behavior: 'smooth'});
                setTimeout(() => setShowNotifToast(false), 5000);
            })
            .catch(error => {
                console.log(error);
                setSaveError("An error occurred while updating the product");
            })
            .finally(() => setPageIsLoading(false));
    }

    const handleSaveBtnClick = () => {
        //trigger titleDescriptionForm submit
        triggerFormSubmit(titleDescriptionFormRef.current);
        //trigger productDetailsForm submit
        triggerFormSubmit(productDetailsFormRef.current);
        //trigger image upload validation
        setValidateImageUpload(true);

        isFirstRender.current = true;
        setSaveBtnClicked(true);
    }

    const triggerFormSubmit = (form) => {
        if (typeof form?.requestSubmit === 'function') {
            form?.requestSubmit();
        } else {
            form?.dispatchEvent(new Event('submit', {cancelable: true}));
        }
    }

    if (!productEditData && pageType === "edit") return null;

    return (
        <AdminLayout>
            <section className={"bg-secondaryBgColor min-h-[85vh] relative"}>
                {showNotifToast && <NotificationToast message={"product updated!"}/>}

                {pageIsLoading &&
                    <div
                        className={"absolute w-full h-full top-0 right-0 z-50 bg-black/60 flex justify-center items-center"}>
                        <img src={loadingSpinner} alt={"loading spinner"} className={"w-[100px]"}/>
                    </div>
                }
                <div className={"p-3 py-8 sm:p-8 md:px-20 lg:p-10 max-w-7xl mx-auto"}>
                    <div className={"flex gap-3 items-center mb-8"}>
                        <button
                            className={"bg-gray-100 p-3 rounded-lg shadow-inner hover:bg-gray-200 transition-colors"} onClick={()=>navigate(-1)}>
                            <MdOutlineArrowBackIos/>
                        </button>
                        <h1 className={"text-2xl sm:text-3xl font-semibold text-white"}>{pageType === "edit" ? `Editing Product #${productId}` : "Create Product"}</h1>
                    </div>

                    {isNewlyCreated && <NewlyCreatedTag title={productEditData?.libelle}/>}
                    <div className={"flex flex-col lg:flex-row gap-5"}>
                        <div className={"w-full lg:w-2/3 space-y-5"}>
                            <TitleDescriptionCard formRef={titleDescriptionFormRef} setData={setAllFormsData}
                                                  productEditData={productEditData}/>
                            <ImageUploadCard setData={setAllFormsData} validate={validateImageUpload}
                                             productEditPhotoList={productEditData?.photoList}/>
                        </div>
                        <ProductDetailsCards formRef={productDetailsFormRef} setData={setAllFormsData}
                                             productEditData={productEditData}/>
                    </div>
                    <div className={"flex justify-end border-t-[1px] border-t-white/50 mt-8"}>
                        <div
                            className={"flex flex-col-reverse w-full sm:w-auto sm:flex-row justify-center items-center mt-4 gap-4"}>
                            {saveError && <p className={"text-red-500"}>{saveError}</p>}
                            <button
                                className={"bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 text-white rounded w-full sm:w-auto"}
                                onClick={handleSaveBtnClick}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </AdminLayout>
    )
}

const NewlyCreatedTag = ({title}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const handleCloseClick = () => {
        searchParams.delete("newlyCreated")
        setSearchParams(searchParams);
    }

    return (
        <div
            className={"text-black bg-green-100 border-[1px] border-green-600 rounded-lg p-5 mb-6 flex justify-between shadow-white shadow"}>
            <div className={"flex gap-4"}>
                <div>
                    <BsCheckCircleFill className={"text-green-700 text-xl"}/>
                </div>
                <div>
                    <p className={"font-medium"}>Added {title}</p>
                    <button className={"text-sm underline text-black/70"}
                            onClick={() => navigate("/admin/products/create")}>Add another product
                    </button>
                </div>
            </div>
            <div>
                <button onClick={handleCloseClick}><IoClose className={"text-black/70 text-lg"}/></button>
            </div>
        </div>
    )
}

const TitleDescriptionCard = ({formRef, setData, productEditData}) => {
    const {register, handleSubmit, formState: {errors}, control} = useForm();

    const handleFormSubmit = (data) => {
        setData(prev => {
            return {...prev, title: data.title, description: data.description}
        });
    }


    return (
        <div className={`h-[450px] ${cardStyle}`}>
            <form className={"space-y-4"} onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
                <div className={"flex flex-col text-sm"}>
                    <label className={"mb-1"}>Title</label>
                    <input type={"text"}
                           className={"border-gray-400 border-[1px] rounded outline-none p-2 font-light"}
                           defaultValue={productEditData?.libelle}
                           {...register("title", {
                               required: "title required!"
                           })}/>
                    {errors?.title &&
                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.title?.message}</p>}
                </div>
                <div className={"flex flex-col gap-1"}>
                    <label className={"text-sm mb-1"}>Description</label>
                    <Controller
                        defaultValue={productEditData?.description}
                        control={control}
                        name="description"
                        rules={{
                            required: "description required!"
                        }}
                        render={({field}) => (
                            <ReactQuill theme="snow"
                                        value={field.value}
                                        onChange={(e) => {
                                            field.onChange(e)
                                        }}
                                        inputRef={field.ref}
                                        className={"h-[150px] sm:h-[200px]"}/>
                        )}
                    />
                    {errors?.description &&
                        <p className={"text-sm mt-2 font-light text-red-400 pt-16 sm:pt-10"}>{errors?.description?.message}</p>}
                </div>
            </form>
        </div>
    );
}

const CollectionsSelect = ({setData, isTouched, setIsTouched, collectionsList, productEditData}) => {
    const [selectedCollections, setSelectedCollections] = useState([]);
    const [error, setError] = useState(null);
    const collectionsSelectRef = useRef(0);

    const handleCollectionsDDLchange = (e) => {
        setIsTouched(true);
        const value = collectionsSelectRef.current.value;
        value !== "" && value !== 0 && setSelectedCollections(prev => [...prev, collectionsList.find(x => x.idc == value)])
        collectionsSelectRef.current.value = 0;
    }

    useEffect(() => {
        if (productEditData) {
            setSelectedCollections(productEditData?.categoryList);
        }
    }, [])

    useEffect(() => {
        if (selectedCollections.length === 0) {
            setData(prev => {
                return {...prev, collections: null}
            });
            setError("collections required!")
        } else {
            setData(prev => {
                return {...prev, collections: selectedCollections}
            });
            setError(null)
        }
    }, [selectedCollections, isTouched])

    const handleRemoveClick = (item) => {
        setSelectedCollections(prev => prev.filter(x => x.idc !== item.idc));
    }

    return (
        <div className={"flex flex-col gap-1 text-sm"}>
            <label className={""}>Collections</label>
            <CustomSelect
                style={"border-gray-400 border-[1px] rounded outline-none font-light"}
                onChange={handleCollectionsDDLchange} defaultValue={0}
                customRef={collectionsSelectRef}>
                <option disabled={true} value={0}></option>
                {collectionsList?.map((item, index) => {
                    return (
                        <option value={item.idc}
                                key={index}
                                disabled={selectedCollections.map(x => x?.idc).includes(item.idc)}>
                            {item.name}
                        </option>
                    );
                })}
            </CustomSelect>
            {error && isTouched && <p className={"text-sm mt-2 font-light text-red-400"}>{error}</p>}

            <div className={"space-y-2 mt-1"}>
                {selectedCollections?.map((item, index) => {
                    return (
                        <div className={"inline-block"} key={index}>
                            <p className={"bg-violet-500 text-white px-4 py-1 rounded-2xl mr-2 flex items-center gap-2"}>
                                {item?.name}
                                <IoClose className={"text-white cursor-pointer"}
                                         onClick={() => handleRemoveClick(item)}/>
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const ProductDetailsCards = ({formRef, setData, productEditData}) => {
    const {register, handleSubmit, formState: {errors}, control} = useForm();
    const [validateCollections, setValidateCollections] = useState(false);
    const [brands, setBrands] = useState(null);
    const [collections, setCollections] = useState(null);

    useEffect(() => {
        const startRequests = async () => {
            return await Promise.all([
                getBrands()
                    .then(response => {
                        setBrands(response?.data?.data);
                    }).catch(error => console.log(error))
                ,
                getCollections()
                    .then(response => {
                        // console.log(response?.data?.data)
                        setCollections(response?.data?.data);
                    }).catch(error => console.log(error))

            ])
        }

        startRequests();

    }, [])

    const handleFormSubmit = (data) => {
        setData(prev => {
            return {
                ...prev,
                status: data.status,
                brand: data.brand,
                price: data.price,
                compareToPrice: data.compareToPrice || null,
                stock: data.stock
            }
        });
    }
    return (
        <div className={"w-full lg:w-1/3"}>
            <form className={"space-y-5"} onSubmit={(e) => {
                setValidateCollections(true);
                handleSubmit(handleFormSubmit)(e);
            }} ref={formRef}>
                <div className={`${cardStyle} space-y-4`}>
                    <div className={"flex flex-col gap-1 text-sm"}>
                        <label className={""}>Product status</label>
                        <CustomSelect
                            style={"border-gray-400 border-[1px] rounded outline-none font-light"}
                            defaultValue={productEditData?.active || productEditData?.active === true ? "active" : productEditData?.active === false ? "draft" : null}
                            register={
                                {
                                    ...register("status", {
                                        required: "status required!",
                                    })
                                }
                            }>
                            <option value={"active"}>Active</option>
                            <option value={"draft"}>Draft</option>
                        </CustomSelect>
                    </div>
                    {brands && <div className={"flex flex-col gap-1 text-sm"}>
                        <label className={""}>Brand</label>
                        <CustomSelect
                            style={"border-gray-400 border-[1px] rounded outline-none font-light"}
                            defaultValue={productEditData?.brand?.id}
                            register={
                                {
                                    ...register("brand", {
                                        required: "brand required!",
                                    })
                                }
                            }>
                            {brands?.map((item, index) => {
                                return <option value={item.idb} key={index}>{item.name}</option>
                            })}
                        </CustomSelect>
                        {errors?.brand &&
                            <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.brand.message}</p>}

                    </div>}
                    <CollectionsSelect setData={setData} isTouched={validateCollections}
                                       setIsTouched={setValidateCollections} collectionsList={collections}
                                       productEditData={productEditData}/>
                </div>
                <div className={`${cardStyle} space-y-4`}>
                    <div className={"flex flex-col gap-1 text-sm"}>
                        <label className={""}>Price</label>
                        <input type={"text"} placeholder={"$ 0.00"}
                               defaultValue={productEditData?.originalPrice}
                               className={"border-gray-400 border-[1px] rounded outline-none p-2 font-light"}
                               {...register("price", {
                                   required: "price required!",
                               })}
                        />
                        {errors?.price &&
                            <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.price.message}</p>}
                    </div>
                    <div className={"flex flex-col gap-1 text-sm"}>
                        <label className={""}>Compare to price</label>
                        <input type={"text"} placeholder={"$ 0.00"}
                               defaultValue={productEditData?.discountPrice}
                               className={"border-gray-400 border-[1px] rounded outline-none p-2 font-light"}
                               {...register("compareToPrice")}/>
                        {errors?.compareToPrice &&
                            <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.compareToPrice.message}</p>}
                    </div>
                    <div className={"flex flex-col gap-1 text-sm"}>
                        <label className={""}>Stock (SKU)</label>
                        <input type={"number"}
                               defaultValue={productEditData?.quantity >= 0 ? productEditData?.quantity : 1}
                               className={"border-gray-400 border-[1px] rounded outline-none p-2 font-light"}
                               {...register("stock", {
                                   required: "stock required!",
                               })}/>
                        {errors?.stock &&
                            <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.stock.message}</p>}
                    </div>
                </div>
            </form>
        </div>
    );
}

const ImageUploadCard = ({setData, validate, productEditPhotoList}) => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const fileInputRef = useRef();
    const isFirstRender = useRef(true);

    useEffect(() => {
        // console.log("======>",productEditPhotoList.map(x=>x.photoId));
        if (productEditPhotoList && isFirstRender.current) {
            productEditPhotoList.forEach(item => {
                const file = dataURLtoFile(item.photo, item.extension, item.photoId);
                setImages(prev => [...prev, {
                    filename: item.photoId,
                    extension: item.extension,
                    fileURL: URL.createObjectURL(file),
                    file: file
                }])

            })
            isFirstRender.current = false;
        }
    }, []);

    const dataURLtoFile = (base64, extension, fileName) => {
        const dataurl = `data:image/${extension};base64,${base64}`;
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], fileName, {type: mime});
    }

    const handleFileInputChange = ({target: {files}}) => {
        const filename = files[0]?.name;
        const extension = files[0]?.type;
        files && setImages(prev => [...prev, {
            filename,
            extension,
            fileURL: URL.createObjectURL(files[0]),
            file: files[0]
        }])
    }

    useEffect(() => {
        if (images.length === 0) {
            setError("upload at least one image!")
            setData(prev => {
                return {...prev, photos: null}
            })
        } else {
            setError(null);
            setData(prev => {
                return {...prev, photos: images}
            })
        }
    }, [images, validate]);


    return (
        <div className={`${cardStyle}`}>
            <h1 className={"font-semibold"}>Media</h1>
            <div
                className={`border-dashed border-[1px] border-gray-300 hover:border-gray-500 transition-colors rounded-xl mt-4 flex justify-center items-center text-black/80 cursor-pointer ${images?.length > 0 ? "h-[100px]" : "h-[200px]"}`}
                onClick={() => fileInputRef.current.click()}>
                <div className={"text-center space-y-2"}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type={"file"} accept={"image/*"} ref={fileInputRef}
                               onChange={handleFileInputChange}
                               onClick={(e) => e.target.value = null} hidden/>
                    </form>
                    <button className={"text-xs bg-violet-100 p-1 px-2 rounded"}>Add image</button>
                    <p className={"text-xs text-gray-400"}>Accepts jpg , png images</p>
                </div>
            </div>
            <div className={"mt-4 grid grid-cols-3 gap-3"}>
                {images.map((item, index) => {
                    return (
                        <div
                            className={`bg-gray-100 rounded overflow-hidden shadow relative ${index === 0 ? "border-2 border-green-400/80 " : "border-[1px] border-gray-200 "}`}
                            key={index} style={{aspectRatio: "1/1"}}>
                            <img src={item.fileURL} alt={item.filename} className={"w-full h-full object-cover"}/>
                            <button onClick={() => setImages(prev => prev.filter(x => x.fileURL !== item.fileURL))}>
                                <IoMdCloseCircle
                                    className={"absolute text-white top-1 right-1 text-lg bg-black/20 rounded-full"}/>
                            </button>
                        </div>
                    );
                })}
            </div>
            {error && validate && <p className={"text-sm mt-2 font-light text-red-400"}>{error}</p>}
        </div>
    );
}

export default ProductCreateEdit

