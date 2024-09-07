import { Fragment, useEffect, useState } from "react";
import Product from "../components/products";
import Header from "../components/header";
import Footer from "../components/footer";
import { useSearchParams } from "react-router-dom";

export default function Home() {
    const [details, setdetails] = useState([]);
    const [searchparams, , setsearchparams] = useSearchParams();

    useEffect(() => {
        fetch('http://192.168.94.156:8000/api/v1/products?' + searchparams)
        .then(response => response.json())
        .then(response => setdetails(response.products));
    }, [searchparams]);

    return (
        <Fragment>

            {/* Add padding-top to ensure the product grid is not overlapping with the fixed header */}
            <div className="pt-32"> {/* Adjust this padding based on your header height */}
                <h1 className="text-center text-2xl font-bold my-5">Latest Products</h1>
                
                <section>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 justify-items-center my-10  py-10">
                        {details.map(detail => <Product key={detail._id} details={detail} />)}
                    </div>
                </section>
            </div>

            <Footer />
        </Fragment>
    );
}
