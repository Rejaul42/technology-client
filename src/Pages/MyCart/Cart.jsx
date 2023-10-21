import PropTypes from 'prop-types'; // ES6

const Cart = ({product}) => {
    const { name, brandName, type, rating, price, description, photo} = product;
    return (
        <div className=" mt-8">
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='h-80 w-96' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div>
                            <h2 className="card-title">
                                {name}
                                <div className="badge badge-secondary"> {rating} <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" /></div>
                            </h2>
                        </div>
                        <div>
                            <p className='font-semibold text-red-600 py-2 px-3 rounded-lg bg-pink-200'>Price: ${price}</p>
                        </div>
                    </div>
                    <div className='text-xl font-semibold text-green-600'>
                        <p>Type: {type}</p>
                        <p>Brand: {brandName}</p>
                        
                    </div>
                    <p><span className="font-semibold">Description:</span> {description}</p>
                    <div className="card-actions justify-end text-white">
                        <div className="badge btn bg-green-600 badge-outline">
                            <button >Add Cart</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    product: PropTypes.object,
}
export default Cart;