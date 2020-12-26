import React from 'react';
import './backdrop.css';

const backdrop = (props) =>(
    props.show ? <div className="backdrop"></div> : null
);

export default backdrop;