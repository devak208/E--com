import { Fragment, useEffect, useState } from "react";
import Product from "../components/products";
import Header from "../components/header";
import Footer from "../components/footer";
import { useSearchParams } from "react-router-dom";

export default function Home(){
    
    const [details,setdetails] =useState([]);
    const [searchparams,,setsearchparams] =useSearchParams()
    useEffect(() =>{
        fetch('http://localhost:8000/api/v1/products?'+searchparams)
        .then(response =>response.json())
        .then(response =>setdetails(response.products))
    },[searchparams])
    

    return <Fragment>
        

                <h1>Latest Products</h1>
                    <section>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 justify-items-center my-10 mx-20  ">{
                            details.map(detail =><Product details ={detail}/>)} 
                        </div>
                    </section>

        </Fragment>
}