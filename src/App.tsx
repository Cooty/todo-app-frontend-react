import React, { useState } from 'react';
import ToDoList from './components/ToDoList/ToDoList';
import AddToDo from './components/AddToDo/AddToDo';
import ToDo from './ToDo.model';
import AppWrapper from "./components/AppWrapper";
import Header from "./components/Header";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addToDoHandler = (text: string) => {
    setTodos((prevTodos: ToDo[]): ToDo[] => [
      ...prevTodos, 
      {id: Date.now().toString(), text: text, isDone: false}
    ]);
  };

  const deleteToDoHandler = (id: string) => {
    setTodos((prevTodos: ToDo[]): ToDo[] => {
      return prevTodos.filter(todo => todo.id !== id);
    })
  }

  const toggleDone = (id: string) => {
    setTodos((prevTodos: ToDo[]): ToDo[] => {
      return prevTodos.map(todo => {
        if(todo.id !== id) {
          return todo;
        }

        return {
          id: todo.id,
          text: todo.text,
          isDone: !todo.isDone
        };
      });
    });
  }

  return (
    <AppWrapper>
      <AddToDo onAddToDo={addToDoHandler} 
               inputId="todo-input"
               placeholder="Start typing to add a ToDo" 
      />
      {
        todos.length ? (
          <React.Fragment>
            <Header>
              Things to do:
            </Header>
            <ToDoList items={todos} 
                      onDeleteTodo={deleteToDoHandler}
                      onToggleDone={toggleDone}
            />
          </React.Fragment>
        ) : null
      }
    </AppWrapper>
  );
}

export default App;
