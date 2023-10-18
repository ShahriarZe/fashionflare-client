import loginBg from '../../assets/login.png'
import Marquee from "react-fast-marquee";
const AddProduct = () => {
    const bgStyle = {
        backgroundImage: `url(${loginBg})`,
    }

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const newProduct = {photo,name,brand,type,price,description,rating}
        console.log(newProduct);
    }
    return (

        <div className="p-20 lg:p-40  bg-cover bg-center min-h-screen" style={bgStyle}>
            <Marquee speed={100}>
                       !!!! PLEASE USE UPPERCASE FOR BRAND NAME & VALID PHOTO URL FROM IMAGE BB !!!!
                        </Marquee>
            <form onSubmit={handleAddProduct}>
                {/* Image Input */}
                <div className="mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Photo URL" name="photo" className="w-full input input-bordered  " />
                        </label>
                    </div>
                </div>
                {/* Name, Brand-Name */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Name" name="name" className="w-full input input-bordered  " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand" className="input input-bordered  w-full" />
                        </label>
                    </div>

                </div>
                {/* Type,Price */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Type" name="type" className="w-full input input-bordered  " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered  w-full" />
                        </label>
                    </div>
                </div>
                {/* Description, Rating */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Description" name="description" className="w-full input input-bordered  " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered  w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className=" font-bold btn btn-block bg-blue-950 text-white " />
            </form>
        </div>

    );
};

export default AddProduct;