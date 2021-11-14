import { appData } from "../../Data/AppData";
import TaskItem from "../../TaskManager/TaskItem";
import "../../Sass/styles.css";

const InProgress = () => {
  return appData
    .filter((task) => task.taskStatus === "inProgress")
    .map((task) => {
      return <TaskItem title={task.title} />;
    });
};

export default InProgress;
