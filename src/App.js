import React, {useEffect,useState} from 'react';
import Todoform from './components/Todoform';
import TOdolist from './components/Todolist';

const LOCAL_STORAGE_KEY = "react-todo-list";
function App() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    const storedtodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedtodos){
      settodos(storedtodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  }, [todos]);

  const addtodo = (todo) => {
    settodos([todo, ...todos]);
  }

  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h1 className="display-4 font-weight-bold">ToDo List</h1>
      </div>
      <Todoform addtodo={addtodo} />
      <TOdolist todos={todos} />
    </div>
  );
}

export default App;
