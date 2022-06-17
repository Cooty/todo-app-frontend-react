import { useReducer, FC } from "react";
import Context from "./context";
import reducer, { initialState } from "./reducer";

const Provider: FC = (props) => {
  const [state, dispatcher] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        todos: state.todos,
        add: (todo) => dispatcher({ type: "ADD", todo }),
        delete: (id) => dispatcher({ type: "DELETE", id }),
        toggle: (id) => dispatcher({ type: "TOGGLE_DONE", id }),
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
