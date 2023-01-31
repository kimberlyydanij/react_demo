import { useEffect, useState } from "react";

/*
  useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정한다.
  특정작업(side effect) : Time(setTimeout), Ajax - 비동기화 처리방식
  useEffect: useEffect는 side effect라는 뜻이다.
  useEffect 4가지 종류
  1. useEffect(callback) : 마운트 후(Jsx가 실행된 이후), 리렌더링 될 때마다(state값이 변경이 될 때마다)
  2. useEffect(callback,[]) : 마운트 후
  3. useEffect(callback, [state]) : 마운트 후, state
  4. useEffect(callback() { return();}, []) : 마운트 후, 언마운트 전(현재 component가 종료되기 전)
*/

const MyuseEffect001 = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    console.log("렌더링이 완료되었습니다");
  });

  //name이 state 되었을 때마다
  useEffect(() => {
    console.log("렌더링 name: " + name);
  }, [name]);

  //nickname이 state 되었을 때마다
  useEffect(() => {
    console.log("렌더링 nickname: " + nickname);
  }, [nickname]);

  //name or nickname이 state 되었을 때 마다
  useEffect(() => {
    console.log("렌더링 name: " + name + "렌더링 nickname: " + nickname);
  }, [name, nickname]);

  //name이 state 되었을 때 마다
  useEffect(() => {
    console.log("랜더링 return: " + name);

    //언마운트 직전 실행
    return () => {
      console.log("clean up");
    };
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={onChangeName}
        placeholder="name"
      />

      <input
        type="text"
        value={nickname}
        onChange={onChangeNickname}
        placeholder="nickname"
      />

      <div>
        <b>이름:</b> {name}
      </div>

      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};

export default MyuseEffect001;
