import { useContext } from 'react';
import { TodoContext } from '..contexts/TodoContext';

const Label = (props) => {
  const { todo, updateTodo, deleteTodo } = props;
  return (
    <h3>
      <label
        className={todo.completed ? 'completed' : null}
        onClick={() => updateTodo(todo.id)}
      >
        {todo.todoname}
      </label>

      <label
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        {' '}
        삭제
      </label>
    </h3>
  );
};

export default Label;
