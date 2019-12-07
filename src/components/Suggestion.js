import React from 'react';
import Video from './Video';
import './suggestion.css'


const Suggestion = () => {


    return(
        <div className="suggestion">
            <h2>Video Suggestions</h2>
            <div className="videoSec">
                <Video vidLink = 'https://www.youtube.com/embed/c4begVbeRnc'/>
                <Video vidLink = 'https://www.youtube.com/embed/EoljJHF6woM'/>
                <Video vidLink = 'https://www.youtube.com/embed/hLLkZsyjn-M'/>
            </div>
        </div>
    );
};


export default Suggestion;