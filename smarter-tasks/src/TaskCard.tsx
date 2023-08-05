import './TaskCard.css'

type props = {
    title: string,
    dueDate: string,
    description: string
}


const TaskCard = (props: props) => {
    return (
        <div className="TaskItem shadow-md border border-slate-100">
            <h2 className="text-base font-bold my-1">{props.title} ({props.dueDate})</h2>
            <p className="text-sm text-slate-500">
                {props.description}
            </p>
        </div>
    );
}

export default TaskCard