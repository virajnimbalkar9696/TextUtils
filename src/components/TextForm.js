import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>
    {
        console.log("uppercase was click" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick = ()=>
    {
        console.log("Lowercase was click" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleExtraSpace = ()=>
    {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleclClick = ()=>
    {
        let newText ='';
        setText(newText);
    }

    const handlecopy = ()=>
    {
       var text=document.getElementById("mybox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to clipboard","success");
    }

    const handleOnChange = (event)=>
    {
        console.log("On Change");
        setText(event.target.value);
    }

    const[text,setText]=useState('');
  return (
    <>
    
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'white'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>

        </div>

        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>PREVIEW</h2>
            <p>{text}</p>
        </div>

    </>    
  )
}
