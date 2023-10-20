import Marquee from "react-fast-marquee";
import loginBg from '../../assets/login.png'
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const updatedProduct = useLoaderData()
    const {id} = useParams()

    const update = updatedProduct.find(value => value._id == id)
    const {_id,name, photo, type, brand, rating,description, price } = update

    const bgStyle = {
        backgroundImage: `url(${loginBg})`,
    }
    const handleUpdateProduct = e =>{
        e.preventDefault();
            const form = e.target;
            const photo = form.photo.value
            const name = form.name.value
            const brand = form.brand.value
            const type = form.type.value
            const price = form.price.value
            const description = form.description.value
            const rating = form.rating.value
            const editedProduct = {photo,name,brand,type,price,description,rating}
            console.log(editedProduct);

            fetch(`http://localhost:5000/update/${_id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(editedProduct)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                if(data.modifiedCount){
                    Swal.fire(
                        'Congratulations!',
                        'Product Updated',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="p-20 lg:p-40  bg-cover bg-center min-h-screen" style={bgStyle}>
            <Marquee speed={100}>
                       !!!! PLEASE USE UPPERCASE FOR BRAND NAME & VALID PHOTO URL FROM IMAGE BB !!!!
                        </Marquee>
            <form onSubmit={handleUpdateProduct}>
                {/* Image Input */}
                <div className="mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={photo} placeholder="Photo URL" name="photo"  className="w-full input input-bordered  " />
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
                            <input type="text" placeholder="Name" name="name" defaultValue={name} className="w-full input input-bordered  " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand" defaultValue={brand} className="input input-bordered  w-full" />
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
                            <input type="text" placeholder="Type" name="type" defaultValue={type} className="w-full input input-bordered  " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Price $</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={price} name="price" placeholder="Price $" className="input input-bordered  w-full" />
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
                            <input type="text" placeholder="Description" name="description" defaultValue={description} className="w-full input input-bordered  " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" defaultValue={rating} className="input input-bordered  w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Product" className=" font-bold btn btn-block bg-blue-950 text-white " />
            </form>
        </div>
    );
};

export default UpdateProduct;