import React from 'react';
import propTypes from 'prop-types';
import './todo.css';
import TodoItem from './TodoItem';
import PopupContext from '../../contexts/popup/PopupContext';

const Todo = (props) => {
  const { todos } = props;
  console.log(todos);

  const setPopupState = React.useContext(PopupContext);

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
};

export default Todo;
