import React from 'react';


const Video = (props) => {

    return(
        <div className="video">
            <iframe width="420" height="315"
                src={props.vidLink}>
            </iframe>
        </div>
    );
};


export default Video;