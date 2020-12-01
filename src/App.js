import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Todo from './components/todo/Todo';
import Todos from './todos.json';
import TodosContext from './contexts/todos/TodosContext';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = React.useState(Todos);

  return (
    <>
      <Header logoText="Todos list" />
      <TodosContext.Provider value={setTodos}>
        <Todo todos={todos} />
      </TodosContext.Provider>
    </>
  );
}

export default App;
