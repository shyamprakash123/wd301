/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import './TaskCard.css'

type Props = {
    title : string,
    due : string,
    assign : string
}

interface TaskCard {
    (props :Props)
}
const TaskCard = (props) => {
    return (
        <div className='TaskItem'>
            <h2 className="text-xl font-bold">{props.title}</h2>
            <p>{props.dueDate ? "Due on: " + props.dueDate : "Completed on: " + props.completedAtDate }</p>
            <p>Assignee: {props.assigneeName}</p>
        </div>
    )
}

export default TaskCard