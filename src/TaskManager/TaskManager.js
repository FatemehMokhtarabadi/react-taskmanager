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
      taskStatus: "done",
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
    {
      title: "cooking",
      taskStatus: "inProgress",
      id: uuidv4(),
    },
    {
      title: "getting vaccinated",
      taskStatus: "inProgress",
      id: uuidv4(),
    },
    {
      title: "calling my friend",
      taskStatus: "inProgress",
      id: uuidv4(),
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addNewTask = (event) => {
    event.preventDefault();
    if (newTask === "") {
      return;
    }
    const newTaskObject = {
      title: newTask,
      taskStatus: "todo",
      id: uuidv4(),
    };

    tasksArray.unshift(newTaskObject);
    setNewTask("");
  };

  const searchTask = (e) => {
    setSearchTerm(e.target.value);
    const searchResult = tasksArray.filter((task) =>
      task.title.includes(searchTerm)
    );
    setTasksArray(searchResult);
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
