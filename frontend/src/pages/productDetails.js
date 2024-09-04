import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Link, useParams } from "react-router-dom";

export default function Productctproduct({ cartitems, setcartitems }) {
    const [product, setproduct] = useState(null);
    const { id } = useParams();
    const [qty, setqty] = useState(1);
    const [toster, settoster] = useState(false);
    var i = 1;


    function addtocart() {
        const itemexist = cartitems.find((items) => items.product._id == product._id);
        if (!itemexist) {
            const newitems = { product, qty };
            setcartitems((state) => [...state, newitems])
            settoster(true);
            setTimeout(() => {
                settoster(false);
            }, 3000);
        }
    }


    useEffect(() => {
        fetch('http://localhost:8000/api/v1/products/' + id)
            .then(response => response.json())
            .then(response => setproduct(response.product))
    }, [])
    return product && <>

        {toster && (<div id="toast" className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 rounded shadow-lg">
            added to cart
        </div>)}


        <div className="r border border-slate-300 items-center p-3 w-[250px] ">
            <img width="200px"
                src={product.images[0].image}></img>
            <div>
                <h5>
                    <h1 to={"/product/" + product._id} className='text-orange-600'>{product.name}</h1>
                </h5>
            </div>
            <div>
                <p>${product.price}</p>
                <div>
                    <button className="text-green-600 px-3 text-2xl " onClick={() => { i++ }}>+</button>
                    <input type="text" className="border border-slate-600 p-1"></input>
                    <button className="text-red-600 px-3 text-4xl" onClick={() => { i++ }}>-</button>

                </div>
                <div>{product.ratings}</div>
                <button ></button>
                <button className="bg-orange-600 text-white p-1" onClick={addtocart} >Add Cart</button>
                <p>{product.description}</p>
                <p><b>status:</b> {product.stock > 0 ? "In stock" : "out of stock"} </p>
            </div>
        </div>


        <Footer />
    </>
}