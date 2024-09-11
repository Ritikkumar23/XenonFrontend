import React from 'react';

const Video = () => {
    return (
        <div>
            <div className="flex justify-center aspect-ratio-4/3 my-16" style={{ backgroundImage: "linear-gradient(40deg, #5600ff, transparent)" }}>
                {/* Replace this URL with the actual property video */}
                <iframe width="1519" height="566" src="https://www.youtube.com/embed/4jnzf1yj48M" title="DESIGNER RESIDENCE | CINEMATIC REAL ESTATE VIDEO IN 4K | SONY FX6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Video;
