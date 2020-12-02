/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import propTypes from 'prop-types';
import './todo.css';
import TodoContext from '../../contexts/todos/TodosContext';
import PopupContext from '../../contexts/popup/PopupContext';

const TodoItem = (props) => {
  const { todo } = props;
  const date = typeof (todo.date) === 'string' ? new Date(todo.date) : todo.date;

  const todoTextRef = React.useRef();
  const todoDateRef = React.useRef();
  const todoEditRef = React.useRef();

  const setPopupState = React.useContext(PopupContext);
  const setTodos = React.useContext(TodoContext);

  const removeHandleClick = (e) => {
    e.stopPropagation();
    setTodos((todos) => todos.filter((t) => t.text !== todo.text));
  };

  const editHandleClick = (e) => {
    e.stopPropagation();
    setPopupState({
      isOpen: true,
      popupName: 'editTodo',
      todoText: todoTextRef.current.textContent,
      todoDate: todo.date,
    });
  };

  return (
    <label className="todo-list__item" htmlFor={todo.id}>
      <input type="checkbox" id={todo.id} className="todo-list__checkbox" />
      <span className="todo-list__description" ref={todoTextRef}>{todo.text}</span>
      <p className="todo-list__remove-btn" onClick={removeHandleClick}>Удалить заметку</p>
      <p className="todo-list__edit-btn" onClick={editHandleClick} ref={todoEditRef}>Редактировать заметку</p>
      <span className="todo-list__description_time" ref={todoDateRef}>{date.toLocaleString('ru', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
    </label>
  );
};

TodoItem.propTypes = {
  todo: propTypes.shape({
    date: propTypes.PropTypes.instanceOf(Date).isRequired,
    id: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
  }).isRequired,
};

export default TodoItem;
