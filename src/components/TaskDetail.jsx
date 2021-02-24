import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function (props) {
    const { closeModalTask, taskTitle, taskDescription, taskDueDate, deleteTask, editTask } = props;

    return (
        <div>
            <h2>{taskTitle}</h2>
            <h4>Description</h4>
            <h6>{taskDescription}</h6>
            <h4>Due date</h4>
            <h6>{taskDueDate}</h6>
            <h4>Attachments</h4>

            <button onClick={editTask} className="btn btn-primary">Edit</button>
            <button onClick={closeModalTask} className="btn btn-link">Cancel</button>
            <button onClick={deleteTask} className="btn btn-danger btn-sm">Delete</button>
        </div>
    )
}