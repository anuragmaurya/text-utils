import React, { useState } from 'react';

export default function (props) {
  const [text, setText] = useState('Enter text here');
  const HandleUpClick = () => {
    // console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const HandleLowClick = () => {
    // console.log('Uppercase was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const OnCleartext = () => {
    setText('');
  };
  const HandleOnChange = event => {
    // console.log('On change event');
    setText(event.target.value);
  };
  const HandleCopyText = () => {
    let text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const Handlespacearea = () => {
    let Newtext = text.split(/[  ]+/);
    setText(Newtext.join(' '));
  };
  const HandleallSpace = () => {
    let Newtext = text.split(/[  ]+/);
    setText(Newtext.join(''));
  };
  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control' 
            id='exampleFormControlTextarea1'
            value={text}
            onChange={HandleOnChange}
            rows='8'
            style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode ==='dark' ? 'white' : 'black'}}  
          



          ></textarea>
        </div>
        <button className='btn btn-primary' onClick={HandleUpClick}>
          Click to Uppercase
        </button>
        <button className='btn btn-primary mx-3 ' onClick={HandleLowClick}>
          Click to Lowercase
        </button>
        <button className='btn btn-primary mx-3 ' onClick={OnCleartext}>
          Clear Text
        </button>
        <button className='btn btn-primary mx-3 ' onClick={HandleCopyText}>
          Copy Text
        </button>
        <button className='btn btn-primary mx-3 ' onClick={Handlespacearea}>
          Remove Spaces
        </button>
        <button className='btn btn-primary mx-3 ' onClick={HandleallSpace}>
          Remove All Spaces
        </button>
      </div>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <p>
          text summary word are {text.split(' ').length}, and characters are{' '}
          {text.length}
        </p>
        <p> time will take to read {0.08 * text.split(' ').length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
