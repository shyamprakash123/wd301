/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './TaskCard.css'

const TaskCard = (props) => {
    console.log(props)
    return (
        <div className='TaskItem'>
            <h2 className="text-xl font-bold">{props.title}</h2>
            <p>{props.due ? "Due on: " + props.due : "Completed on: " + props.completed}</p>
            <p>Assignee: {props.assig}</p>
        </div>
    )
}

export default TaskCard