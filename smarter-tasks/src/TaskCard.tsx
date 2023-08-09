import "./TaskCard.css";

type props = {
  title: string;
  dueDate: string;
  description: string;
  keyItem: number;
  removeTask: (id: number) => void;
};

const TaskCard = (props: props) => {
  function remove(id: number) {
    props.removeTask(id);
  }

  return (
    <li className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
      <button
        className="deleteTaskButton"
        onClick={() => remove(props.keyItem)}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskCard;
