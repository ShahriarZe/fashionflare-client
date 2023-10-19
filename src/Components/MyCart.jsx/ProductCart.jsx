/* eslint-disable react/prop-types */
const ProductCart = ({ product }) => {
    const { name, photo, type, brand, rating, price,description } = product
    return (
        <div className="pt-20 mb-8">
          <div className="card bg-base-100 shadow-xl mt-10">
                <figure><img className="h-56" src={photo} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">New</div>
                    </h2>
                    <p>{description}</p>
                    <p>Type: {type}</p>
                    <p>Rating:{rating}</p>
                    <p>Price:{price} $</p>
                    <div className="card-actions">
                        Brand:<div className="badge badge-outline font-extrabold text-xl">{brand}</div>
                    </div>
                    <div className="flex justify-center">
                        <button className="btn btn-outline">DELETE</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCart;



