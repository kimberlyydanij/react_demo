import './App.css';
import React, { useEffect, useState } from 'react'; //버전17 이후에는 jsx 사용하더라도 별도로 사용안해줘도 됨
import Input from './componenets/Input1.js';
//js확장자는 생략 가능하다.

function App() {
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  const baseUrl = 'http://localhost:8090/myapp';
  let boardList = [
    { id: 1, todoname: '운동하기', completed: 0 },
    { id: 2, todoname: 'SNS꾸미기', completed: 0 },
    { id: 3, todoname: '사진정리하기', completed: 0 },
  ];

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //DB 접근작업
  function getTodos() {}

  const insertTodo = (e) => {
    e.preventDefault();
    setTodos([
      { id: todos.length + 1, todoname: input, completed: 0 },
      ...todos,
    ]);

    setInput('');
  };

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: todo.completed == 1 ? 0 : 1 }
          : todo
      )
    );
  };
  //넘겨받는 값 여러개이면 {return } 사용하기

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    console.log('input:' + input);
  }, [input]);

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>
      <Input
        input={input}
        insertTodo={insertTodo}
        handleChangeText={handleChangeText}
      />
      <form onSubmit={insertTodo}>
        <input
          type='text'
          required={true}
          value={input}
          onChange={handleChangeText}
        />
        <input type='submit' value='Create' />
      </form>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <h3>
                  <label
                    className={todo.completed ? 'completed' : null}
                    onClick={() => updateTodo(todo.id)}
                  >
                    {todo.todoname}
                  </label>
                </h3>
              </div>
            );
          })
        : null}
    </div>
  );
}
//updateTodo값에 파라미터값 있어서 onClick에서 바로 처리

export default App;
