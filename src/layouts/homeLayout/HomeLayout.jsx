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
                <Cart/>
                <SearchBar/>
                <div
                    className={`w-screen ${cartIsActive && "translate-x-[0px] sm:translate-x-[-400px] transition-transform ease-out"} ${searchIsActive && "translate-x-[0px] translate-y-[550px] duration-700 transition-transform ease-out"}`}>
                    <HomeHeader/>
                    <main>{children}</main>
                    <HomeFooter/>
                </div>
            </div>

        </>
    )
}

export default HomeLayout
