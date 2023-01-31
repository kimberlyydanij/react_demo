import { useEffect, useRef } from "react";

const MyuseRef002 = () => {
  const nameRef = useRef("");

  const handleBtn = () => {
    console.log(nameRef.current);
    console.log(nameRef.current.value);
    nameRef.current.value = "";
  };

  // useEffect() : import를 해야하며 지정된 Ref를 가져와 효과를 줄 수 있다.
  // 랜더링이 다 된 이후 마지막으로 실행됨
  // .focus() : 포커스 효과를 주기 위해 사용
  useEffect(() => {
    nameRef.current.focus();
  });

  return (
    <div>
      <input type="text" placeholder="이름입력" ref={nameRef} />
      <button onClick={handleBtn}>Click</button>
    </div>
  );
};

export default MyuseRef002;
