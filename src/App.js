//import logo from './logo.svg';

import { useState } from "react";

import Todo from './Component/Todo';
import Todolists from './Component/Todolists';
import './App.css';
function App() {
  const [list, setList] = useState([]);
 
  let add = (uInput) => {

    if (uInput !== '') {
      setList([...list, uInput]);

    }

    else {
      alert("Type Something");
    }
    
  }
  const deleteitemli = (key) => {
    let newlisttodo = [...list];
    newlisttodo.splice(key, 1)
    setList(newlisttodo)
    alert("Item Deleted");
  }
  // const edititem=(key)=>{

  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <input type="text" className="todo-list-add-input" value={newTask} onChange={(event) => setNewTask(event.target.value)} /> */}

        {/* <Todo /> */}
        <Todo add={add} />

        <hr></hr>
        {list.map((listitem, i) => {
          return (
            <Todolists key={i} index={i} item={listitem} deleteitem={deleteitemli} />
          )
        })}

      </header>
    </div>
  );
}

export default App;
// import { useState } from "react";
// import { useEffect } from "react";


// function App() {
//   const [count,setCount]=useState(200);
//   const [data,setData]=useState(100);
  // useEffect(() => { 
  //   console.log("This code will execute when the component is mounted");
   
  //  },[count]);
  //  useEffect(() => { 
  //   console.log(" code ");
  
  //  },[data]);

//   useEffect(() => { return () => { console.log("Behavior right before the component is removed from the DOM."); } }, []);


//   return (
// <>
//  <h1> Hello World! </h1>; 
//  <h1>count {count}</h1>
//  <h1>data {data}</h1>
// <button onClick={()=>setCount(count+1)}>click {count}</button>
// <button onClick={()=>setData(data+1)}>click data{data}</button>
// </>
//   );
// }

// export default App;