// import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import JoinUs from "../JoinUs/JoinUs";
import PopularBrands from "../PopularBrands/PopularBrands";

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <PopularBrands></PopularBrands>
            <JoinUs></JoinUs>
        </div>
    );
};

export default Home;