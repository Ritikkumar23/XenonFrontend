import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="navbar-start">
                    <Link to="/" className="text-2xl font-bold text-indigo-600">PropertyX</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6">
                    <Link to="/" className={`text-gray-700 hover:text-indigo-500 ${location.pathname === '/' ? 'border-b-2 border-indigo-600' : ''}`}>
                        Home
                    </Link>
                    <Link to="/listings" className={`text-gray-700 hover:text-indigo-500 ${location.pathname === '/listings' ? 'border-b-2 border-indigo-600' : ''}`}>
                        Listings
                    </Link>
                    <Link to="/about" className={`text-gray-700 hover:text-indigo-500 ${location.pathname === '/about' ? 'border-b-2 border-indigo-600' : ''}`}>
                        About
                    </Link>
                    <Link to="/contact" className={`text-gray-700 hover:text-indigo-500 ${location.pathname === '/contact' ? 'border-b-2 border-indigo-600' : ''}`}>
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden">
                    <button className="text-gray-700 focus:outline-none" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Authentication Buttons */}
                <div className="hidden lg:flex space-x-4">
                    {!localStorage.getItem('token') ? (
                        <>
                            <Link to="/login" className="btn btn-outline btn-indigo-500 rounded-md">
                                Login
                            </Link>
                            <Link to="/signup" className="btn btn-outline btn-indigo-500 rounded-md ">
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <button className="btn btn-indigo-500 rounded-md text-white" onClick={handleLogout}>
                            Logout
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className="lg:hidden">
                <ul className="menu p-2 shadow bg-white rounded-box w-52">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/listings">Listings</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
