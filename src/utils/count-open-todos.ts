import ToDo from "../ToDo.model";

const countOpenToDos = (todos: ToDo[]) => {
  return todos.reduce((prev, current) => {
    if (!current.isDone) {
      return prev + 1;
    }

    return prev;
  }, 0);
};

export default countOpenToDos;
