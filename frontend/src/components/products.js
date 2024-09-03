import { Link } from 'react-router-dom';

export default function Product({details}){
    
    return <>
    
    <div className="r border border-slate-300 items-center p-3 w-[250px] ">
        <img width="200px"
            src={details.images[0].image}></img>
            <div>
                <h5>
                    <Link to={"/product/"+details._id} className='text-orange-600'>{details.name}</Link>
                </h5>
            </div>
            <div>
                <p>${details.price}</p>
                <div>{details.ratings}</div>
                <button ></button>
                <Link className="bg-orange-600 text-white p-1"  to={"/product/"+details._id}>View details</Link>
            </div>     
    </div>
    </>
}