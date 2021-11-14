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

const Tasks = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <All />
        </Route>
        <Route exact path="/todo">
          <Todo />
        </Route>
        <Route exact path="/in-progress">
          <InProgress />
        </Route>
        <Route exact path="/done">
          <Done />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Tasks;
