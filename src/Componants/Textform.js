import React, {useState} from 'react'

export default function Textform(props) {
const handleUpClick = ()=> {
  console.log("uppercase was clicked"+text);
  let newText=text.toUpperCase();
  setText(newText)
}
const handleLoClick = ()=> {
  console.log("lowercase was clicked"+text);
  let newText=text.toLowerCase();
  setText(newText)
}
const handleClear = ()=> {
  console.log("clear text"+text);
  let newText='';
  setText(newText)
}
const handleOnChange = (event)=>{
  console.log("on click");
  setText(event.target.value)
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
const handleCapitalizeWordClick = () => {
  let lowercase = text.toLowerCase();
  let words = lowercase.split(" ");
  let newWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  let newText = newWords.join(" ");
  setText(newText);
};
const handleExtraSpaces = () => {
  let updated_text = text.split(/[ ]+/);
  setText(updated_text.join(" "))
}

  const [text, setText] = useState("");
  return (
   <>
    <div className="container">
     <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10"></textarea>
     </div>
      <button className="btn btn-dark mx-2 my-1" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
      <button className="btn btn-dark mx-2 my-1" onClick={handleLoClick}>CONVERT TO LOWERCASE</button>
      <button className="btn btn-dark mx-2 my-1" onClick={handleClear}>CLEAR TEXT</button>
      <button className="btn btn-dark mx-2 my-1" onClick={speak}>SPEAK TEXT</button>
      <button className="btn btn-dark mx-2 my-1" onClick={handleCapitalizeWordClick}>CAPITALIZE FIRST LATTER</button>
      <button className="btn btn-dark mx-2 my-1" onClick={handleExtraSpaces}>REMOVE EXTRA SPACE</button>
    </div>
    <div className="container my-3">
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} charactor </p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    
    </>
  )
}
