import { useState } from "react";
import Box from "./components/Box";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  const [todos, setTodos] = useState([]);

  const removeTodo = (id) => {
    console.log(id);
    const newTodos = todos.filter((d, index) => {
      if (index !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTodos(newTodos);
  };

  const addTodoHandler = (item) => {
    setTodos([
      ...todos,
      {
        item,
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };

  return (
    <div className="bg-black h-screen p-3">
      <Header />
      <div className="mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white rounded-lg ">
        <Input handler={addTodoHandler} />
        <Box data={todos} removeHandler={removeTodo} />
      </div>
    </div>
  );
}

export default App;
