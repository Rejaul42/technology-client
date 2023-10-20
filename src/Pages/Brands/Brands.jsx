import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Brands = () => {
    // const brands = useLoaderData()
    const [brands, setBrands] = useState([])
    const { brandName } = useParams()
    const [matchBrand, setMatchBrand] = useState([])


    useEffect(() => {
        fetch('/image.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    console.log(brands)

    useEffect(() => {
        const findBrand = brands?.find(brand => brand.brandName == brandName);
        setMatchBrand(findBrand)
    }, [brands, brandName])
    console.log(matchBrand)
    // const {image1, image2, image3} = matchBrand;
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
        </div>
    );
};

export default Brands;