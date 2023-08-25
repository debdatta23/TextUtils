import React,  {useState} from 'react'

export default function TextForm(props) {

    //function

    const handleUpClick =()=>{
        //console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleOnChange =(event)=>{
        //console.log("On Change")
        setText(event.target.value);
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    
  const [text, setText] = useState('Enter text here');
  //text = "new text"; ///Wrong way to change the state
  //setText("new text"); //Coorect way to change t he state
  
  return (
    <>
    <div className="container">
    <h1>{props.heading}  </h1>
  <div className="mb-3">

    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>

  </div>  

  <div className="conatiner my-3">
    <h2>Your Text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read</p>
  
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
  </div>
  </>
    
  )
}
