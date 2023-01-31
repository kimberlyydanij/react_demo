import { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.check) {
    case 'name':
      return { name: action.type };
    case 'nickName':
      return { nickName: action.type };
    default:
      return { state };
  }
}

const MyuseReducer002 = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', nickName: '' });
  const { name, nickName } = state; //구조분해할당

  const onChange = (e) => {
    dispatch({ check: e.target.name, type: e.target.value });
  };

  return (
    <div>
      <div>
        <input type='text' name='name' placeholder='name' onChange={onChange} />
        <input
          type='text'
          name='nickName'
          placeholder='nickName'
          onChange={onChange}
        />
      </div>
      <div>
        <b>이름:</b>
        {name} {/*구조분해할당을 통해서 state.name이 아닌 name으로 사용가능}*/}
      </div>

      <div>
        <b>닉네임:</b>
        {nickName}
        {/*구조분해할당을 통해서 state.nickName이 아닌 nickName으로 사용가능}*/}
      </div>
    </div>
  );
};

export default MyuseReducer002;
