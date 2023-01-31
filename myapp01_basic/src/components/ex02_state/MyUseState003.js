import { useState } from 'react';

const MyUseState003 = () => {
  const [names, setNames] = useState(['고수', '여진구', '송중기']);
  const [input, setInput] = useState('');
  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    setNames([...names, input]); //기존꺼 복사해주고 앞에다가 추가함
    setInput('');
  };

  return (
    <div>
      <input type='text' id='fname' onChange={handleChangeName} value={input} />
      <button onClick={handleClick}>Add</button>
      {names.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}

      {/* {names.map((value, index) => (
        return <p key={index}>{value}</p>
      ))} */}
    </div>
  );
};

export default MyUseState003;
