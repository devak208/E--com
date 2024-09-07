import { Link } from "react-router-dom";
import Search from "./search";

export default function Header({ cartitems }) {
    return (
        <nav className="fixed top-0 w-full flex flex-col sm:flex-row justify-between items-center bg-slate-900 p-2 sm:p-4 space-y-2 sm:space-y-0 sm:space-x-4 z-50">
            {/* Logo */}
            <div className="flex justify-center sm:justify-start w-full sm:w-auto">
                <Link to="/">
                    <img className="w-24 sm:w-32" src="/images/logo.png" alt="Logo" />
                </Link>
            </div>

            {/* Search */}
            <div className="flex w-full sm:w-auto justify-center">
                <Search className="w-full sm:w-64" /> {/* Ensure the search input fits well */}
            </div>

            {/* Cart */}
            <div className="flex justify-center sm:justify-end items-center w-full sm:w-auto">
                <Link to="/product/Cart" className="relative flex items-center">
                    <svg
                        className="h-8 w-8 sm:h-10 sm:w-10 bg-white text-zinc-500 border border-gray-300 rounded p-1"
                        baseProfile="tiny"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M20.756 5.345A1.003 1.003 0 0020 5H6.181l-.195-1.164A1 1 0 005 3H2.75a1 1 0 100 2h1.403l1.86 11.164.045.124.054.151.12.179.095.112.193.13.112.065a.97.97 0 00.367.075H18a1 1 0 100-2H7.847l-.166-1H19a1 1 0 00.99-.858l1-7a1.002 1.002 0 00-.234-.797zM18.847 7l-.285 2H15V7h3.847zM14 7v2h-3V7h3zm0 3v2h-3v-2h3zm-4-3v2H7l-.148.03L6.514 7H10zm-2.986 3H10v2H7.347l-.333-2zM15 12v-2h3.418l-.285 2H15z" />
                        <path d="M10 19.5A1.5 1.5 0 0 1 8.5 21A1.5 1.5 0 0 1 7 19.5A1.5 1.5 0 0 1 10 19.5z" />
                        <path d="M19 19.5A1.5 1.5 0 0 1 17.5 21A1.5 1.5 0 0 1 16 19.5A1.5 1.5 0 0 1 19 19.5z" />
                    </svg>
                    <p className="absolute top-0 right-0 bg-amber-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                        {cartitems.length}
                    </p>
                </Link>
            </div>
        </nav>
    );
}
