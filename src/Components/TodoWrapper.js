import React, { useState } from "react";
import TodoForm from "./TodoForm";
import "./Todo.css";
import { v4 as ui } from "uuid";
import Todo from "./Todo";
ui();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: ui(), task: todo, completed: false, isEditing: false },
        ]);
        console.log(todos);
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };
    return (
        <div className="todo_wrap">
            <div className='inner_to'>
                <div className="todo_header"><TodoForm addTodo={addTodo} /></div>
                <div className="inner_todo">
                    {todos.map((todo, index) =>
                        todo.isEditing ? (
                            <TodoForm editTask={editTask} task={todo.task} id={todo.id} />
                        ) : (
                            <Todo
                                task={todo}
                                deleteTodo={deleteTodo}
                                key={index}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoWrapper;

