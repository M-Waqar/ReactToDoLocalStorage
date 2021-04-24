import React, {useState} from 'react';

const initialstate = {
    id:"",
    item:"",
    completed: false
}
function TodoForm({addtodo}) {
    const [todo, settodo] = useState(initialstate);

    const handlechange = (e) => {
        settodo(prev => ({...todo,item:e.target.value}));
    }

    const formsubmit = (e) => {
        e.preventDefault();
        addtodo({...todo,id:Math.random()*100});
        settodo(prev => (initialstate));
    }
    return (
        <div className="container">
            <form onSubmit={formsubmit}>
                <div className="form-group">
                    <input 
                    type="text"
                    value={todo.item}
                    className="form-control"
                    onChange={handlechange}
                    />
                </div>
                <input type="submit" value="Add" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default TodoForm;
