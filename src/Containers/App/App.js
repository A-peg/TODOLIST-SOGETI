import React, {useState} from "react";
import classes from './App.module.css'
import Task from "../../Components/Tasks/Task";


function App() {
  // States

  const [tasks, setTasks] = useState ([]);
  const [input, setInput] = useState ('');

  // Fonctions

  const removeClickedHandler = index => {
    const newTasks = [ ...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  const doneClickedHandler = index => {
    const newTasks = [...tasks];
    newTasks[index].done = !tasks[index].done;
    setTasks(newTasks);
  }

  const submittedTaskHandler = event => {
    event.preventDefault();

    const newTask = {
      content: input,
      done: false
    }
    setTasks ([...tasks,newTask]);
    setInput('');
  }

    const changedFormHandler = event => {
      setInput(event.target.value);
    }

    // Variable

    let tasksDisplayed = tasks.map ((tasks, index) => (
      <Task
        done= {tasks.done}
        content= {tasks.content}
        key= {index}
        removeClicked= {(() => removeClickedHandler(index))}
        doneClicked= {() => doneClickedHandler(index)}

      
      />
    ));

  return (
    <div className= {classes.App}>
      <header>
        <span> TO-DO-lIST SOGETI</span>
      </header>

      <div className= {classes.add}>
        <form onSubmit={(e) => submittedTaskHandler(e)}>
          <input
            type="text"
            value= {input}
            onChange={(e) => changedFormHandler(e)}
            placeholder= "Que souhaitez-vous ajouter ? "/>
            <button type= "submit">
              Ajouter 
            </button>


        </form>


      </div>
        {tasksDisplayed}
      </div>
  )
}

export default App;
