import bannerBg from '../../assets/banner.webp'

const Banner = () => {
    const banner = {
        backgroundImage: `url(${bannerBg})`
    }
    return (
        <div className="hero min-h-screen relative z-0" style={banner}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="text-start">
                    <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Elevate Your Style With</h1>
                    <h1 className="mb-5 text-3xl lg:text-7xl font-bold text-blue-950">FashionFlare</h1>
                    <p className="mb-5 lg:text-xl">Discover timeless elegance and contemporary trends at FashionFlare, where fashion meets passion.</p>
                    <button className="btn bg-blue-950 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;