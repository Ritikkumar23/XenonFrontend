import React from 'react'

const Video = () => {
    return (
        <div>
            <div className=" flex justify-center  aspect-ratio-4/3  my-16 " style={{ backgroundImage: "linear-gradient(40deg, #5600ff, transparent)" }}>
                <iframe src="https://www.youtube.com/embed/HFKcaT6kyMM" className=" h-96 w-2/3 my-16 " allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}

export default Video
