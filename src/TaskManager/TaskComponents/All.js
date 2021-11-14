import { appData } from "../../Data/AppData";
import TaskItem from "../../TaskManager/TaskItem";
import "../../Sass/styles.css";

const All = () => {
  return appData.map((task) => {
    return <TaskItem title={task.title} />;
  });
};

export default All;
