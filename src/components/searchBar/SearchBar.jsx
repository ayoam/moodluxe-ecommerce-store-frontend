import React from 'react';
import {useRecoilState} from "recoil";
import {IoClose} from "react-icons/io5";
import {searchIsActiveState} from "../../recoil/atoms/searchBarAtom";
import {useForm} from "react-hook-form";

const SearchBar = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [searchIsActive, setSearchIsActive] = useRecoilState(searchIsActiveState);

    const onSubmit = data => console.log(data);


    return (
        <div className={"flex flex-col justify-center bg-white h-[400px]"}>

            <div className={"flex flex-col-reverse  justify-between  px-0 my-6"}>
                <p className={"text-2xl justify-center font-semibold mx-auto"}>What are you looking for?</p>
                <button onClick={() => setSearchIsActive(false)}><IoClose
                    className={"absolute text-2xl right-0 top-0.5 "}/></button>
            </div>
            <form>
                <div className="flex justify-center">
                    <div className="mt-auto mb-3 w-full sm:w-2/3 px-6 drop-shadow-lg">
                        <div className="input-group relative flex flex-row w-full mb-4 rounded">

                            <input
                                   type={"search"}
                                   className={"form-control relative flex-auto mx-auto px-3 py-1.5 w-full text-base font-normal text-gray-700 bg-white bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"}
                                   placeholder={"Search anything here"} aria-label={"Search"}
                                   aria-describedby={"button-addon2"} {...register("searchBar", {
                                required: true,
                                minLength: {value: 2, message: "you must enter at least 2 characters"}
                            })}


                            />

                            <span
                                className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                                id="basic-addon2"
                                onClick={(e) => {
                                    handleSubmit(onSubmit)(e)
                                }}>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4"
                               role="img"
                               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor"
                                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                          </svg>
                       </span>

                        </div>
                        <div>
                            {errors?.searchBar &&
                                <p className={"text-sm mt-2 font-light text-black"}>{errors?.searchBar.message}</p>}
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default SearchBar;