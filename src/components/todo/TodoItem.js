/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import propTypes from 'prop-types';
import './todo.css';
import TodoContext from '../../contexts/todos/TodosContext';

const TodoItem = (props) => {
  const { todo } = props;
  const setTodos = React.useContext(TodoContext);
  const removeHandleClick = () => {
    setTodos((todos) => todos.filter((t) => t.text !== todo.text));
  };

  return (
    <label className="todo-list__item" htmlFor={todo.id}>
      <input type="checkbox" id={todo.id} className="todo-list__checkbox" />
      <span className="todo-list__description">{todo.text}</span>
      <p className="todo-list__remove-btn" onClick={removeHandleClick}>Удалить заметку</p>
      <span className="todo-list__description_time">{todo.date}</span>
    </label>
  );
};

TodoItem.propTypes = {
  todo: propTypes.shape({
    date: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
  }).isRequired,
};

export default TodoItem;
