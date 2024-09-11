import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;

        if (password !== password) {
            alert('Passwords do not match');
            return;
        }

        const response = await fetch(`http://localhost:3000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.token);
            navigate('/');
        } else {
            alert('Registration failed');
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-teal-500 to-green-600 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full bg-white p-12 rounded-3xl shadow-xl">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-extrabold text-gray-900">Create Your Account</h2>
                    <p className="mt-2 text-gray-600">Join us to access exclusive features and content.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <label htmlFor="name" className="sr-only">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            value={credentials.name}
                            onChange={onChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500"
                        />
                        <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>

                    <div className="relative">
                        <label htmlFor="email" className="sr-only">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            value={credentials.email}
                            onChange={onChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500"
                        />
                        <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={credentials.password}
                            onChange={onChange}
                            required
                            minLength={5}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500"
                        />
                        <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                            <i className="fas fa-lock"></i>
                        </span>
                    </div>

                    <div className="relative">
                        <label htmlFor="cpassword" className="sr-only">Confirm Password</label>
                        <input
                            id="cpassword"
                            name="cpassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={credentials.cpassword}
                            onChange={onChange}
                            required
                            minLength={5}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500"
                        />
                        <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                            <i className="fas fa-lock"></i>
                        </span>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-teal-600 font-medium hover:text-teal-500">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
