import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
const Todo = ({ task ,deleteTodo}) => {
    return (
        <div className='todo'>
            <p>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}/>
            </div>
        </div>
    )
}

export default Todo