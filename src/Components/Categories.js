import React from 'react';
import './Categories.css';



const categories = (props) => {
    return (
        <button className="categoryBtn" onClick={props.click}>{props.name}</button>
    )
}


export default categories;
