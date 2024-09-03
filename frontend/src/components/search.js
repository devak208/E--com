import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Search(){
    const [textvalue,settextvalue] =useState("");
    const navigate =useNavigate();

    const searchhandler =() =>{
        navigate('/search?keyword='+textvalue)

    }
    return<>
                <div>
                    <input 
                    type="text"
                    id="search_field"
                    className=""
                    placeholder="Enter the name...." onChange={(e) =>settextvalue(e.target.value)} onBlur={searchhandler}></input>
                    <div>
                        <button id="search_but" className="bg-orange-500 text-white" on onClick={searchhandler}>
                           search
                        </button>
                    </div>
                </div>
    </>
}