import '../MyJsx003.css';

const MyJst003 = () => {
  const numX = 3;
  const numY = 5;

  return (
    <>
      <div>{`${numX} +  ${numY} = ${numX + numY}`}</div>
      <div className='line'>Line Test</div>
    </>
  );
};

export default MyJst003;
