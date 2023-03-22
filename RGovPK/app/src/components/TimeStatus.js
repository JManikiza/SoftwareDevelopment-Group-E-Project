//Taken from week 5 page 29 (Introduction to ReactJS)

import React from 'react';

function TimeStatus(){

    const d = new Date();
    let msg = d.toUTCString();

    return(
        <p>
            {msg}
        </p>
    );
};

export default TimeStatus;
