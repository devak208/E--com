import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
    const [textvalue, settextvalue] = useState("");
    const navigate = useNavigate();

    const searchhandler = () => {
        navigate('/search?keyword=' + textvalue);
    };

    return (
        <div className="flex w-full sm:w-auto">
            <input
                type="text"
                id="search_field"
                className="w-full sm:w-96 h-10 p-2 text-sm border border-gray-300 rounded-l"
                placeholder="Enter the name..."
                onChange={(e) => settextvalue(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        searchhandler();
                    }
                }}
            />
            <button id="search_but" onClick={searchhandler} className="bg-white border border-gray-300 text-zinc-500 rounded-r">
                <svg
                    className="h-99 w-12"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                >
                    <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                </svg>
            </button>
        </div>
    );
}
