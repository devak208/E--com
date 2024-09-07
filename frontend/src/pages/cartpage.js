import { Fragment, useState } from "react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function Cartpage({ cartitems, setcartitems }) {
    const subtotal = cartitems.reduce((acc, item) => acc + item.product.price * item.qty, 0);
    const [complete, setComplete] = useState(false);

    function placeorderhandler() {
        fetch("http://192.168.94.156:8000/api/v1/order", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartitems)
        })
        .then(() => {
            setcartitems([]);
            setComplete(true);
        });
    }

    function removeFromCart(itemId) {
        const updatedCart = cartitems.filter(item => item.product._id !== itemId);
        setcartitems(updatedCart);
    }

    function increaseQty(items) {
        if (items.qty < items.product.stock) {
            const updatedCart = cartitems.map(cartItem =>
                cartItem.product._id === items.product._id
                    ? { ...cartItem, qty: cartItem.qty + 1 }
                    : cartItem
            );
            setcartitems(updatedCart);
        }
    }

    function decreaseQty(items) {
        if (items.qty > 1) {
            const updatedCart = cartitems.map(cartItem =>
                cartItem.product._id === items.product._id
                    ? { ...cartItem, qty: cartItem.qty - 1 }
                    : cartItem
            );
            setcartitems(updatedCart);
        }
    }

    return (
        <>
            <div className="container mx-auto pt-32">
                <h1 className="text-2xl font-bold mb-4">Your Cart: <b>{cartitems.length} item{cartitems.length !== 1 ? 's' : ''}</b></h1>
                
                {complete && (
                    <div className="text-green-600 font-bold mb-4">
                        Order placed successfully!
                    </div>
                )}
                
                {cartitems.length === 0 ? (
                    <div className="text-gray-600">Your cart is empty.</div>
                ) : (
                    <div className="border border-slate-300 bg-white p-4 rounded-lg shadow-md">
                        {cartitems.map((items) => (
                            <Fragment key={items.product._id}>
                                <div className="border border-slate-200 p-4 mb-4 rounded-lg shadow-sm">
                                    <div className="flex items-center mb-4">
                                        <img className="w-24 h-24 object-cover mr-4" src={items.product.images[0].image} alt={items.product.name} />
                                        <div className="flex-1">
                                            <h5 className="text-lg font-semibold mb-2">
                                                <Link to={"/product/" + items.product._id} className='text-orange-600 hover:text-orange-700'>
                                                    {items.product.name}
                                                </Link>
                                            </h5>
                                            <p className="text-gray-800 mb-1">Price: ${items.product.price}</p>
                                            <p className="text-gray-600 mb-2">Ratings: {items.product.ratings} ⭐</p>
                                            <div className="flex items-center mb-2">
                                                <button className="bg-green-600 text-white px-3 py-1 rounded-md mr-2" onClick={() => increaseQty(items)}>+</button>
                                                <input type="text" value={items.qty} className="border border-slate-600 p-1 w-12 text-center" readOnly />
                                                <button className="bg-red-600 text-white px-3 py-1 rounded-md ml-2" onClick={() => decreaseQty(items)}>-</button>
                                            </div>
                                            <button className="bg-red-600 text-white py-1 px-3 rounded-md" onClick={() => removeFromCart(items.product._id)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                        <div className="mt-4">
                            <p className="text-lg font-bold mb-2"><b>Billing</b></p>
                            <p className="mb-1">Subtotal: {cartitems.length} unit{cartitems.length !== 1 ? 's' : ''}</p>
                            <p className="mb-4">Estimated Total: ${subtotal.toFixed(2)}</p>
                            <button className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700" onClick={placeorderhandler}>
                                Place Order
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
