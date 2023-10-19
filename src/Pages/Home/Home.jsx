import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import PopularBrands from "../PopularBrands/PopularBrands";

const Home = () => {
    const brands = useLoaderData()
    console.log(brands)
    return (
        <div>
            <Banner></Banner>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
                {
                    brands.map(brand => <PopularBrands key={brand.id} brand={brand}></PopularBrands>)
                }
            </div>
        </div>
    );
};

export default Home;