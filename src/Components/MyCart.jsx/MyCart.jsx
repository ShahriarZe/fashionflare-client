import { useLoaderData } from "react-router-dom";
import ProductCart from "./ProductCart";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useState } from "react";


const MyCart = () => {

    const {user}=useContext(AuthContext)
    const cartProduct = useLoaderData()
    const [remove,setRemove]=useState(cartProduct)
    
    const filtertedData = remove.filter(item => item.email === user.email)
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-8 mt-10 p-20">
            {
                filtertedData.map(product => <ProductCart key={product._id}
                product={product}
                remove={remove}
                setRemove={setRemove}
                ></ProductCart>)
            }
        </div>
    );
};

export default MyCart;