import Recat, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0); // 0이 number 에 들어가고 number를 변경해주는게 setNumber다.

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>[ + ]</button>
      <button onClick={onDecrease}>[ - ]</button>
    </div>
  );
}

export default Counter;
