import React from 'react'

const Card = (props) => {
    return (
        <>
            <h1 className="text-4xl my-3 font-serif text-center">{props.title}</h1>
            <div className="card card-side bg-base-100 shadow-2xl max-w-6xl mx-auto flex flex-col">
                <img class="  mx-auto sm:max-w-xl py-5" src={props.imgUrl} alt="Album" />
                <div className="card-body  text-justify">
                    <p>{props.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
