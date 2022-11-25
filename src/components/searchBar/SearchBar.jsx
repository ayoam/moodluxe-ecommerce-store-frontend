import React from 'react';
import {useRecoilState} from "recoil";
import {IoClose} from "react-icons/io5";
import {searchIsActiveState} from "../../recoil/atoms/searchBarAtom";
import {useForm} from "react-hook-form";
import {BiSearch} from "react-icons/bi";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const [searchIsActive, setSearchIsActive] = useRecoilState(searchIsActiveState);
    const navigate = useNavigate()

    const handleSearch = (data, e) =>{
        navigate({
            pathname: '/search',
            search: `?q=${data.searchBar}`,
        });
        reset()
        setSearchIsActive(false)
    }

    return (
        <div className={`w-screen  ${searchIsActive ? "translate-y-[0px] h-screen" : "translate-y-[-550px] hidden"} transition-all duration-300 ease-out fixed z-50`}>
            <div className={`w-full h-full bg-black/60 `} onClick={()=>setSearchIsActive(false)}></div>
            <div className={"absolute top-0 w-full flex flex-col @justify-center bg-white h-[550px] px-6 py-12 sm:px-12 sm:py12 space-y-20 "}>
                <div className={"flex flex-col-reverse justify-between @px-0 @my-6 "}>
                    <p className={"text-4xl justify-center font-semibold mx-auto text-center"}>What are you looking for?</p>
                    <button onClick={() => setSearchIsActive(false)}>
                        <IoClose className={"absolute text-3xl right-3 top-3 hover:text-gray-500"}/>
                    </button>
                </div>
                <form onSubmit={handleSubmit(handleSearch)}>
                    <div className="flex justify-center">
                        <div className="mt-auto mb-3 w-full sm:w-[800px] px-0 sm:px-6 drop-shadow-md">
                            <div className="input-group relative flex flex-row w-full mb-4 rounded">
                                <input
                                    className={"form-control relative flex-auto mx-auto px-3 @py-1.5 @w-full text-base font-normal text-gray-700 bg-white bg-clip-padding rounded transition-all ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none py-2 placeholder:font-light"}
                                    placeholder={"Search anything here"} aria-label={"Search"}
                                    aria-describedby={"button-addon2"} {...register("searchBar", {
                                    required: true,
                                    minLength: {value: 2, message: "you must enter at least 2 characters"}
                                })}


                                />

                                <button
                                    className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded cursor-pointer"
                                    id="basic-addon2"
                                    type={"submit"}>
                                    <BiSearch className={"font-semibold text-2xl hover:text-gray-500"}/>
                                </button>

                            </div>
                            <div>
                                {errors?.searchBar &&
                                    <p className={"text-sm mt-2 font-light text-black"}>{errors?.searchBar.message}</p>}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default SearchBar;