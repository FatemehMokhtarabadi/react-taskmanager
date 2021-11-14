import { appData } from "../../Data/AppData";
import TaskItem from "../../TaskManager/TaskItem";
import "../../Sass/styles.css";

const Done = () => {
  return appData
    .filter((task) => task.taskStatus === "done")
    .map((task) => {
      return <TaskItem title={task.title} />;
    });
};

export default Done;
