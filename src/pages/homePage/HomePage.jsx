import React, {useState, useEffect} from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import HeroSection from "../../components/heroSection/HeroSection";
import CollectionItem from "../../components/collectionItem/CollectionItem";
import CollectionsSection from "../../components/collectionsSection/CollectionsSection";
import BestSellerSection from "../../components/bestSellerSection/BestSellerSection";
import AboutSection from "../../components/aboutSection/AboutSection";
import NewsLettersSection from "../../components/newslettersSection/NewsLettersSection";
import ScrollTopButton from "../../components/scrollUpButton/ScrollTopButton";
import GetProductsByQueryParams from "../../service/productRequests/GetProductsByQueryParams";

const HomePage = ()=>{
    const [hideBestSeller,setHideBestSeller]=useState(false);

    useEffect(() => {
    }, [hideBestSeller]);

    return(
        <HomeLayout>
            <HeroSection/>
            <CollectionsSection/>
            {!hideBestSeller && <BestSellerSection setHideBestSeller={setHideBestSeller} />}
            <AboutSection/>
            <NewsLettersSection/>
            <ScrollTopButton/>
        </HomeLayout>
    )
}

export default HomePage
