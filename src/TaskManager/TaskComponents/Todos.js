import { appData } from "../../Data/AppData";
import TaskItem from "../../TaskManager/TaskItem";
import "../../Sass/styles.css";

const Todo = () => {
  return appData
    .filter((task) => task.taskStatus === "todo")
    .map((task) => {
      return <TaskItem title={task.title} />;
    });
};

export default Todo;
