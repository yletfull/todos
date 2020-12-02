/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Todo from './components/todo/Todo';
import TodosContext from './contexts/todos/TodosContext';
import PopupContext from './contexts/popup/PopupContext';
import Popup from './components/popup/Popup';

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
        <PopupContext.Provider value={setPopupState}>
          <Todo
            todos={todos}
          />
          <Popup {...popupState} />
        </PopupContext.Provider>
      </TodosContext.Provider>
    </>
  );
}

export default App;
