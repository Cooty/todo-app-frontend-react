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
              <div>
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() => {
                    props.onToggleDone(todo.id);
                  }}
                />
                <span>✔</span>
              </div>
              <Text isDone={todo.isDone}>{todo.text}</Text>
            </CustomCheckbox>
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
