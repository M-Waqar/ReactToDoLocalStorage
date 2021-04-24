import React from 'react';

function Todo({todo}) {
    return (
        <div className="alert alert-warning alert-dismissible">
            <input type="checkbox" className="mr-2" />
            {todo.item}
            <button type="button" className="close">
                <span>&times;</span>
            </button>
        </div>
    )
}

export default Todo;
