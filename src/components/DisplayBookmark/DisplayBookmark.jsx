import React from 'react';
import './DisplayBookmark.css'

const DisplayBookmark = (props) => {
    const {title} = props.bookmark;
    return (
        <div className='display-bookmark'>
            {/* bookmark */}
            <div className="bookmark p-5 mt-5">
              <div className="bookmark-card bg-white rounded mt-2">
                <h1 className='text-3xl font-bold'>{title}</h1>
              </div>
            </div>
        </div>
    );
};

export default DisplayBookmark;