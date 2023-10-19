import { useParams } from "react-router-dom";

const Brands = () => {
    const { brandName } = useParams()
    console.log(brandName)
    return (
        <div>
            <p>Brands name: {brandName}</p>
        </div>
    );
};

export default Brands;