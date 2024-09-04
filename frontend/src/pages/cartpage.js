import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Product from "../components/products";

export default function Cartpage(){
    
/*     const [order,setorder] =useState(null);
    useEffect(() =>{
        const requestData = {userId: 1,  
        };
        fetch('http://localhost:8000/api/v1/order',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(requestData),
        })
        .then(response =>response.json())
        .then(response =>setorder(response.product))
    },[]) */
    return <>

        <div className="r border border-slate-300 items-center p-3 w-[250px] ">
        <img width="200px"
            src={"/images/products/1.jpg"}></img>
           {/* <div>
                <h5>
                    <h1 to={"/product/"+product._id} className='text-orange-600'>{product.name}</h1>
                </h5>
            </div>
            <div>
                <p>${product.price}</p>
                <div>{product.ratings}</div>
                <button ></button>
                <Link className="bg-orange-600 text-white p-1" >Add Cart</Link>
            </div>    */} 
        </div>
        <Footer/>
    </>
}