import React from 'react'

const Gallery = () => {
    return (
        <>
            <h1 class="text-center mb-9 font-bold text-black text-3xl md:text-4xl lg:text-6xl">GALLERY</h1>
            <hr>
            </hr>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex w-full mb-20 flex-wrap">
                        <h1 class="sm:text-3xl lg:text-4xl  font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                            Previous Patients </h1>
                        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed  text-base">Ultrasonic testing, or medical
                            ultrasound, is a safe and non-invasive imaging method with real-time capabilities. It's used for
                            prenatal monitoring, visualizing soft tissues, and guiding medical procedures. The portability
                            of ultrasound machines allows bedside use, beneficial in critical care. It offers dynamic
                            imaging for functions like blood flow and is cost-effective. Doppler ultrasound reveals vascular
                            insights, and early detection of conditions like stones and tumors is possible. Its safety
                            extends to pediatric use. Consulting healthcare professionals remains essential for accurate
                            medical decisions.</p>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block"
                                    src="https://bestdermatologist.org/wp-content/uploads/2020/02/AdobeStock_289348605-1-scaled.jpeg" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block"
                                    src="https://th.bing.com/th/id/OIP.IVNkPYt36xpoqukvxuI3jQHaE8?pid=ImgDet&rs=1" />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block"
                                    src="https://th.bing.com/th/id/OIP.kzeS8p6fieZR4befhFtpDwHaE8?pid=ImgDet&rs=1" />
                                    
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block"
                                    src="https://bestinau.com.au/wp-content/uploads/2019/05/Best-Dermatologists-in-Perth.jpg" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block"
                                    src="https://marketigniter.blob.core.windows.net/content/images/dermatologist-hero.jpg" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block"
                                    src="https://th.bing.com/th/id/OIP.yLVjBOAlKQtRhE4AhF7c6gHaFj?pid=ImgDet&rs=1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery
