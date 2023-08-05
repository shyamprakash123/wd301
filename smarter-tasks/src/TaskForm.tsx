import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}
interface TaskFormState {
    title: string;
    dueDate: string;
    description: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: "",
            dueDate: "",
            description: ""
        }
    }
    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
            title: this.state.title,
            dueDate: this.state.dueDate,
            description: this.state.description,
        };
        this.props.addTask(newTask);
        this.setState({ title: "", dueDate: "", description: "" });
    };
    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ title: event.target.value });
    };
    descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ description: event.target.value });
    };

    dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ dueDate: event.target.value });
    };

    render() {
        return (
            <form onSubmit={this.addTask}>
                <input type="text" id="todoTitle" value={this.state.title} onChange={this.titleChanged} required />
                <input type="text" id="todoDescription" value={this.state.description} onChange={this.descriptionChanged} />
                <input type="text" id="todoDueDate" value={this.state.dueDate} onChange={this.dueDateChanged} required />
                <button type="submit" id="addTaskButton">Add item</button>
            </form>
        )
    }
}
export default TaskForm;