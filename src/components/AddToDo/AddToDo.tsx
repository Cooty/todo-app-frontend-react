import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";
import Form from "./Form";
import Label from "./Label";
import Button from "./Button";
import Input from "./Input";
import InputWrapper from "./InputWrapper";
import ButtonWrapper from "./ButtonWrapper";
import CrossIcon from "../CrossIcon";
import ToDoContext from "../../store/context";

interface AddToDoProps {
  inputId: string;
  placeholder: string;
}

const AddToDo: React.FC<AddToDoProps> = (props) => {
  const [toDoText, setToDoText] = useState("");
  const ctx = useContext(ToDoContext);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (toDoText) {
      ctx.add({ id: nanoid(), text: toDoText, isDone: false });
      setToDoText("");
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Label htmlFor={props.inputId}>Add some new task</Label>

      <InputWrapper>
        <Input
          type="text"
          id={props.inputId}
          autoFocus
          autoCorrect="off"
          autoCapitalize="off"
          autoComplete="off"
          placeholder={props.placeholder}
          value={toDoText}
          onChange={(e) => setToDoText(e.target.value)}
        />

        <ButtonWrapper>
          <Button type="submit" disabled={!toDoText.length}>
            <CrossIcon size="big" />
            <span className="sr-only">Add ToDo!</span>
          </Button>
        </ButtonWrapper>
      </InputWrapper>
    </Form>
  );
};

export default AddToDo;
