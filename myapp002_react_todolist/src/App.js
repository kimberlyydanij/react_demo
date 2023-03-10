////버전17 이후에는 jsx 사용하더라도 별도로 js확장자는 생략 가능하다.
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './commonApi/todoApi.js';
import Input from './components/input1';

function App() {
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  //const baseUrl = 'http://localhost:8090/';

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //랜더링이 모두 끝난 후 매번 실행 //딱 한번만 실행할대 마지막줄 [] 넣음
  useEffect(() => {
    getTodos();
  }, []);

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  //DB 접근작업
  async function getTodos() {
    await axios
      .get(baseUrl + '/todo/all')
      .then((response) => {
        //console.log(response.data);
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const insertTodo = async (e) => {
    e.preventDefault();
    await axios
      .post(baseUrl + '/todo', { todoname: input })
      .then((response) => {
        console.log(response.data);
        setInput('');
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });

    console.log('할 일이 추가 됨');
  };

  const updateTodo = async (id, completed) => {
    await axios
      .put(baseUrl + '/todo/' + id + '/' + completed)
      .then((response) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id
              ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
              : todo
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(baseUrl + '/todo/' + id)
      .then((response) => {
        setTodos(
          todos.filter((todo) => {
            return todo.id !== id;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
    //setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    console.log('input:' + input);
  }, [input]);

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST 1(props)</h1>
      <Input
        input={input}
        insertTodo={insertTodo}
        handleChangeText={handleChangeText}
      />
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <h3>
                  <label
                    className={todo.completed ? 'completed' : null}
                    onClick={() => updateTodo(todo.id, todo.completed)}
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
