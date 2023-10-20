import { useState } from "react";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const BrandCard = ({ brand }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardStyle = {
        border: '1px solid #000', 
        backgroundColor: 'transparent',  
        transition: 'transform 0.3s ease ,height 0.3s ease',
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)', 
        cursor: 'pointer',
    };
    const { name, image } = brand;
    return (
     <Link to={`/viewproduct/${name}`}>
        <div
            className="card"
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <figure>
                <img className="h-72 w-full " src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className=" text-center font-extrabold text-3xl">{name}</h2>
            </div>
        </div>
     </Link>
    );
};

export default BrandCard;
