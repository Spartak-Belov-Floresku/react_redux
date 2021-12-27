import { useSelector, useDispatch } from 'react-redux';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {

  const dispatch = useDispatch();
  const todos = useSelector(st => st.todos);

  const addNewTodo = task => {
    dispatch({
      type: "ADD_TODO",
      task
    });
  }

  const handleUpdate = (id, updatedTask) => {
    dispatch({
      type: "UPDATE_TODO",
      id,
      updatedTask 
    });
  }
  
  const handleDelete = id => {
    dispatch({ type: "REMOVE_TODO", id });
  }

  const todosJSX = todos.map(todo => (
    <Todo
      deleteTodo={handleDelete}
      id={todo.id}
      key={todo.id}
      task={todo.task}
      updateTodo={handleUpdate}
    />
  ));
  return (
    <div>
      <NewTodoForm createTodo={addNewTodo} />
      <ul>{todosJSX}</ul>
    </div>
  );
}

export default TodoList;