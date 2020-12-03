/* eslint-disable max-len */
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
  const [buttonEnabled, setButtonsEnabled] = React.useState(['early!']);

  const mainRef = React.useRef();

  React.useEffect(() => {
    setDefaultTodos(todos);
  }, [todos]);

  React.useEffect(() => {
    setResultTodos(defaultTodos.filter((el) => el.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1));
    if (buttonEnabled.indexOf('completed') !== -1) {
      setResultTodos((prev) => prev.filter((el) => el.checked === true));
    } else if (buttonEnabled.indexOf('completed!') !== -1) {
      setResultTodos((prev) => prev.filter((el) => el.checked === false));
    } else if (buttonEnabled.indexOf('early') !== -1) {
      setResultTodos((prev) => prev.sort((a, b) => {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
      }));
    } else if (buttonEnabled.indexOf('early!') !== -1) {
      setResultTodos((prev) => prev.sort((a, b) => {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0;
      }));
    }
  }, [searchText, defaultTodos, buttonEnabled]);

  const handleClick = (e) => {
    if (buttonEnabled.indexOf(e.target.name) !== -1) {
      setButtonsEnabled((prev) => prev.filter((button) => button !== e.target.name));
    } else {
      setButtonsEnabled((prev) => prev.filter((button) => !button.startsWith(e.target.name.slice(0, -1))));
      setButtonsEnabled((prev) => [
        ...prev,
        e.target.name,
      ]);
    }
  };

  const buttonClassConstructor = (btnName) => {
    if (buttonEnabled.indexOf(btnName) !== -1) {
      return 'filter__button_enabled';
    }
    return 'filter__button';
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <section className="filter" ref={mainRef}>
        <input className="filter__input" name="filterName" placeholder="По ключевому слову" onChange={handleChange} />
        <button className={buttonClassConstructor('completed')} type="button" onClick={handleClick} name="completed">Выполненые</button>
        <button className={buttonClassConstructor('completed!')} type="button" onClick={handleClick} name="completed!">Не выполненые</button>
        <button className={buttonClassConstructor('early!')} type="button" onClick={handleClick} name="early!">Сначала ранние</button>
        <button className={buttonClassConstructor('early')} type="button" onClick={handleClick} name="early">Сначала поздние</button>
      </section>
      <Todo todos={resultTodos} />
    </>
  );
};

Filter.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Filter;
