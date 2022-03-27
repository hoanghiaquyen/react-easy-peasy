import { useStoreState } from "../../app/hooks";

const TodosList = () => {
  const todos = useStoreState((store) => store.todos.items);
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodosList;
