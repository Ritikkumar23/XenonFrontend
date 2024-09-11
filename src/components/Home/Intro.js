import React from 'react';

const Intro = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
                    {/* Carousel */}
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Luxury Apartment in NYC" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" alt="Modern House in LA" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be" alt="Beachside Villa in Miami" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="text-center lg:w-2/3 w-full mt-12">
                        <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
                            Explore Our Latest Properties
                        </h1>
                        <p className="my-5 text-gray-600">Find your dream property from our extensive list of homes and apartments.</p>
                    </div>

                    {/* Property Listings */}
                    <div className="flex justify-center">
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-10 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    {/* Property 1 */}
                                    <div className="p-4 md:w-1/3">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914" alt="Luxury Apartment in NYC" />
                                            <div className="p-6">
                                                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">Luxury Apartment in NYC</h2>
                                                <p className="leading-relaxed text-base mb-4">Price: $1,200,000 | 3 Beds | 2 Baths | 1500 sqft</p>
                                                <a className="text-indigo-500 inline-flex items-center">View Details
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Property 2 */}
                                    <div className="p-4 md:w-1/3">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://media.istockphoto.com/id/2139010213/photo/real-estate-agent-showing-a-young-couple-a-new-house.jpg?s=2048x2048&w=is&k=20&c=CRT5O87MBZSJdxz-FHDV6WqzrAhAQREjeH5hk7g_pII=" alt="Modern House in LA" />
                                            <div className="p-6">
                                                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">Modern House in LA</h2>
                                                <p className="leading-relaxed text-base mb-4">Price: $950,000 | 4 Beds | 3 Baths | 2000 sqft</p>
                                                <a className="text-indigo-500 inline-flex items-center">View Details
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Property 3 */}
                                    <div className="p-4 md:w-1/3">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be" alt="Beachside Villa in Miami" />
                                            <div className="p-6">
                                                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">Beachside Villa in Miami</h2>
                                                <p className="leading-relaxed text-base mb-4">Price: $2,500,000 | 5 Beds | 4 Baths | 3000 sqft</p>
                                                <a className="text-indigo-500 inline-flex items-center">View Details
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Intro;
