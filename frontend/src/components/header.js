import { Link } from "react-router-dom";
import Search from "./search";

export default function Header({cartitems}){
    return<>
    <nav className="bg-slate-900 ">
            <div >
                <Link to={'/'}>
                    <img width ="150px" src="/images/logo.png" alt=""/>
                </Link>
                
            </div>
            <div>
                <Search/>
                <div>
                    <Link id="cart" className="" to={"/product/Cart"}>Cart</Link>
                    <p className="bg-amber-600">{cartitems.length}</p>
                </div>

            </div>
        </nav>
    </>
    
}