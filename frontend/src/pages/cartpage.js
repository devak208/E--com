import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Product from "../components/products";

export default function Cartpage(){
    
    const [order,setorder] =useState(null);
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
    },[])
    return <>
        <Header/>
                    <section>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 justify-items-center my-10 mx-20  ">{
                            order.map(detail =><Product details ={order}/>)} 
                        </div>
                    </section>
        <Footer/>
    </>
}