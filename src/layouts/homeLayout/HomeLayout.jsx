import React, {useEffect} from 'react'
import HomeHeader from "../../components/homeHeader/HomeHeader";
import HomeFooter from "../../components/homeFooter/HomeFooter";
import Cart from "../../components/cart/Cart";
import {useRecoilState} from 'recoil';
import {cartIsActiveState} from "../../recoil/atoms/cartAtom"
import {searchIsActiveState} from "../../recoil/atoms/searchBarAtom";
import SearchBar from "../../components/searchBar/SearchBar";

const scrollBarStatus = {
    hidden: "hidden",
    auto: "auto",
    visible: "visible"
}

const HomeLayout = ({children}) => {
    const [cartIsActive, setCartIsActive] = useRecoilState(cartIsActiveState);
    const [searchIsActive, setSearchIsActive] = useRecoilState(searchIsActiveState);

    useEffect(() => {
        cartIsActive ? setScrollBar(scrollBarStatus.hidden) : setScrollBar(scrollBarStatus.auto)
    }, [cartIsActive, searchIsActive])

    const setScrollBar = (status) => {
        document.body.style.overflow = status;
    }

    return (
        <>
            <div className={"flex flex-row-reverse w-full relative"}>
                <div
                    className={`bg-gray-100 h-screen ${cartIsActive ? "w-full sm:w-[400px]" : "w-0"} transition-all ease-out fixed z-50`}>
                    <Cart className={`${!cartIsActive && "hidden"}`}/>
                </div>
                <div
                    className={`bg-amber-100 v-screen ${searchIsActive ? "w-full sm:w-full" : "w-0"} transition-all ease-out fixed z-50`}>
                    <div className={`${!searchIsActive && "hidden"}`}>
                        <SearchBar/>
                    </div>
                </div>
                <div
                    className={`w-screen ${cartIsActive && "translate-x-[0px] sm:translate-x-[-400px] transition-transform ease-out"} ${searchIsActive && "translate-x-[0px] sm:translate-y-[400px]"}`}>
                    <HomeHeader/>
                    <main>{children}</main>
                    <HomeFooter/>
                </div>
            </div>

        </>
    )
}

export default HomeLayout
