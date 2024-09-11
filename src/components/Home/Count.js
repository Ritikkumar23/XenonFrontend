import React, { useState, useEffect } from 'react'
import ten from '../../assets/ten.png'
import happy from '../../assets/happy.png'
import accuracy from '../../assets/accuracy.png'
import success from '../../assets/success.png'

function useCounterAnimation(initialCount, targetCount, intervalTime) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        if (count < targetCount) {
            const interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, intervalTime);
            return () => clearInterval(interval);
        }
    }, [count, targetCount, intervalTime]);
    return count;
}

function Count() {
    const count = useCounterAnimation(0, 400, 1);
    const count1 = useCounterAnimation(0, 98, 10);
    const count2 = useCounterAnimation(0, 100, 10);
    const count3 = useCounterAnimation(0, 10, 100);
    
    
    return (
        <div>
            <section class="body-font" >
                <div class="container px-5 mb-8 mx-auto">
                    <div class="flex flex-col text-center w-full mb-4">
                        <h1 class="sm:text-6xl text-4xl font-bold title-font mb-4 ">Our Feats</h1>
                       
                    </div>
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="  px-4 py-6  place-content-center flex flex-col ">
                                <img src={happy} className="mx-5 "></img>
                                <h2 class="title-font font-bold text-3xl ">{count}+</h2>
                                <p class="leading-relaxed">Happy Customers</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="  px-4 py-6  place-content-center flex flex-col ">
                                <img src={accuracy} className="mx-5 "></img>
                                <h2 class="title-font font-bold text-3xl ">Upto {count1}%</h2>
                                <p class="leading-relaxed">Accurate</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="  px-4 py-6  place-content-center flex flex-col ">
                                <img src={success} className="mx-5 "></img>
                                <h2 class="title-font font-bold text-3xl "> {count2}+</h2>
                                <p class="leading-relaxed">Successfull Tests</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="  px-4 py-6  place-content-center flex flex-col ">
                                <img src={ten} className="mx-5 "></img>
                                <h2 class="title-font font-bold text-3xl "> Expert in {count3}+</h2>
                                <p class="leading-relaxed">skin diseases and condition </p>
                            </div>
                        </div>
                        
                                                
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Count;

