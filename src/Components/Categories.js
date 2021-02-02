import React from 'react';
import './Categories.css';



const categories = (props) => {
    return (
        <button id="categoryId" className="categoryBtn" onClick={props.click}>{props.name}</button>
    )
}


export default categories;
