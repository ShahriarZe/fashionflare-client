import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";


const ViewDetails = () => {
    const details = useLoaderData()
    const { id } = useParams()

    const { user } = useContext(AuthContext)


    const viewDetails = details.find(item => item._id == id)
    viewDetails.email = user.email
    const userEmail = {
        email: user?.email,
        id: viewDetails._id,
        photo: viewDetails.photo,
        name: viewDetails.name,
        brand: viewDetails.brand,
        type: viewDetails.type,
        price: viewDetails.price,
        description: viewDetails.description,
        rating: viewDetails.rating
    }
    console.log(viewDetails);
    const saveToCart = () => {
        console.log(viewDetails);
        fetch('https://fashionflare-server-4zd8mcihk-shahriar-ahmmeds-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userEmail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulations...',
                        text: 'Added To Cart',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="pt-20 mt-6 mb-6">
            <div className="flex justify-center ">
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10 border">
                    <figure><img className="h-56" src={viewDetails.photo} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{viewDetails.name}</h2>
                        <p>{viewDetails.description}</p>
                        <p>Type : {viewDetails.type}</p>
                        <div className="card-actions">
                            Brand:<div className="badge badge-outline font-extrabold text-xl">{viewDetails.brand}</div>
                        </div>
                        <p>Rating : {viewDetails.rating}</p>
                        <p>Price: {viewDetails.price} $</p>
                        <div className="card-actions justify-end">
                            <button onClick={saveToCart} className="btn btn-outline">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;