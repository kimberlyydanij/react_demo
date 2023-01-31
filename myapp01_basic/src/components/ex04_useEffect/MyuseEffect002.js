import { useEffect, useState } from "react";

const MyuseEffect002 = () => {
  let data = 0;
  const [num, setNum] = useState(0);

  const handleData = (e) => {
    console.log((data = data + 1));
  };

  const handleNum = (e) => {
    // setNum(e.target.value + 1); //11
    // setNum(parseInt(e.farget.value) + 1); //2
    setNum(num + 1);
  };

  //variable은 랜더링이 발생하지 않는다.
  useEffect(() => {
    console.log("data: " + data);
  }, []); //일반변수를 []안에 넣게 되도 적용되지 않는다. 이 말은 []만 넣은 것과 동일하다.

  //state는 랜더링이 발생한다.
  useEffect(() => {
    console.log("num: " + num);
  }, [num]);

  return (
    <div>
      <input type="text" placeholder="data" onChange={handleData} />
      <input type="text" placeholder="num" onChange={handleNum} />
      <button>등록</button>

      {/* <div>
        <b>data: {data}</b>
      </div>

      <div>
        <b>num: {num}</b>
      </div> */}
    </div>
  );
};

export default MyuseEffect002;
