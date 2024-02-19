import React, { useState } from 'react';
import PropTypes from "prop-types";


export default function TextForm(props) {
    const [value, updateValue] = useState(" ")

    const buttonUpClick = () => {
        // let newValue = value.toUpperCase();
        updateValue(value.toUpperCase());
    }
    const buttonLowClick = () => {
        // let newValue = value.toLowerCase();
        updateValue(value.toLowerCase());
    }
    const buttonClear = () => {
        updateValue(" ");
    }
    const buttonCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const buttonExtraSpaces = () => {
        let newText = value.split(/[ ]+/);
        updateValue(newText.join(" "));
    }
    const handleOnchange = (event) => {
        updateValue(event.target.value);
    }
    return (
        <>
        <div className='container' style={{color : props.mode==='dark' ? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={value} onChange={handleOnchange} style={{backgroundColor : props.mode==='dark' ? 'gray' : 'white', color : props.mode==='dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-2" onClick={buttonUpClick}>Convert to Uppercse</button>
            <button className="btn btn-success mx-2" onClick={buttonLowClick}>Convert to Lowercse</button>
            <button className="btn btn-success mx-2" onClick={buttonClear}>Clear Text</button>
            <button className="btn btn-success mx-2" onClick={buttonCopy}>Copy Text</button>
            <button className="btn btn-success mx-2" onClick={buttonExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color : props.mode==='dark' ? 'white' : '#042743'}}>
            <h1>My Text Summery</h1>
            <p>{value.split(" ").length} Words and {value.length} Charecters</p>
            <p>{0.008 * value.split(" ").length} Minutes</p>
            <h2>Preview</h2>
            <p>{value.length > 0 ? value : "Enter the value"}</p>
        </div>
        </>
    )
}

TextForm.propsTypes = {
    heading: PropTypes.string.isRequired,
}

