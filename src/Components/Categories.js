import React from 'react'



const categories = (props) => {
    return (
        <button onClick={props.click}>{props.name}</button>
    )
}
export default categories;
