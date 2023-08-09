/* eslint-disable @typescript-eslint/no-unused-vars */
import "./TaskCard.css";
import TaskCard from "./TaskCard";

interface TaskProp {
  title: string;
  dueDate: string;
  description: string;
  keyItem: number;
  removeTask: (id: number) => void;
}

const Task = (props: TaskProp) => {
  return (
    <TaskCard
      title={props.title}
      dueDate={props.dueDate}
      description={props.description}
      removeTask={props.removeTask}
      keyItem={props.keyItem}
    />
  );
};

export default Task;
