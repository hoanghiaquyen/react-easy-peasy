import { counterModel, CounterModel } from "../../features/counter";
import { postModel, PostModel } from "../../features/post";
import { TodoModel, todoModel } from "../../features/todo";

export interface Model {
  todos: TodoModel;
  counter: CounterModel;
  posts: PostModel;
}

const model: Model = {
  todos: todoModel,
  counter: counterModel,
  posts: postModel,
};

export default model;
