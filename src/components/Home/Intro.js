import React, { useState } from 'react'

const Intro = () => {
    return (
        <>
            <section class="text-gray-600 body-font ">
                <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">

                            <iframe class="w-full " height="720" src="https://www.youtube.com/embed/hhcIieKNXN0" title="Intro video at Ra By Dr Rashmi Shetty" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">

                            <iframe class="w-full" height="720" src="https://www.youtube.com/embed/47YzXAM1q1I" title="A tour to modern aesthetics" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoPlay></iframe>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>


                    </div>
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl my-7 font-medium text-gray-900">Some Well known
                            Supplements :
                        </h1>

                        <div class="flex justify-center">
                            <section class="text-gray-600 body-font">
                                <div class="container px-5  mx-auto">

                                    <div class="flex flex-wrap">
                                        <div
                                            class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-r-2  border-gray-200 border-opacity-60">
                                            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                                                Antioxidants:</h2>
                                            <p class="leading-relaxed text-base mb-4"> Various antioxidants, such as green tea extract, coenzyme Q10 (CoQ10), and resveratrol, help protect the skin from free radicals and reduce signs of aging.
                                            </p>
                                            <a class="text-blue-500 inline-flex items-center">Learn More
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div
                                            class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-r-2  border-gray-200 border-opacity-60">
                                            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                                                Vitamin E </h2>
                                            <p class="leading-relaxed text-base mb-4"> Vitamin E is another antioxidant that helps protect the skin from oxidative stress. It can help moisturize and soothe dry or irritated skin.</p>
                                            <a class="text-blue-500 inline-flex items-center">Learn More
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div
                                            class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-r-2  border-gray-200 border-opacity-60">
                                            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">B Vitamins
                                            </h2>
                                            <p class="leading-relaxed text-base mb-4">B vitamins, including B3 (niacin), B5 (pantothenic acid), and B6 (pyridoxine), are important for skin health. They help maintain skin barrier function and hydration.</p>
                                            <a class="text-blue-500 inline-flex items-center">Learn More
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div
                                            class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-r-2 border-gray-200 border-opacity-60">
                                            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                                                Vitamin K:</h2>
                                            <p class="leading-relaxed text-base mb-4"> Vitamin K plays a role in blood clotting and may help reduce the appearance of dark circles under the eyes.
                                            </p>
                                            <a class="text-blue-500 inline-flex items-center">Learn More
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Intro
