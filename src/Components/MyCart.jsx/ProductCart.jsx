import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ProductCart = ({ product,remove,setRemove }) => {
  const { _id, name, photo, type, brand, rating, price, description } = product

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Product has been deleted.',
                'success'
              )
              const remaningProduct = remove.filter(item=> item._id !== _id)
              setRemove(remaningProduct)
            }
          })
      }
    })
  }

  return (
    <div className="pt-20 mb-8">
      <div className="card bg-base-100 shadow-xl mt-10 border">
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
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline">DELETE</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductCart;



// Swal.fire(
//     'Deleted!',
//     'Your file has been deleted.',
//     'success'
//   )