import countOpenToDos from "./count-open-todos";

describe("A function for counting the ToDos that are not done yet", () => {
  it("returns the number of ToDos where the isDone key is false", () => {
    const myToDos = [
      { id: "t1", text: "Learn React", isDone: false },
      { id: "t2", text: "Walk the Dog", isDone: false },
      { id: "t3", text: "Feed the Dog", isDone: true },
      { id: "t4", text: "Wash the Dog", isDone: false },
      { id: "t5", text: "Cuddle the Dog", isDone: true },
    ];

    expect(countOpenToDos(myToDos)).toBe(3);
  });
});
