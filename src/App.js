import "./App.css";
import React,{useState} from "react";
import ChildList from "./component/ChildList";


function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  
  return (
    <div className="App">
      <input onChange={inputHandler}></input>
      <ChildList input={inputText} />
    </div>
  );
}

export default App;
