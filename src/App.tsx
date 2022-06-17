import React, { useContext } from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoContext from "./store/context";
import AppWrapper from "./components/AppWrapper";
import Header from "./components/Header";

const App: React.FC = () => {
  const ctx = useContext(ToDoContext);

  return (
    <AppWrapper>
      <AddToDo inputId="todo-input" placeholder="Start typing to add a ToDo" />
      {ctx.todos.length ? (
        <React.Fragment>
          <Header>Things to do:</Header>
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
