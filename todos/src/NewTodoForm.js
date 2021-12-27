import { useState } from "react";

const NewTodoForm = ({createTodo}) => {
  const [task, setTask] = useState('');

  const handleChange = evt => {
    setTask(evt.target.value);
  }

  const handleSubmit = evt =>{
    evt.preventDefault();
    createTodo(task);
    setTask('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input
          name="task"
          type="text"
          onChange={handleChange}
          value={task}
        />
        <button>Add a todo!</button>
      </form>
    </div>
  );
}

export default NewTodoForm;