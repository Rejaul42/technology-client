import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContest } from "../../Provider/AuthProvider";
import Cart from "./Cart";

const MyCart = () => {
    const loadedData = useLoaderData()
    const {user} = useContext(authContest);
    const email = user.email;
    const [userData, setUserData] = useState()

    useEffect(()=>{
        const userCart = loadedData.filter(item => item.email == email)
        setUserData(userCart)
        },[loadedData, email])
        console.log(userData)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-base-100">
           {
            userData.map(product => <Cart key={product._id} product={product}></Cart>)
           }
        </div>
    );
};

export default MyCart;