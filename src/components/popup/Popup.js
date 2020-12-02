/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
import React, { useEffect, useState, useContext } from 'react';
import './popup.css';
import propTypes from 'prop-types';
import TodosContext from '../../contexts/todos/TodosContext';
import PopupContext from '../../contexts/popup/PopupContext';

const Popup = (props) => {
  const {
    isOpen, popupName = 'addTodo', blockBackground = true, todoText = '', todoDate = new Date(),
  } = props;

  const setPopupState = React.useContext(PopupContext);

  const [inputsState, setInputsState] = useState({
    todoText,
    todoDate,
  });

  const [inputErrorsState, setInputErrorsState] = useState({
    todoTextErrorShow: false,
    todoDateErrorShow: false,
  });
  const [countsInputsInfo, setCountsInputsInfo] = useState({
    requiredInputsCount: 2,
    successInputsCount: 0,
  });
  const [entryButtonState, setEntryButtonState] = useState(false);

  const setTodos = useContext(TodosContext);

  const validate = (e) => {
    const validationStateController = (...data) => {
      const [e, succesValid] = data;
      const { name } = e.target;
      const { value } = e.target;

      const setRequiredInputsCount = (requiredCount) => setCountsInputsInfo((prev) => ({
        ...prev,
        requiredInputsCount: Number(requiredCount),
      }));
      setRequiredInputsCount(e.target.dataset.inputscount);

      setInputsState((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (!succesValid) {
        setInputErrorsState((prev) => ({
          ...prev,
          [`${name}ErrorShow`]: true,
        }));
      } else {
        setInputErrorsState((prev) => ({
          ...prev,
          [`${name}ErrorShow`]: false,
        }));
      }
    };

    switch (e.target.name) {
      case 'todoText':
        if (e.target.value.length >= 5 && /[а-яёa-zA-Z1-9]/i.test(e.target.value)) { return validationStateController(e, true); }
        return validationStateController(e, false);
      case 'todoDate':
        validationStateController('todoDate', new Date(e.target.value));
        break;
      default:
    }
  };

  const backgroundHandler = () => {
    if (!blockBackground) {
      return {
        zIndex: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)',
      };
    }
  };

  const handleChange = (e) => {
    validate(e);
  };

  const closePopup = () => {
    setPopupState({ isOpen: false });
  };

  const addTodoHandler = () => {
    setTodos((prev) => [
      ...prev,
      { text: inputsState.todoText, date: inputsState.todoDate, id: prev.length ? prev[prev.length - 1].id + 1 : '1' },
    ]);
    setInputsState('');
    closePopup();
  };

  useEffect(() => {
    let succesCount = 0;
    Object.values(inputErrorsState).forEach((errorShow) => {
      if (!errorShow) return succesCount += 1;
    });
    setCountsInputsInfo((prev) => ({
      ...prev,
      successInputsCount: succesCount,
    }));
  }, [inputErrorsState]);

  useEffect(() => {
    const isValid = countsInputsInfo.successInputsCount === countsInputsInfo.requiredInputsCount;
    setEntryButtonState(isValid);
  }, [countsInputsInfo]);

  useEffect(() => {
    const timer = setTimeout(setEntryButtonState, 0, false);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <div className={isOpen ? 'popup' : 'popup_hidden'} style={backgroundHandler()} onClick={(e) => e.target.className === 'popup' && closePopup()}>

        {popupName === 'addTodo' && (
        <div className="popup__content">
          <h2 className="popup__title">Добавить заметку</h2>
          <div className="popup__close" onClick={() => closePopup()} />
          <form className="popup__form">
            <p className="popup__input-descriptor">Текст заметки</p>
            <input name="todoText" data-inputscount="2" className="input popup__input" type="text" placeholder="Введите текст заметки" onChange={handleChange} />
            {!inputErrorsState.todoTextErrorShow ? <p className="popup__input-error popup__input-error_hidden"> </p> : <p className="popup__input-error">Слишком короткий текст</p>}
            <p className="popup__input-descriptor">Дата</p>
            <input name="todoDate" data-inputscount="2" className="input popup__input" type="date" placeholder="Введите дату" onChange={handleChange} />
            {!inputErrorsState.todoDateErrorShow ? <p className="popup__input-error popup__input-error_hidden"> </p> : <p className="popup__input-error">Не выбрана дата</p>}
            <button type="button" className={entryButtonState ? 'button popup__button popup__button_entry' : 'button popup__button popup__button_disable popup__button_entry'} disabled={!entryButtonState.entryButton} onClick={addTodoHandler}>Добавить</button>
          </form>
        </div>
        )}

        {popupName === 'editTodo' && (
        <div className="popup__content">
          <h2 className="popup__title">Изменить заметку</h2>
          <div className="popup__close" onClick={() => closePopup()} />
          <form className="popup__form">
            <p className="popup__input-descriptor">Текст заметки</p>
            <input name="todoText" data-inputscount="2" className="input popup__input" type="text" placeholder="Введите текст заметки" onChange={handleChange} value={todoText} />
            {!inputErrorsState.todoTextError ? <p className="popup__input-error popup__input-error_hidden"> </p> : <p className="popup__input-error">Слишком короткий текст</p>}
            <p className="popup__input-descriptor">Дата</p>
            <input name="todoDate" data-inputscount="2" className="input popup__input" type="date" placeholder="Введите дату" onChange={handleChange} value={todoDate && todoDate} />
            {!inputErrorsState.todoDateError ? <p className="popup__input-error popup__input-error_hidden"> </p> : <p className="popup__input-error">Не выбрана дата</p>}
            <button type="button" className={entryButtonState.entryButton ? 'button popup__button popup__button_entry' : 'button popup__button popup__button_disable popup__button_entry'} disabled={!entryButtonState.entryButton} onClick={addTodoHandler}>Изменить</button>
          </form>
        </div>
        )}

      </div>
    </div>
  );
};

Popup.propTypes = {
  isOpen: propTypes.bool.isRequired,
  blockBackground: propTypes.bool,
  popupName: propTypes.string,
  todoText: propTypes.string,
  todoDate: propTypes.instanceOf(Date),
};
export default Popup;
