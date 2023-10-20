import { useLoaderData, useParams } from "react-router-dom";
import ProductSlider from "../Pages/ProductSlider";
import SingleBrand from "./SingleBrand";

const ViewProduct = () => {
    const { name } = useParams()
    const brands = useLoaderData()
    const brandItems = brands.filter(item => item.brand.toLowerCase() == name.toLocaleLowerCase())
    return (
        <div>
            <div className="p-10">
                <ProductSlider></ProductSlider>
            </div>

            <div className="mb-6">
                <h1 className="text-center text-5xl font-extrabold mt-16 mb-5 ">Products</h1>
                {brandItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-8">
                        {brandItems.map(brandProduct => (
                            <SingleBrand key={brandProduct._id} brandProduct={brandProduct}></SingleBrand>
                        ))}
                    </div>
                ) : (
                    <div>
                        <p className="text-center text-4xl text-red-400 mt-8 font-extrabold">OOPS!!</p>
                        <p className="text-center text-4xl text-red-400 mt-4 font-extrabold mb-10">No Products Available.</p>
                        
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewProduct;