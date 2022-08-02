import React, { useContext, useEffect } from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoContext from "./store/context";
import AppWrapper from "./components/AppWrapper";
import Header from "./components/Header";
import countOpenToDos from "./utils/count-open-todos";
import ToDo from "./ToDo.model";

const storageKey = "ta_todos";

const App: React.FC = () => {
  const ctx = useContext(ToDoContext);
  const headerText =
    countOpenToDos(ctx.todos) === 0
      ? "Everything's done!"
      : `Things to do (${countOpenToDos(ctx.todos)}):`;

  useEffect(() => {
    try {
      const storedToDos = window.localStorage.getItem(storageKey);
      if (storedToDos) {
        const storedToDosHydrated = JSON.parse(storedToDos);
        if (
          typeof storedToDosHydrated === "object" &&
          storedToDosHydrated.length
        ) {
          storedToDosHydrated.reverse().forEach((todo: ToDo) => {
            ctx.add(todo);
          });
        }
      }
    } catch (e) {
      console.error(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(ctx.todos);
    if (ctx.todos.length) {
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(ctx.todos));
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        window.localStorage.removeItem(storageKey);
      } catch (e) {
        console.error(e);
      }
    }
  }, [ctx.todos]);

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
