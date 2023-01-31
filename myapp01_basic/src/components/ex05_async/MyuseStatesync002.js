import { useState } from "react";

/*
  React은 state가 변경이 될때마다 렌더링이 발생한다.
  React 렌더링이 발생되면 배치로 해서 처리한다.
  배치 16ms 단위로 처리한다.
  useState()은 비동기화로 처리한다.
*/
const MyuseStatesync002 = () => {
  const [number, setNumber] = useState(0);

  const handleUpNumber = (e) => {
    //state의 값을 순차적으로 변경할 때 콜백함수를 사용한다.
    //한번에 처리하기 위해서 ()안에 콜백함수를 넣어 처리되게 한다.
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
  };

  const handleDownNumber = (e) => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleUpNumber}>UP</button>
      <button onClick={handleDownNumber}>DOWN</button>
    </div>
  );
};

export default MyuseStatesync002;
