import React, { useState, useRef } from 'react';

function InputUser() {
  const [inputs, setInputs] = useState({
    userid: '',
    password: '',
  });

  const { userid, password } = inputs;

  const idInput = useRef();

  const onReset = () => {
    setInputs({
      userid: '',
      password: '',
    });
    idInput.current.focus();
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        name="userid"
        placeholder="아이디를 입력하세요"
        value={userid}
        onChange={onChange}
        ref={idInput}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={onChange}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          값: {userid}({password})
        </b>
      </div>
    </div>
  );
}

export default InputUser;
