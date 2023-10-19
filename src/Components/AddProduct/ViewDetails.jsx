import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const details = useLoaderData()
    const { id } = useParams()

    const viewDetails = details.find(item => item._id == id)
    return (
        <div className="p-20 flex justify-center ">
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10">
                <figure><img src={viewDetails.photo} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{viewDetails.name}</h2>
                    <p>{viewDetails.description}</p>
                    <p>Type : {viewDetails.type}</p>
                    <p>Brand : {viewDetails.brand}</p>
                    <p>Rating : {viewDetails.rating}</p>
                    <p>Price: {viewDetails.price} $</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;