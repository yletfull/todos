/* eslint-disable no-unused-vars */
import React from 'react';
import './filter.css';
import propTypes from 'prop-types';

const Filter = (props) => {
  const { todos, setFilteredTodos } = props;

  const [defaultTodos, setDefaultTodos] = React.useState(todos);
  const [searchText, setSearchText] = React.useState('');

  const mainRef = React.useRef();

  React.useEffect(() => {
    setFilteredTodos(defaultTodos.filter((el) => el.text.indexOf(searchText) !== -1));
  }, [searchText, defaultTodos]);

  const handleClick = () => {
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  React.useEffect(() => {
    setDefaultTodos(todos);
  });

  return (
    <section className="filter" ref={mainRef}>
      <input className="filter__input" name="filterName" placeholder="По ключевому слову" onChange={handleChange} />
      <button className="filter__button" type="button" onClick={handleClick} name="completed">Выполненые</button>
      <button className="filter__button" type="button" onClick={handleClick} name="notCompleted">Не выполненые</button>
      <button className="filter__button" type="button" onClick={handleClick} name="early">Сначала новые</button>
      <button className="filter__button" type="button" onClick={handleClick} name="later">Сначала старые</button>
    </section>
  );
};

Filter.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
  setFilteredTodos: propTypes.func.isRequired,
};

export default Filter;
