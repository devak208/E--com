import { Fragment, useState } from "react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function Cartpage({ cartitems, setcartitems }) {
    const subtotal = cartitems.reduce((acc, item) => acc + item.product.price * item.qty, 0);
    const [complete, setComplete] = useState(false); 

    function placeorderhandler() {
        fetch("http://localhost:8000/api/v1/order", {
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
            <p>Your Cart: <b>{cartitems.length} items</b></p>
            {complete && (
                <div className="text-green-600 font-bold">
                    Order placed successfully!
                </div>
            )}
            
            <div className="border border-slate-300 items-center p-3 w-[250px]">
                {cartitems.map((items) => (
                    <Fragment key={items.product._id}>
                        <div className="border border-s-teal-100 p-2 mb-4">
                            <img width="200px" src={items.product.images[0].image} alt={items.product.name} />
                            <div>
                                <h5>
                                    <Link to={"/product/" + items.product._id} className='text-orange-600'>
                                        {items.product.name}
                                    </Link>
                                </h5>
                            </div>
                            <div>
                                <p>Price: ${items.product.price}</p>
                                <p>Ratings: {items.product.ratings}</p>
                                <div>
                                    <button className="text-green-600 px-3 text-2xl" onClick={() => increaseQty(items)}>+</button>
                                    <input type="text" value={items.qty} className="border border-slate-600 p-1" readOnly />
                                    <button className="text-red-600 px-3 text-4xl" onClick={() => decreaseQty(items)}>-</button>
                                </div>
                                <button className="bg-red-600 text-white p-1 mt-2" onClick={() => removeFromCart(items.product._id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </Fragment>
                ))}
                <div className="mt-4">
                    <p><b>Billing</b></p>
                    <p>Subtotal: {cartitems.length} unit(s)</p>
                    <p>Estimated Total: ${subtotal.toFixed(2)}</p>
                </div>
                
    
                <button className="bg-orange-600 text-white p-2 mt-4" onClick={placeorderhandler}>
                    Place Order
                </button>
            </div>
            <Footer />
        </>
    );
}
