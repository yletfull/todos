/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './App.css';
import Header from './components/header/Header';

import TodosContext from './contexts/todos/TodosContext';
import PopupContext from './contexts/popup/PopupContext';
import Popup from './components/popup/Popup';
import TodosList from './todos.json';
import Filter from './components/filter/Filter';
import Todo from './components/todo/Todo';

function App() {
  const [todos, setTodos] = React.useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : TodosList);
  const [filteredTodos, setFilteredTodos] = React.useState(todos);
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
          <Filter todos={todos} setFilteredTodos={setFilteredTodos} />
          <Todo todos={filteredTodos} />
          <Popup {...popupState} />
        </PopupContext.Provider>
      </TodosContext.Provider>
    </>
  );
}

export default App;
