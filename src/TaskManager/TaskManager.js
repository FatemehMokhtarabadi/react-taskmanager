import React, { useState } from "react";
import Date from "./Date";
import AddTask from "./AddTaskInput";
import SearchInput from "./SearchInput";
import Tasks from "./Tasks";
// import { appData } from "../Data/AppData";
import { v4 as uuidv4 } from "uuid";
import "../Sass/styles.css";

const TaskManager = () => {
  const [tasksArray, setTasksArray] = useState([
    {
      title: "working on task manager",
      taskStatus: "inProgress",
      id: uuidv4(),
    },
    {
      title: "room cleaning",
      taskStatus: "todo",
      id: uuidv4(),
    },
    {
      title: "skin care",
      taskStatus: "done",
      id: uuidv4(),
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addNewTask = (event) => {
    event.preventDefault();
    const newTaskObject = {
      title: newTask,
      taskStatus: "todo",
      id: uuidv4(),
    };

    tasksArray.unshift(newTaskObject);
    setNewTask("");
  };

  /*
       
function searchHandler() {
  let input = document.getElementById("search");
  let filter = input.value;
  let parentNodes = document.getElementsByClassName("cards__card");
  console.log(parentNodes);
  for (let i = 0; i < parentNodes.length; i++) {
    if (parentNodes[i].innerText.toLowerCase().includes(filter)) {
      parentNodes[i].style.display = "flex";
    } else {
      parentNodes[i].style.display = "none";
    }
  }
}
  */

  const searchTask = (e) => {
    setSearchTerm(e.target.value);
    const searchReasult = tasksArray.filter((task) =>
      task.title.includes(searchTerm)
    );
    setTasksArray(searchReasult);
  };

  return (
    <div className="container">
      <Date />
      <div className="Inputs">
        <AddTask
          newTask={newTask}
          setNewTask={setNewTask}
          addNewTask={addNewTask}
        />
        <SearchInput
          tasksArray={tasksArray}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchTask={searchTask}
        />
      </div>
      <Tasks tasksArray={tasksArray} setTasksArray={setTasksArray} />
    </div>
  );
};

export default TaskManager;
