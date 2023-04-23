import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../store/features';
import { useSelector } from 'react-redux';



const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleTodo({
      id: todo.id,
      completed: !todo.completed
    }));
  };

  const handleRemoveClick = () => {
    dispatch(removeTodo({
     id:todo.id
    }));
  };



  return (
    <div className="flex justify-between items-center border-b border-gray-400 py-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxClick}
          className="mr-2"
        />
        <span
          className={
            todo.completed
              ? 'line-through text-gray-500'
              : 'text-white font-medium'
          }
        >
          {todo.text}
        </span>
      </div>
      <button onClick={handleRemoveClick} className="text-red-600">
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
