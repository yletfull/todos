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
  const [buttonEnabled, setButtonsEnabled] = React.useState([]);
  const [buttonDisabled, setButtonsDisabled] = React.useState([
    'completed',
    'notCompleted',
    'early',
    'later',
  ]);

  const mainRef = React.useRef();

  React.useEffect(() => {
    setDefaultTodos(todos);
  }, [todos]);

  React.useEffect(() => {
    setResultTodos(defaultTodos.filter((el) => el.text.indexOf(searchText) !== -1));
    // if(buttonEnabled.indexOf)
  }, [searchText, defaultTodos, buttonEnabled, buttonDisabled]);

  const handleClick = (e) => {
    if (buttonDisabled.indexOf(e.target.name) !== -1) {
      setButtonsDisabled((prev) => prev.filter((button) => button !== e.target.name));
      setButtonsEnabled((prev) => [
        ...prev,
        e.target.name,
      ]);
    } else {
      setButtonsEnabled((prev) => prev.filter((button) => button !== e.target.name));
      setButtonsDisabled((prev) => [
        ...prev,
        e.target.name,
      ]);
    }
  };

  const buttonClassConstructor = (btnName) => {
    if (buttonEnabled.indexOf(btnName) !== -1) {
      return 'filter__button_enabled';
    }
    return '.filter__button';
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <section className="filter" ref={mainRef}>
        <input className="filter__input" name="filterName" placeholder="По ключевому слову" onChange={handleChange} />
        <button className={buttonClassConstructor('completed')} type="button" onClick={handleClick} name="completed">Выполненые</button>
        <button className={buttonClassConstructor('notCompleted')} type="button" onClick={handleClick} name="notCompleted">Не выполненые</button>
        <button className={buttonClassConstructor('early')} type="button" onClick={handleClick} name="early">Сначала новые</button>
        <button className={buttonClassConstructor('later')} type="button" onClick={handleClick} name="later">Сначала старые</button>
      </section>
      <Todo todos={resultTodos} />
    </>
  );
};

Filter.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Filter;
