import { render } from "@testing-library/react";
import TodoList from "./TodoList";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './Reducer';

const store = createStore(Reducer);

it("renders without crashing", function() {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
});