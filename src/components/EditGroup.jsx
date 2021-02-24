import React from 'react'

export default function (props) {
    const {currentTitleGroup, deleteGroup, updateGroup, cancelClickGroup, onChangeGroup} = props;

    function handleSubmit(e) {
        e.preventDefault();

        updateGroup(currentTitleGroup);

        cancelClickGroup(e);
    }

    function handleDelete(e) {
        e.preventDefault();
        
        deleteGroup();
    }

    return (
        <form>
            <div className="form-group">
                <textarea onChange={onChangeGroup} value={currentTitleGroup} className="form-control" name="" id="" rows="5" />
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">Update</button>
            <button onClick={cancelClickGroup} className="btn btn-link">Cancel</button>
            <button onClick={handleDelete} className="btn btn-danger btn-sm">Delete</button>
        </form>
    )
}