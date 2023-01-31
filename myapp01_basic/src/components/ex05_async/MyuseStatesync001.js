import { useState } from "react";

/*
  React은 state가 변경이 될때마다 렌더링이 발생한다.
  React 렌더링이 발생되면 배치로 해서 처리한다.
  배치 16ms 단위로 처리한다.
  useState()은 비동기화로 처리한다.
*/
const MyuseStatesync001 = () => {
  const [number, setNumber] = useState(0);

  const handleUpNumber = (e) => {
    //같은 방법이 동시에 실행이 될 경우 16ms 단위 안에서는 마지막 하나만 실행된다.
    //console창에 0이 먼저 출력되는 이유는 여러개를 처리할 경우 console이 우선적으로 처리되기 때문. 초기값으로 설정된 0 값이 출력된다.
    setNumber(number + 3);
    console.log(number);

    setNumber(number + 2);
    console.log(number);

    setNumber(number + 1);
    console.log(number);
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

export default MyuseStatesync001;
