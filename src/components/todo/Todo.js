import React from 'react';
import propTypes from 'prop-types';
import './todo.css';
import TodoItem from './TodoItem';

const Todo = (props) => {
  const { todos, setPopupState } = props;
  const addTodoHandleClick = () => {
    setPopupState({
      isOpen: true,
      popupName: 'addTodo',
    });
  };

  return (
    <section className="todo">
      <div className="todo-list">
        {todos.length
          ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          : <p>Нет заметок</p>}
      </div>
      <button type="button" className="todo-list__button" onClick={addTodoHandleClick}>Добавить заметку</button>
    </section>
  );
};

Todo.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
  setPopupState: propTypes.func.isRequired,
};

export default Todo;
