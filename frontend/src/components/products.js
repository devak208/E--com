import { Link } from 'react-router-dom';

export default function Product({ details }) {
    return (
        <div className="relative border border-slate-300 rounded-lg items-center p-4 w-[250px] flex flex-col space-y-4 bg-white shadow-lg">
            {/* Image */}
            <img className="w-40 h-40 object-cover mb-2" src={details.images[0].image} alt={details.name} />

            {/* Product Name */}
            <h5 className="text-lg font-semibold text-center break-words">
                <Link to={"/product/" + details._id} className="text-orange-600 hover:text-orange-700 text-sm block">
                    {details.name}
                </Link>
            </h5>

            {/* Price and Ratings */}
            <div className="flex flex-col items-center space-y-1">
                <p className="text-lg font-bold text-gray-800">${details.price}</p>
                <div className="text-sm text-gray-500">{details.ratings} ⭐</div>
            </div>

            {/* View Details Button */}
            <Link className="bg-orange-600 hover:bg-orange-700 text-white py-1 px-3 rounded text-sm mt-auto" to={"/product/" + details._id}>
                View details
            </Link>
        </div>
    );
}
