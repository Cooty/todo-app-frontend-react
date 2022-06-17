import { FC } from "react";
import ToDo from "../../ToDo.model";
import Text from "./Text";
import List from "./List";
import ListItem from "./ListItem";
import CloseButton from "./CloseButton";
import CustomCheckbox from "./CustomCheckbox";
import CrossIcon from "../CrossIcon";

interface ToDoListProps {
  items: ToDo[];
  onDeleteTodo: (id: string) => void;
  onToggleDone: (id: string) => void;
}

const ToDoList: FC<ToDoListProps> = (props) => {
  return (
    <List>
      {props.items.map((todo) => {
        return (
          <ListItem key={todo.id}>
            <CustomCheckbox>
              <input
                type="checkbox"
                onChange={() => {
                  props.onToggleDone(todo.id);
                }}
              />
              <span>✔</span>
            </CustomCheckbox>
            <Text isDone={todo.isDone}>{todo.text}</Text>
            <CloseButton
              type="button"
              onClick={() => {
                props.onDeleteTodo(todo.id);
              }}
            >
              <CrossIcon rotated size="small" />
            </CloseButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ToDoList;
