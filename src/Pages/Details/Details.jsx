import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContest } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
    const loadedProduct = useLoaderData()
    const {user} = useContext(authContest)
    console.log(user.email)
    const email = user.email;
    const {_id, name, brandName, type, rating, price, description, photo} = loadedProduct;

    const data ={
        _id, name, brandName, type, rating, price, description, photo, email
    }

    const handleAddCart=(data) =>{
        
        fetch("https://technology-and-electronics-server-k60o80dib-rejas-projects.vercel.app/cart", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Successfully added an item to the Cart!',
                        'You clicked the button!',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="max-w-6xl mt-8 mx-auto">
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
                            <button onClick={() => handleAddCart(data)}>Add Cart</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;