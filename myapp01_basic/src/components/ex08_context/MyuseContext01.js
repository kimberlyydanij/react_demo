import './MyuseContext01.css';
import React, { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext.js';
import { UserContext } from './contexts/UserContext.js';
import Left1 from './Left1';
import Right1 from './Right1';

const MyuseContext01 = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('홍길동');

  const onHandleIncrease = () => {
    setNumber(number + 1);
  };

  const onHandleName = () => {
    setName(name === '홍길동' ? '여진구' : '홍길동');
  };

  return (
    <div id='page'>
      <h1>Page</h1>
      <div className='grid'>
        <UserContext.Provider value={{ name, setName, onHandleName }}>
          <ThemeContext.Provider
            value={{ number, setNumber, onHandleIncrease }}
          >
            <Left1 />
            <Right1 />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default MyuseContext01;