const Input = (props) => {
  const { input, insertTodo, handleChangeText } = props;
  //부모로 부터 이런 값들을 받아옴

  return (
    <form onSubmit={insertTodo}>
      <input
        type='text'
        required={true}
        value={input}
        onChange={handleChangeText}
      />
      <input type='submit' value='Create' />
    </form>
  );
};

export default Input;
