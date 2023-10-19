/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SingleBrand = ({ brandProduct }) => {
    const {_id, name, photo, type, brand, rating, price } = brandProduct
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-56" src={photo} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">New</div>
                    </h2>
                    <p>Type: {type}</p>
                    <p>Rating:{rating}</p>
                    <p>Price:{price} $</p>
                    <div className="card-actions">
                        Brand:<div className="badge badge-outline font-extrabold text-xl">{brand}</div>
                    </div>
                    <div className="flex justify-between">
                        <Link to={`/viewDetails/${_id}`}>
                            <button className="btn btn-outline">View Details</button>
                        </Link>
                        <button className="btn btn-outline">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBrand;