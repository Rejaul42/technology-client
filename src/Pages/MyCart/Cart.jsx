import PropTypes from 'prop-types'; // ES6
import Swal from 'sweetalert2';

const Cart = ({ product, userData, setUserData }) => {
    const { _id, name, brandName, type, rating, price, description, photo } = product;

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://technology-and-electronics-server-ruddy.vercel.app/cart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remeining = userData.filter(item => item._id !==_id)
                            setUserData(remeining)
                        }
                    })
            }
        })
    }
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
                            <button onClick={() => handleDelete(_id)}>Delete Product</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    product: PropTypes.object,
    userData: PropTypes.array,
    setUserData: PropTypes.func

}
export default Cart;