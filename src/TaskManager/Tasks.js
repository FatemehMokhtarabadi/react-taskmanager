import React from "react";
import All from "./TaskComponents/All";
import Todo from "./TaskComponents/Todos";
import InProgress from "./TaskComponents/InProgress";
import Done from "./TaskComponents/Done";
import Nav from "./Navigation/Nav";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";


const Tasks = ({ tasksArray, setTasksArray }) => {
  const startTask = (taskId) => {
    const clickedTask = tasksArray.find((task) => task.id === taskId);
    if (clickedTask.taskStatus === "todo") {
      clickedTask.taskStatus = "inProgress";
    } else {
      return;
    }
  };
  const completeTask = (itemId) => {
    const clickedTask = tasksArray.find((task) => task.id === itemId);
    if (
      clickedTask.taskStatus === "inProgress" ||
      clickedTask.taskStatus === "todo"
    ) {
      clickedTask.taskStatus = "done";
    } else {
      return;
    }
  };

  const deleteTask = (taskId) => {
    const newTasksArray = tasksArray.filter((task) => {
      return task.id !== taskId;
    });
    setTasksArray(newTasksArray);
  };

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <All
            tasksArray={tasksArray}
            startTask={startTask}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </Route>
        <Route exact path="/todo">
          <Todo
            tasksArray={tasksArray}
            startTask={startTask}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </Route>
        <Route exact path="/in-progress">
          <InProgress
            tasksArray={tasksArray}
            startTask={startTask}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </Route>
        <Route exact path="/done">
          <Done
            tasksArray={tasksArray}
            startTask={startTask}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Tasks;
