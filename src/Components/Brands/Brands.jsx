import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
import loginBg from '../../assets/login.png'

const Brands = () => {
    const bgStyle = {
        backgroundImage: `url(${loginBg})`,
    }
    const brands = useLoaderData()
    return (
        <div className="mt-12">
            <div className="items-center justify-center bg-cover bg-center min-h-screen " style={bgStyle}>
            <div>
                <h1 className="text-center text-6xl font-bold mb-6 text-blue-950">Our Brands</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 container mx-auto">
            {
                brands.map(brand => <BrandCard 
                    key={brand.id}
                    brand={brand}></BrandCard>)
            }
            </div>
            </div>
        </div>
    );
};

export default Brands;