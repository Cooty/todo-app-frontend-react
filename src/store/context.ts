import { createContext } from "react";
import ToDo from "../ToDo.model";

interface ToDoContext {
  todos: ToDo[];
  add: (item: ToDo) => void;
  delete: (id: string) => void;
  toggle: (id: string) => void;
}

export default createContext<ToDoContext>({
  todos: [],
  add: (item: ToDo) => {},
  delete: (id: string) => {},
  toggle: (id: string) => {},
});
