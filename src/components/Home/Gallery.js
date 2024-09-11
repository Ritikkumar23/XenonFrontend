import React from 'react';

const Gallery = () => {
    return (
        <>
            {/* Gallery Title */}
            <h1 className="text-center mb-9 font-bold text-black text-3xl md:text-4xl lg:text-6xl">
                GALLERY
            </h1>
            <hr />

            {/* Gallery Section */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    {/* Gallery Description */}
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl lg:text-4xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                            Previous Patients
                        </h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                            Ultrasonic testing, or medical ultrasound, is a safe and non-invasive imaging method with real-time
                            capabilities. It's used for prenatal monitoring, visualizing soft tissues, and guiding medical procedures.
                            The portability of ultrasound machines allows bedside use, beneficial in critical care. It offers dynamic
                            imaging for functions like blood flow and is cost-effective. Doppler ultrasound reveals vascular insights,
                            and early detection of conditions like stones and tumors is possible.
                        </p>
                    </div>

                    {/* Image Grid */}
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        {/* First Column of Images */}
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img 
                                    alt="Dermatology Procedure 1" 
                                    className="w-full object-cover h-full object-center block"
                                    src="https://bestdermatologist.org/wp-content/uploads/2020/02/AdobeStock_289348605-1-scaled.jpeg" 
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img 
                                    alt="Dermatology Procedure 2" 
                                    className="w-full object-cover h-full object-center block"
                                    src="https://th.bing.com/th/id/OIP.IVNkPYt36xpoqukvxuI3jQHaE8?pid=ImgDet&rs=1" 
                                />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img 
                                    alt="Dermatology Procedure 3" 
                                    className="w-full h-full object-cover object-center block"
                                    src="https://th.bing.com/th/id/OIP.kzeS8p6fieZR4befhFtpDwHaE8?pid=ImgDet&rs=1" 
                                />
                            </div>
                        </div>

                        {/* Second Column of Images */}
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img 
                                    alt="Dermatology Clinic" 
                                    className="w-full h-full object-cover object-center block"
                                    src="https://bestinau.com.au/wp-content/uploads/2019/05/Best-Dermatologists-in-Perth.jpg" 
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img 
                                    alt="Clinic Services" 
                                    className="w-full object-cover h-full object-center block"
                                    src="https://marketigniter.blob.core.windows.net/content/images/dermatologist-hero.jpg" 
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img 
                                    alt="Dermatology Consultation" 
                                    className="w-full object-cover h-full object-center block"
                                    src="https://th.bing.com/th/id/OIP.yLVjBOAlKQtRhE4AhF7c6gHaFj?pid=ImgDet&rs=1" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
