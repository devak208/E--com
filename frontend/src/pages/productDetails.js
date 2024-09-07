import { useEffect, useState } from "react";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";

export default function Productctproduct({ cartitems, setcartitems }) {
    const [product, setproduct] = useState(null);
    const { id } = useParams();
    const [qty, setqty] = useState(1);
    const [toster, settoster] = useState(false);
    const [toast2, settoster2] = useState(false);

    // Increase quantity
    function increaseQty() {
        if (qty < product.stock) {
            setqty(qty + 1);
        }
    }

    // Decrease quantity
    function decreaseQty() {
        if (qty > 1) {
            setqty(qty - 1);
        }
    }

    // Add product to cart
    function addtocart() {
        if (product.stock === 0) return; // Prevent adding if out of stock

        const itemexist = cartitems.find((items) => items.product._id === product._id);
        if (!itemexist) {
            const newitems = { product, qty };
            setcartitems((state) => [...state, newitems]);
            settoster(true);
            setTimeout(() => {
                settoster(false);
            }, 3000);
        } else {
            settoster2(true);
            setTimeout(() => {
                settoster2(false);
            }, 3000);
        }
    }

    // Fetch product data and set initial quantity
    useEffect(() => {
        fetch(`http://192.168.94.156:8000/api/v1/products/${id}`)
            .then(response => response.json())
            .then(response => {
                setproduct(response.product);
                setqty(response.product.stock > 0 ? 1 : 0); // Set qty based on stock
            });
    }, [id]);

    return product && (
        <>
            {/* Toast Notifications */}
            {toster && (
                <div id="toast" className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 rounded shadow-lg">
                    Added to cart
                </div>
            )}
            {toast2 && (
                <div id="toast" className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-800 text-white py-2 px-4 rounded shadow-lg">
                    Already added
                </div>
            )}

            {/* Product Details */}
            <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 pt-40">
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row w-full max-w-4xl ">
                    {/* Product Image */}
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <img
                            src={product.images[0].image}
                            alt={product.name}
                            className="object-cover lg:w-full h-64 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="flex-grow">
                        {/* Product Name */}
                        <h1 className="text-orange-600 text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>

                        {/* Price */}
                        <div className="text-lg font-bold text-gray-800 mb-2">
                            Price: ${product.price}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2 mb-4">
                            <button
                                className="bg-red-600 text-white px-3 py-1 text-xl border rounded"
                                onClick={decreaseQty}
                                disabled={qty <= 1 || product.stock === 0}
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={product.stock === 0 ? 0 : qty}
                                readOnly
                                className="w-16 text-center border border-slate-600 p-1"
                            />
                            <button
                                className="bg-green-600 text-white px-3 py-1 text-xl border rounded"
                                onClick={increaseQty}
                                disabled={qty >= product.stock || product.stock === 0}
                            >
                                +
                            </button>
                        </div>

                        {/* Total Price */}
                        <div className="text-lg font-bold text-gray-800 mb-4">
                            Total: ${(product.price * qty).toFixed(2)}
                        </div>

                        {/* Ratings */}
                        <div className="mb-4">Rating: {product.ratings} ⭐</div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={addtocart}
                            disabled={product.stock === 0}
                            className={`w-full py-2 mb-4 text-white ${product.stock === 0 ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'}`}
                        >
                            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                        </button>

                        {/* Product Description */}
                        <p className="text-gray-600 mb-4">{product.description}</p>

                        {/* Stock Status */}
                        <p className="font-semibold">
                            <b>Status:</b> {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
