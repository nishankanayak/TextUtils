import React,{useState} from 'react'

export default function Textform(props) {
  
    const handleUpClick=()=>{
        //console.log("Uppercase clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to upper case","success");
    }

    const handleLowClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert("converted to lower case","success");
  }
    
  const handleClrClick=()=>{
    let newtext=' '
    setText(newtext);
    props.showAlert("cleared text","success");
}

const handleOnCopy=()=>{
  let text=document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  props.showAlert("copied text","success");
}

const handleSpace=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("cleared extra spaces","success");
}

    const handleOnChange=(event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

  const [text,setText]=useState('Enter your text here');

  return (
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className='container'>
          <h3> {props.heading} </h3>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='dark'?'white':'black'}}></textarea>
          </div>
          <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button type="button" className="btn btn-primary mx-2 px-5" onClick={handleClrClick}>Reset text</button>
          <button type="button" className="btn btn-primary mx-2 px-5" onClick={handleOnCopy}>Copy text</button>
          <button type="button" className="btn btn-primary mx-2" onClick={handleSpace}>Remove extra Space</button>
        </div>

        <div className='container my-4'>
            <h4>Your text summary</h4>
            <p>{text.split(' ').length} Words, {text.length} Characters</p>
            <p>{0.008*text.split(' ').length} Minutes to read</p>
            <h4>Preview</h4>
            <p><i>{text.length>20?text:"Enter your text in the above box to preview it here"} </i></p>
        </div>
    </div>
  )
}
