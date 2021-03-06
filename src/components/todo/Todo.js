import React from 'react';
import propTypes from 'prop-types';
import './todo.css';
import TodoItem from './TodoItem';
import PopupContext from '../../contexts/popup/PopupContext';

const Todo = (props) => {
  const { todos } = props;

  const setPopupState = React.useContext(PopupContext);

  const addTodoHandleClick = () => {
    setPopupState({
      isOpen: true,
      popupName: 'addTodo',
    });
  };

  return (
    <section className="todo">
      <button type="button" className="todo-list__add-button" onClick={addTodoHandleClick}>Добавить задачу</button>
      <div className="todo-list">
        {todos.length
          ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          : <p className="todo-list__epmty-text">Нет задач</p>}
      </div>
    </section>
  );
};

Todo.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Todo;
