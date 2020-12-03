/* eslint-disable no-unused-vars */
import React from 'react';
import './filter.css';
import propTypes from 'prop-types';
import Todo from '../todo/Todo';

const Filter = (props) => {
  const { todos } = props;

  const [defaultTodos, setDefaultTodos] = React.useState(todos);
  const [resultTodos, setResultTodos] = React.useState(todos);
  const [searchText, setSearchText] = React.useState('');

  React.useEffect(() => {
    setDefaultTodos(todos);
  }, [todos]);

  React.useEffect(() => {
    setResultTodos(defaultTodos.filter((el) => el.text.indexOf(searchText) !== -1));
  }, [searchText, todos]);

  const handleClick = () => {
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <section className="filter">
        <input className="filter__input" name="filterName" placeholder="По ключевому слову" onChange={handleChange} />
        <button className="filter__button" type="button" onClick={handleClick} name="completed">Выполненые</button>
        <button className="filter__button" type="button" onClick={handleClick} name="notCompleted">Не выполненые</button>
        <button className="filter__button" type="button" onClick={handleClick} name="early">Сначала новые</button>
        <button className="filter__button" type="button" onClick={handleClick} name="later">Сначала старые</button>
      </section>
      <Todo todos={resultTodos} />
    </>
  );
};

Filter.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Filter;
