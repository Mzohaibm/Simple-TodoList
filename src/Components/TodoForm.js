import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState("");
    function changer(e) {
        setTask(e.target.value);
    }
    const add = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask("")
    };
    return (
        <div>
            <form className="todo_form" onSubmit={add}>
                <input
                    type="text"
                    className="todo_input"
                    placeholder="What is your task Today"
                    onChange={changer}
                    value={task}
                />
                <button type="submit" className="todo_button">
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
