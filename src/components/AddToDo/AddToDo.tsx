import React, { useState } from 'react';
import Form from "./Form";
import Label from "./Label";
import Button from "./Button";
import Input from "./Input";

interface AddToDoProps {
    onAddToDo: (text: string) => void
}

const AddToDo: React.FC<AddToDoProps> = (props) => {
    const [toDoText, setToDoText] = useState('');

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if(toDoText) {
            props.onAddToDo(toDoText);
            setToDoText('');
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <Label htmlFor="todo-text">Add some new task</Label>
            <Input type="text"
                   id="todo-text" 
                   autoFocus
                   autoCorrect="off"
                   autoCapitalize="off"
                   autoComplete="off"
                   placeholder="Start typing to add a ToDo"
                   value={toDoText}
                   onChange={(e) => setToDoText(e.target.value)}
            />
            <Button type="submit" disabled={!toDoText.length}>
                Add ToDo!
            </Button>
        </Form>
    );
}

export default AddToDo;