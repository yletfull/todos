import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Todo from './components/todo/Todo';
// import Todos from './todos.json';
import TodosContext from './contexts/todos/TodosContext';
import Popup from './components/popup/Popup';
// JSON.parse(localStorage.getItem('todos'))
function App() {
  const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem('todos')));
  const [popupState, setPopupState] = React.useState({
    isOpen: false,
    popupName: 'addTodo',
  });

  localStorage.setItem('todos', JSON.stringify(todos));

  return (
    <>
      <Header logoText="Todos list" />
      <TodosContext.Provider value={setTodos}>
        <Todo
          todos={todos}
          setPopupState={setPopupState}
        />
        <Popup
          isOpen={popupState.isOpen}
          popupName={popupState.popupName}
          setPopupState={setPopupState}
          blockBackground
        />
      </TodosContext.Provider>
    </>
  );
}

export default App;
