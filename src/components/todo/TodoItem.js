/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
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

  const checkHandle = (e) => {
    setTodos((prev) => {
      const ind = prev.findIndex((el) => el.text === todo.text);
      prev[ind].checked = e.target.checked;
      return prev;
    });
  };

  const removeHandleClick = (e) => {
    e.stopPropagation();
    if (confirm('Удалить задачу?')) { setTodos((todos) => todos.filter((t) => t.text !== todo.text)); }
  };

  const editHandleClick = (e) => {
    e.stopPropagation();
    setPopupState({
      isOpen: true,
      popupName: 'editTodo',
      todoText: todoTextRef.current.textContent,
      todoDate: date,
    });
  };

  return (
    <div className="todo-list__item">
      <label className="todo-list__label" htmlFor={todo.id}>
        <input type="checkbox" id={todo.id} className="todo-list__checkbox" onChange={checkHandle} checked={todo.checked} />
        <span className="todo-list__description" ref={todoTextRef}>{todo.text}</span>
      </label>
      <p className="todo-list__remove-btn" onClick={removeHandleClick}>Удалить задачу</p>
      <p className="todo-list__edit-btn" onClick={editHandleClick} ref={todoEditRef}>Редактировать задачу</p>
      <span className="todo-list__description_time" ref={todoDateRef}>{date.toLocaleString('ru', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
    </div>
  );
};

TodoItem.propTypes = {
  todo: propTypes.shape({
    date: propTypes.oneOfType([
      propTypes.instanceOf(Date),
      propTypes.string,
    ]).isRequired,
    id: propTypes.number.isRequired,
    text: propTypes.string.isRequired,
    checked: propTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
