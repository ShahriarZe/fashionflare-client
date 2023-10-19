import { useLoaderData } from "react-router-dom";
import ProductCart from "./ProductCart";

const MyCart = () => {

    const cartProduct = useLoaderData()


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-8 mt-10">
            {
                cartProduct.map(product => <ProductCart key={product._id}
                product={product}
                ></ProductCart>)
            }
        </div>
    );
};

export default MyCart;