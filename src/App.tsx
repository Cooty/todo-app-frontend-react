import React, { useContext } from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoContext from "./store/context";
import AppWrapper from "./components/AppWrapper";
import Header from "./components/Header";
import countOpenToDos from "./utils/count-open-todos";

const App: React.FC = () => {
  const ctx = useContext(ToDoContext);
  const headerText =
    countOpenToDos(ctx.todos) === 0
      ? "Everything's done!"
      : `Things to do (${countOpenToDos(ctx.todos)}):`;

  return (
    <AppWrapper>
      <AddToDo inputId="todo-input" placeholder="Start typing to add a ToDo" />
      {ctx.todos.length ? (
        <React.Fragment>
          <Header>{headerText}</Header>
          <ToDoList
            items={ctx.todos}
            onDeleteTodo={ctx.delete}
            onToggleDone={ctx.toggle}
          />
        </React.Fragment>
      ) : null}
    </AppWrapper>
  );
};

export default App;
