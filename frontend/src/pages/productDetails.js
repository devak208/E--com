import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Link, useParams } from "react-router-dom";

export default function Productctproduct(){
    const [product,setproduct] = useState(null);
    const {id} =useParams();

    useEffect(() =>{
        fetch('http://localhost:8000/api/v1/products/'+id)
        .then(response =>response.json())
        .then(response =>setproduct(response.product))
    },[])
    return product && <>
        <Header/>
        <div className="r border border-slate-300 items-center p-3 w-[250px] ">
        <img width="200px"
            src={product.images[0].image}></img>
            <div>
                <h5>
                    <h1 to={"/product/"+product._id} className='text-orange-600'>{product.name}</h1>
                </h5>
            </div>
            <div>
                <p>${product.price}</p>
                <div>
                    <span className="text-green-600 px-3 text-2xl">+</span>
                    <span className="border border-slate-600 p-1">1</span>
                    <span className="text-red-600 px-3 text-4xl">-</span>
                </div>
                <div>{product.ratings}</div>
                <button ></button>
                <Link className="bg-orange-600 text-white p-1" >Add Cart</Link>
                <p>{product.description}</p>
                <p><b>status:</b> {product.stock>0 ? "In stock":"out of stock"} </p>
            </div>     
        </div>

     
        <Footer/>
    </>
}