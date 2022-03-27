import { Todo } from "./todo.interface";

interface TodoState {
  items: Todo[];
}

export interface TodoAction {}

export interface TodoThunk {}

export interface TodoModel extends TodoState, TodoAction, TodoThunk {}

export const todoModel: TodoModel = {
  items: [],
};
