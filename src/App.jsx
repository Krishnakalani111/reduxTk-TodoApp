import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./store/features";
import sun from "./assets/sun.png";
import moon from "./assets/moon.png";

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.todo.isDarkMode);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const toggleButtonImageSrc = isDarkMode ? moon : sun;

 const bgClass = isDarkMode ?  "bg-orange-300":"bg-zinc-800";
 const textClass = isDarkMode ? "text-gray-800" : "text-orange-400";

  return (
    
    <div className={`min-h-screen ${bgClass} ${textClass}`}>
      <div className="mx-auto max-w-3xl py-4">
      <div className=" my-10 flex justify-between  ">
        <h1 className="text-3xl font-extrabold mx-10">Todo List</h1>
        <button onClick={handleToggleDarkMode}>
          <img
            className="h-[30px]"
            src={toggleButtonImageSrc}
            alt="Toggle Dark Mode"
          />
        </button>
      </div>
      <div className=" sm:px-6 md:px-8 py-8">
        <TodoForm />
        <TodoList />
        </div>
        </div>
      </div>
      
  );
}

export default App;
