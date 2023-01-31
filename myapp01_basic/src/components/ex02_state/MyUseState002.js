import { useState } from 'react';

const MyUseState002 = () => {
  //const [상태, 변경함수] =  useState(초기값)

  const [cnt, setCnt] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setCnt(cnt + 1);
  };

  return (
    <div>
      <p>
        cnt : <span>{cnt}</span>
      </p>
      <button onClick={handleClick}>CNT Update</button>
    </div>
  );
};

export default MyUseState002;
