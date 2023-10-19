import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import HotDeals from "../Pages/HotDeals";
import SummerSale from "../Pages/SummerSale";
import Testimonials from "../Pages/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <SummerSale></SummerSale>
            <HotDeals></HotDeals>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;