import { useDispatch, useSelector } from 'react-redux';
import Label from './label3';

const Todo = () => {
  const todos = useSelector((todos) => todos);
  const dispatch = useDispatch();

  const updateTodo = (id) => {
    dispatch({ type: 'UPDATE', id: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE', id: id });
  };

  return (
    <>
      {todos
        ? //반복되서 정해진 값이 아닌 경우 props로 넘겨주는게 좋다
          todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <Label
                  todo={todo}
                  updateTodo={() => updateTodo(todo.id, todo.completed)}
                  deleteTodo={() => deleteTodo(todo.id)}
                />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo;
