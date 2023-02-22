import React from 'react';
import { useState } from "react";
function Todo(props) {
  const [uInput, setInput] = useState('');
  return (
    <div className="todo" >
      {/* <h1 >This is Todo List</h1> */}
      <div style={{ backgroundColor: 'black', padding: '5px' ,width:"100%" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>Todo-App</h1></div>
      <input type="text" className='input-box' placeholder='Enter Anything' style={{ textAlign: 'center', marginTop: "10px", width: "90%" }}
        value={uInput}
        onChange={e => {
          setInput(e.target.value)
        }}
      />
      <button style={{ backgroundColor: "#3399FF", borderColor: '#3399FF', color: "white", marginLeft: "10px" }} className='btn-primary' onClick={() => {
        props.add(uInput)
        setInput("")
      }}>Add Task</button>
      <div >{uInput}</div>
    </div>
  );
}
export default Todo;

