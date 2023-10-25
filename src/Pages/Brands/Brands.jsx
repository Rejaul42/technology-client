import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleBrand from "../SingleBrand/SingleBrand";

const Brands = () => {
    // const brands = useLoaderData()
    const LoadedBrands = useLoaderData()
    const [brands, setBrands] = useState([])
    const { brandName } = useParams()
    const [matchBrand, setMatchBrand] = useState([])
    const [findBrands, setFindBrands] = useState([])
    console.log(LoadedBrands)

    useEffect(() => {
        fetch('/image.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    // console.log(brands)

    useEffect(() => {
        const findBrand = brands?.find(brand => brand?.brandName == brandName);
        setMatchBrand(findBrand)
    }, [brands, brandName])
    // console.log(matchBrand)
    // const {image1, image2, image3} = matchBrand;

    // Brands sections  

    useEffect(() => {
        const brandCard = LoadedBrands?.filter(brand => brand?.brandName == brandName)
        setFindBrands(brandCard)
    }, [LoadedBrands, brandName])
    console.log(findBrands)

    return (
        <div className="mt-8 bg-base-100">
            <div className="carousel w-full  h-[400px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={matchBrand?.image1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img src={matchBrand?.image2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img src={matchBrand?.image3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full ">
                    <img src={matchBrand?.image1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center bg-base-100 mt-8">
                {
                    findBrands?.map(singleBrand => <SingleBrand key={singleBrand?.id} singleBrand={singleBrand}></SingleBrand>)
                }
            </div>
        </div>
    );
};

export default Brands;