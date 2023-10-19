import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';

const PopularBrands = ({ brand }) => {
    // console.log(brand)
    const { brandName, image } = brand;
    // console.log(brandName)
    return (
        <Link to={`/${brandName}`}>
            <div className="card bg-base-200 shadow-lg">
                <figure className="px-4 pt-4">
                    <img src={image} alt="Shoes" className="rounded-xl h-60 w-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brandName}</h2>
                </div>
            </div>
        </Link>
    );
};

PopularBrands.propTypes = {
    brand: PropTypes.object,
}

export default PopularBrands;