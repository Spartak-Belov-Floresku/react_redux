import {v4} from "uuid";

const INITIAL_STATE = {
  todos: []
}

const Reducer = (state=INITIAL_STATE, action) => {
  if(action.type === "ADD_TODO"){
    return { ...state, todos: [...state.todos, {task: action.task, id: v4()}] }
  }
  if (action.type === "UPDATE_TODO") {
    const todos = state.todos.map(todo => {
      if (todo.id === action.id) {
        return { ...todo, task: action.updatedTask };
      }
      return todo
    });
    
    return {
      ...state, todos
    }
  }
  if (action.type === "REMOVE_TODO") {
    return { ...state, todos: state.todos.filter(todo => todo.id !== action.id)}
  }
  return state
}

export default Reducer