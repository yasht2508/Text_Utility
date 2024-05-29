import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const upClicked = () => {
        console.log("Button is Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const loClicked = () => {
        console.log("Button is Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clear = () => {
        console.log("Button is Clicked");
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div className="container" style={{ color: props.mode === ('green' ||'dark') ? 'white' : 'black'}}>
            <div className="mb-3" >
                <h2 className="mt-3">{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"
                    style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
                <button className="btn btn-primary my-3 mx-1" onClick={upClicked} >Convert to Upper Case</button>
                <button className="btn btn-primary my-2 mx-1" onClick={loClicked} >Convert to Lower Case</button>
                <button className="btn btn-danger my-2 mx-1" onClick={clear} >Clear</button>
            </div>
            <div className="contaier">
                <h2>Text Summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>You will take {0.008 * text.split(' ').length} mintues to read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter the text to preview'}</p>
            </div>
        </div>
    )
}
