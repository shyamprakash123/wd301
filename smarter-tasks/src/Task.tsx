/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./TaskCard.css";
import TaskCard from './TaskCard'

interface TaskProp {
    title: string;
    dueDate: string;
    description: string;
}

class Task extends React.Component<TaskProp> {
    render() {
        return (
            <TaskCard title={this.props.title} dueDate={this.props.dueDate} description={this.props.description} />
        );
    }
}

export default Task;