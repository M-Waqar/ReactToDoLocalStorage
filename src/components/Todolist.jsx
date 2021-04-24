import React from 'react';
import Todo from './Todo';

function Todolist({todos}) {
    return (
        <div className="container mt-3">
            {
                todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))
            }
        </div>
    )
}

export default Todolist;
