import React from "react";
import Date from "./Date";
import AddTask from "./AddTaskInput";
import SearchInput from "./SearchInput";
import Tasks from "./Tasks";
import "../Sass/styles.css";

const TaskManager = () => {
  return (
    <div className="container">
      <Date />
      <AddTask />
      <SearchInput />
      <Tasks />
    </div>
  );
};

export default TaskManager;
