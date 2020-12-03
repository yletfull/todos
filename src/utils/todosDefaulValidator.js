// import TodosList from '../backupTodos.json';

const todosDefaultValidator = (todos) => {
  const checked = todos.filter((todo) => todo.checked === true);
  const noChecked = todos.filter((todo) => todo.checked === false);
  const result = [
    ...noChecked,
    ...checked,
  ];
  return result;
};

export default todosDefaultValidator;
