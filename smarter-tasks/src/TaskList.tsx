import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  removeTask: (id: number) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      keyItem={idx}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      removeTask={props.removeTask}
    />
  ));
  return <>{list}</>;
};

export default TaskList;
