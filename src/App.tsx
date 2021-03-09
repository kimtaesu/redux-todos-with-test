import TodoFilters from "./components/TodoFilters";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <TodoForm />
      <TodoList />
      <TodoFilters />
    </div>
  );
}

export default App;
