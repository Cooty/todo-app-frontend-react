import reducer, { initialState, ActionType, State } from "./reducer";

describe("Reducer function for the app", () => {
  it("Can add an item to the state", () => {
    const myAddAction = {
      type: "ADD",
      todo: { id: "t1", text: "Learn React", isDone: false },
    } as ActionType;
    const newState = reducer(initialState, myAddAction);

    expect(newState.todos.length).toBe(1);
    expect(newState.todos[0].text).toBe("Learn React");
    expect(newState.todos[0].id).toBe("t1");
    expect(newState.todos[0].isDone).toBe(false);
  });

  it("Can delete an item from the state", () => {
    const myCurrentState = {
      todos: [
        { id: "t1", text: "Learn React", isDone: false },
        { id: "t2", text: "Walk the Dog", isDone: false },
        { id: "t3", text: "Feed the Dog", isDone: false },
      ],
    } as State;
    const myDeleteAction = {
      type: "DELETE",
      id: "t2",
    } as ActionType;
    const newState = reducer(myCurrentState, myDeleteAction);
    expect(newState.todos.length).toBe(2);
    expect(newState.todos[1].id).toBe("t3");
  });

  it("Can toggle a ToDo item's done state", () => {
    const myCurrentState = {
      todos: [{ id: "t1", text: "Walk the Dog", isDone: false }],
    } as State;
    const newState = reducer(myCurrentState, { type: "TOGGLE_DONE", id: "t1" });

    expect(newState.todos[0].isDone).toBe(true);
  });

  it("Throws an exception, when an action of unknown type is passed", () => {
    function cb() {
      // Theoretically TS would rule this scenario out, but just to cover all branches of the function
      reducer(initialState, {
        // @ts-ignore
        type: "DO_STUFF",
        id: "wewedsd",
      });
    }

    expect(cb).toThrow();
  });
});
