//import logo from './logo.svg';

import { useState } from "react";
// import Edit from './Component/edit';
import Todo from './Component/Todo';
import Todolists from './Component/Todolists';
import './App.css';
function App() {
  const [list, setList] = useState([]);
  // const [editingTask, setEditingTask] = useState(null);       
  // const [editingTaskText, setEditingTaskText] = useState('');
  // const startEditingTask = (index) => {
  //   setEditingTask(index);
  //   setEditingTaskText(tasks[index].task);
  // };
  let add = (uInput) => {

    if (uInput !== '') {
      setList([...list, uInput]);

    }

    else {
      alert("Type Something");
    }
    // alert("Enter Something");
    //     <div claconst [editingTask, setEditingTask] = useState(null);
    // const [editingTaskText, setEditingTaskText] = useState('');ssName="alert alert-primary" role="alert">
    //   //   A simple primary alert—check it out!
    //   // </div>
    // }
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



