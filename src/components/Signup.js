import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Signup = () => {
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;

        const response = await fetch(`https://xenonbackend-n0wf.onrender.com/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save jwt token
            localStorage.setItem('token', json.token);
            console.log('token received');
            navigate('/');
        } else {
            alert('invalid credentials');
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div class="h-screen md:flex">
                <div
                    class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-200 to-blue-900 i justify-around items-center hidden">
                    <div>
                        <h1 class="text-white font-bold text-4xl font-sans">GoHealthy</h1>
                        <p class="text-white mt-1">The best foundation you can wear is glowing, healthy skin.</p>
                        <button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
                    </div>
                    <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
                <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
                    <form onSubmit={handleSubmit} class="bg-white">
                        <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello !</h1>
                        <p class="text-sm font-normal text-gray-600 mb-7">Welcome </p>
                        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd" />
                            </svg>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Full name"
                                class="pl-2 outline-none border-none"
                                onChange={onChange}
                            />
                        </div>
                        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="pl-2 outline-none border-none"
                                onChange={onChange}
                            />
                        </div>
                        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd" />
                            </svg>

                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="pl-2 outline-none border-none"
                                placeholder="Password"
                                onChange={onChange}
                                minLength={5}
                            />
                        </div>
                        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd" />
                            </svg>

                            <input
                                type="password"
                                id="cpassword"
                                name="cpassword"
                                placeholder="Confirm password"
                                className="pl-2 outline-none border-none"
                                onChange={onChange}
                                minLength={5}
                            />
                        </div>
                        <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Signup</button>
                        <span class="text-sm ml-2"> Already have an Account? <Link to="/login" class=" hover:text-blue-500 cursor-pointer">Login</Link></span>
                    </form>
                </div>
            </div>
        </>

    );
};

export default Signup;
