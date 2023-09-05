import { useState } from "react";
import Item from "./Item";

const list = [
  { id: 1, name: "Personal Greeting Card", done: false },
  { id: 2, name: "User Profile", done: true },
  { id: 3, name: "Like Button", done: false },
  { id: 4, name: "Todo List Item", done: false },
  { id: 5, name: "Product List", done: false },
  { id: 6, name: "Accordion", done: false },
  { id: 7, name: "Comment System", done: false },
  { id: 8, name: "Dynamic Tabs", done: false },
  { id: 9, name: "Theme Switcher", done: false },
  { id: 10, name: "Advanced Comment System with Reply", done: false },
];

const TodoListItem = () => {
  const [todos, setTodos] = useState(list);

  function toggleCheck(id) {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  }
  return (
    <ul className="text-gray-600 space-y-2">
      {todos.map((item) => (
        <Item key={item.id} name={item.name} id={item.id} done={item.done} toggleCheck={toggleCheck} />
      ))}
    </ul>
  );
};

export default TodoListItem;
