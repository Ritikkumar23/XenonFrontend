import React from 'react';

const About = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="about" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Our Property Marketplace</h1>
                    <p className="mb-8 leading-relaxed">
                        Welcome to our property marketplace! We are dedicated to helping you find your dream home, apartment, or villa with ease and transparency.
                        Our platform offers an extensive selection of properties from luxury estates to affordable homes. Whether you're buying, selling, or renting,
                        we are committed to providing a seamless experience for you.
                    </p>
                    <div className="flex justify-center">
                        <a href="/contact" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Contact Us
                        </a>
                        <a href="/listings" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Explore Listings
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-12 px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col text-center items-center">
                        <img src="https://images.unsplash.com/photo-1560185009-5bbf8d181297" alt="Mission" className="h-40 w-40 object-cover rounded-full mb-6" />
                        <h2 className="text-lg font-medium text-gray-900 mb-2">Our Mission</h2>
                        <p className="leading-relaxed">To connect buyers and sellers through a trusted, comprehensive, and innovative platform.</p>
                    </div>
                    <div className="flex flex-col text-center items-center">
                        <img src="https://images.unsplash.com/photo-1591622771043-0ef994a4e62b" alt="Vision" className="h-40 w-40 object-cover rounded-full mb-6" />
                        <h2 className="text-lg font-medium text-gray-900 mb-2">Our Vision</h2>
                        <p className="leading-relaxed">To revolutionize the real estate industry by leveraging cutting-edge technology and personalized service.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
