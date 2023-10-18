/* eslint-disable react/prop-types */
const BrandCard = ({ brand }) => {
    const {name,image}= brand;
    return (
        <div>
            <div className="card glass bg-gradient-to-r from-blue-900">
                <figure><img className="h-72 w-full" src={image} /></figure>
                <div className="card-body">
                    <h2 className="text-blue-950 text-center font-extrabold text-3xl">{name}</h2>
                   
                </div>
            </div>
        </div>
    );
};

export default BrandCard;