import React from 'react';
import { useState } from "react";
function Todo(props) {
  const [uInput, setInput] = useState('');
  return (
    <div className="todo" >
      {/* <h1 >This is Todo List</h1> */}
      <div style={{ backgroundColor: '   #202b35', padding: '3px' ,width:"100%" }}>
        <h1 style={{ padding:"2px",margin:'15px', color: "white" }}>To Do List <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span></h1></div>
      <input type="text" className='input-box' placeholder='Enter Anything' style={{padding:'8px' , margin:"20px", width: "92%" }}
        value={uInput}
        onChange={e => {
          setInput(e.target.value)
        }}
      />
      <button style={{ padding:"7px",backgroundColor: "#054988", borderColor: '#3399FF', color: "white", marginLeft: "1px" ,width:'75px'}} className='btn-primary' onClick={() => {
        props.add(uInput)
        setInput("")
      }}>Add Task</button>
      <div >{uInput}</div>
    </div>
  );
}
export default Todo;

