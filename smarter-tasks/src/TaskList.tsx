import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  removeTask: (id: number) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      item={{
        id: idx.toString(),
        title: task.title,
        dueDate: task.dueDate,
        description: task.description,
      }}
      removeTask={props.removeTask}
    />
  ));
  return <>{list}</>;
};

export default TaskList;
