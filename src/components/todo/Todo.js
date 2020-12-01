import React from 'react';
import propTypes from 'prop-types';
import './todo.css';
import TodoItem from './TodoItem';

const Todo = (props) => {
  const { todos } = props;
  return (
    <section className="todo">
      <div className="todo-list">
        {todos.length
          ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />) : <p>Нет заметок</p>}
      </div>
    </section>
  );
};

Todo.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Todo;
