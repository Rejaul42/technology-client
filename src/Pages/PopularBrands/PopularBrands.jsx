
import { useEffect, useState } from 'react';
import PopularBrand from './PopularBrand';

const PopularBrands = () => {
    const [brands, setBrands] = useState([])
    // const brands = useLoaderData()

    useEffect(() =>{
        fetch('brand.json')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setBrands(data)
        })
    },[])
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
            {
                brands.map(brand => <PopularBrand key={brand.id} brand={brand}></PopularBrand>)
            }
        </div>
    );
};


export default PopularBrands;