/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useContext } from 'react';
import './popup.css';
import propTypes from 'prop-types';
import TodosContext from '../../contexts/todos/TodosContext';

const Popup = function (props) {
  const {
    isOpen, popupName = 'addTodo', setPopupState, blockBackground = true,
  } = props;

  const [successValidFields, setSuccessValidFields] = useState({
    todoText: false,
    todoDate: false,
  });
  const [inputErrorsState, setInputErrorsState] = useState({
    todoTextError: false,
    todoDateError: false,
  });
  const [countsInputsInfo, setCountsInputsInfo] = useState({
    requiredInputsCount: 2,
    successInputsCount: 0,
  });
  const [entryButtonState, setEntryButtonState] = useState({
    entryButton: false,
  });

  const setTodos = useContext(TodosContext);

  const validate = (e) => {
    const setRequiredInputsCount = (requiredCount) => {
      setCountsInputsInfo((prev) => ({
        ...prev,
        requiredInputsCount: Number(requiredCount),
      }));
    };
    setRequiredInputsCount(e.target.dataset.inputscount);
    const setValidFields = (...data) => {
      const [fieldName, value] = data;
      setSuccessValidFields((prev) => ({
        ...prev,
        [fieldName]: value,
      }));
      setInputErrorsState((prev) => ({
        ...prev,
        [`${fieldName}Error`]: !value,
      }));
    };
    switch (e.target.name) {
      case 'todoText':
        if (e.target.value.length >= 5) { setValidFields('todoText', e.target.value); }
        if (e.target.value.length < 5) { setValidFields('todoText', false); }
        break;
      case 'todoDate':
        if (e.target.value.length >= 5) {
          setValidFields('todoDate',
            new Date(e.target.value).toLocaleString('ru', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }));
        }
        if (e.target.value.length < 5) { setValidFields('todoDate', false); }
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
      { text: successValidFields.todoText, date: successValidFields.todoDate, id: prev.length ? prev[prev.length - 1].id + 1 : '1' },
    ]);
    closePopup();
  };

  useEffect(() => {
    let succesCount = 0;
    Object.values(successValidFields).forEach((el) => { if (Boolean(el) === true) return succesCount += 1; });
    setCountsInputsInfo((prev) => ({
      ...prev,
      successInputsCount: succesCount,
    }));
  }, [successValidFields]);

  useEffect(() => {
    const isValid = countsInputsInfo.successInputsCount === countsInputsInfo.requiredInputsCount;
    setEntryButtonState({ entryButton: isValid });
  }, [countsInputsInfo]);

  return (
    <div>
      <div className={isOpen ? 'popup' : 'popup_hidden'} style={backgroundHandler()} onClick={(e) => e.target.className === 'popup' && closePopup()}>

        {popupName === 'addTodo' && (
        <div className="popup__content">
          <h2 className="popup__title">Добавить заметку</h2>
          <div className="popup__close" onClick={() => closePopup()} />
          <form className="popup__form">
            <p className="popup__input-descriptor">Текст заметки</p>
            <input name="todoText" data-inputscount="2" className="input popup__input" type="text" placeholder="Введите текст заметки" onChange={(e) => handleChange(e)} />
            {!inputErrorsState.todoTextError ? <p className="popup__input-error popup__input-error_hidden"> </p> : <p className="popup__input-error">Слишком короткий текст</p>}
            <p className="popup__input-descriptor">Дата</p>
            <input name="todoDate" data-inputscount="2" className="input popup__input" type="date" placeholder="Введите дату" onChange={(e) => handleChange(e)} />
            {!inputErrorsState.todoDateError ? <p className="popup__input-error popup__input-error_hidden"> </p> : <p className="popup__input-error">Не выбрана дата</p>}
            <button type="button" className={entryButtonState.entryButton ? 'button popup__button popup__button_entry' : 'button popup__button popup__button_disable popup__button_entry'} disabled={!entryButtonState.entryButton} onClick={addTodoHandler}>Добавить</button>
          </form>
        </div>
        )}

      </div>
    </div>
  );
};

Popup.propTypes = {
  isOpen: propTypes.bool.isRequired,
  popupName: propTypes.string.isRequired,
  setPopupState: propTypes.func.isRequired,
  blockBackground: propTypes.bool.isRequired,
};

export default Popup;
