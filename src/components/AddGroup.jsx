import React from 'react'

export default function (props) {
    const {cancelAddGroup, createGroup} = props;

    function handleSubmit(e) {
        e.preventDefault();
        const input = e.target.querySelector('textarea');
        const text = input.value;
        if (!text) return
        
        input.value = '';
        
        const date = Date.now();

        const item = {
            id: date,
            title: text,
            date,
            tasks: []
        }

        createGroup(item);
        cancelAddGroup(e);
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <textarea className="form-control" name="" id="" rows="5" placeholder="New group"></textarea>
            </div>
            <button className="btn btn-primary">Add</button>
            <button onClick={cancelAddGroup} className="btn btn-link">Cancel</button>
        </form>
    )
}