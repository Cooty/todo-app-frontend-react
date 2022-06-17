import ToDo from "../ToDo.model";
import TodoActionType from "./ToDoAction.type";

export interface State {
  todos: ToDo[];
}

interface Action {
  type: TodoActionType;
}

interface AddAction extends Action {
  type: "ADD";
  todo: ToDo;
}

interface DeleteAction extends Action {
  type: "DELETE";
  id: string;
}

interface ToggleDoneAction extends Action {
  type: "TOGGLE_DONE";
  id: string;
}

export type ActionType = AddAction | DeleteAction | ToggleDoneAction;

export const initialState = {
  todos: [],
} as State;

const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "ADD":
      return { todos: [action.todo, ...state.todos] };
    case "DELETE":
      return { todos: state.todos.filter((todo) => todo.id !== action.id) };
    case "TOGGLE_DONE":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }

          return {
            id: todo.id,
            text: todo.text,
            isDone: !todo.isDone,
          };
        }),
      };
    default:
      throw new Error(`Unknown action type: ${(action as ActionType).type}`);
  }
};

export default reducer;
