import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  import {filteredTodoListState} from "../../data/atoms";
  import {TodoItemCreator} from "../Todo/TodoItemCreator";
  import {TodoItem} from "./ToDoItem";
  import { TodoListStats } from './TodoListStats';
  import { TodoListFilters } from './TodoListFilters';

export function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);
  
    return (
      <>
        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />
  
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );
  }