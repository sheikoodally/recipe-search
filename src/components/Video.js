import React from 'react';


const Video = (props) => {

    return(
        <div className="video">
            <iframe
                src={props.vidLink}>
            </iframe>
        </div>
    );
};


export default Video;